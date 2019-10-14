# Same Origin Policy Exercises

Consider the following aliases:

| Name | URL |
|------|-----|
| main | http://foo.com/index.html |
| iframe1 | http://foo.com/iframe1.html |
| iframe2 |	http://private.foo.com/iframe2.html |
| iframe3 | http://auth.foo.com/iframe3.html |
| iframe4 | http://bar.com/iframe4.html |
| iframes | All iframes above |
| mypopup |	http://foo.com/popup.html |
| notmypopup | http://bar.com/popup2.html |

## Exercises

### Group 1

Using the browser console, perform the following tasks:
1. Verify that `main`, `iframe1`, `iframe2`, `ìframe4` and `mypopup` all have different browsing contexts.

1. Check if `main` can change the body of the `iframes` and of the `mypopup`.

1. Check if any of the `iframes` can change the body of the `main`.

1. Check if `iframe2` can change the body of `iframe1`

1. Check if `mypopup` can change the body of `main`

1. Relax the origin in `iframe2` to `foo.com` and check if anything changed.

1. Can we do the same to `iframe4`? Why?

### Group 2

1. Using `notmypopup` navigate `main` to your favorite news site.

1. Change `main`to prevent `notmypopup` from navigating it away.

### Group 3

1. Add code to `iframe3` that allows it to receive messages from `ìframe4`. It should ignore messages from other origins other than `iframe4`'s. Now, try sending messages to it. 

1. Experiment with the `targetOrigin` (2nd postMessage parameter). What happens when you specify a bogus origin?