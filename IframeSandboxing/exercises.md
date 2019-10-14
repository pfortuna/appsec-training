# Iframe Sandboxing Exercises

Consider the following aliases:

| Name | URL |
|------|-----|
| main | http://foo.com/index.html |
| iframe1 | http://foo.com/iframe1.html |
| iframe2 |	http://foo.com/iframe2.html |
| iframe2 |	http://foo.com/iframe3.html |


## Exercises

### Group 1

Using the browser console, perform the following tasks:
1. Verify the origin in `main`, `iframe1` and `iframe2`.

1. Try accessing `top.document` from `iframe2`. Describe what happened.

1. Add an inline script to `iframe2` that tampers with the `<h3>` element in `iframe2`. Run it. Describe what happened. 

1. Run the same code but now on the console. Describe what happened.

1. Put that code on a separate JS file called `h3tamper.js` and embedded in the `iframe2`. Run it. Describe what happened.

1. Make all the necessary changes to the inline script in order for it to work.

1. Run `alert(1)` on `iframe2` console. Make all the necessary changes in order for it to work.

1. Change the sandbox permissions in order for `iframe2` to access `top.document` successfully.

1. Change the sandbox permissions in order for `iframe2` to change the location of the `main` window? Demonstrate it.

### Group 2

1. Create an `iframe3` element in `main` with sandbox permissions `allow-origin ` and try to break out of the sandbox by navigating away the `main` window from `iframe3`.

1. Add `iframe4` element in `main` sandboxed with no extra permissions and use `srcdoc` to include an inline script that prints `Hello World!` to the console. Describe what happened.

1. How can we leverage `srcdoc` to render user-provided content?
