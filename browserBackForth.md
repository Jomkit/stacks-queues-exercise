// Written in pseudocode
# Browser Back and Forth Pseudocode
### One possible implementation browser back/Forward system

- Using stack data structures, first set up a stack class, and then instantiate "backHistory" and "forthHistory" stacks.


``` JS
let backHistory = new Stack();
let forthHistory = new Stack();
```

- backHistory will store the url for previously visited pages by pushing the current url to the backHistory stack as the user clicks a link (or some similar action) to move to a new page. 
    - Alternatively, we could store the current url on a temperorary variable and then push that to the backHistory stack after a new page has loaded, before saving the new url to that variable

``` JS
let currUrl = window.location.href;
// on new page load
backHistory.push(currUrl);
currUrl = window.location.href;
```

- Returning to other previously accessed page could be handled by loading the top entry in backHistory, using ```backHistory.pop()```.

``` JS
forthHistory.push(currUrl);
let url = backHistory.pop();
load(url); // load might be some function that sends the user to the url popped from backHistory

```

- Before that we would save the page we were previously on to **forthHistory**.

- We could then traverse back to the page we were previously on according to the forthHistory by popping the top entry, like ```forthHistory.pop``` and loading that value returned (presumably a url).