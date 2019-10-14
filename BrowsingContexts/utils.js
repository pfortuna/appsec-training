const validateUrl = (expectedUrl) => {
    if (document.location.href !== expectedUrl) {
        return `Error! You need to run this WebApp under ${expectedUrl}!`;
    }
    return expectedUrl;
}

const appendUrlHeader = (headerSize, expectedUrl = '') => {
    if (!/[1-3]/.test(headerSize)) return `Bailed due to invalid header size`;
    let hdr = document.createElement("h" + headerSize);
    hdr.innerText = (expectedUrl !== '') ? validateUrl(expectedUrl): document.location.href;
    let bodyEl = document.getElementsByTagName("body");
    bodyEl.length && bodyEl[0].insertBefore(hdr, bodyEl[0].firstChild);
}

const createIframe = (id, url) => {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', url);
    iframe.setAttribute('id', id);
    let bodyEl = document.getElementsByTagName("body");
    bodyEl.length && bodyEl[0].appendChild(iframe);
    //bodyEl[0].insertBefore(iframe, bodyEl[0].firstChild);
}