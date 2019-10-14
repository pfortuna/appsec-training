# Housekeeping

Resources tab, local storage, chrome-devtools://devtools, right-click “consoleHistory” -> “delete”


# Script src leaking Demo

Add these two scripts to `main`:

```
var script1 = document.createElement( "script" );
script1.setAttribute("id", "s1");
script1.innerText = "console.log('This is inline script s1');";
document.body.appendChild(script1);

var script2 = document.createElement( "script" );
script2.setAttribute("src", "http://foo.com/s2.js");
script2.setAttribute("id", "s2");
document.body.appendChild(script2);

var script3 = document.createElement( "script" );
script3.setAttribute("src", "http://bar.com/s3.js");
script3.setAttribute("id", "s3");
document.body.appendChild(script3);
```

Run the following commands:
```
> document.getElementById("s1").innerText
< "console.log('This is inline script s1');"
> document.getElementById("s2").innerText
< ""
> document.getElementById("s3").innerText
< ""
> myFunction
< ƒ myFunction()
  {
     console.log("this is s3.js myFunction");
  }
```

Being same-origin, we can fetch `s2` content using an XHR request:
```
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://foo.com/s2.js');
xhr.onload = function() { 
    console.log(xhr.response);
}
xhr.send();
```

Result:
```
console.log("this is s2.js");
```

We can do the same with the Fetch API:
```
var response = await fetch('http://foo.com/s2.js');
var responsePromise = await response;
var resultPromise = responsePromise.text();
resultPromise.then(function(result) {
    console.log(result);
});
```

If we try to use either XHR or Fetch to get the content of a cross-origin resource, CORS blocks it.
```
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'http://bar.com/s2.js');
xhr2.onload = function() { 
    console.log(xhr2.response);
}
xhr2.send();
```

An error is thrown:
```
Access to XMLHttpRequest at 'http://bar.com/s2.js' from origin 'http://foo.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```