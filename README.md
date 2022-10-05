React.js vs Vanilla (Plain) JS
===

> The repo contains simple react applications (using `JSX` and `React.createElement()`), and their Vanilla JS counterparts (using `HTML` strings and `document.createElement()`) written to emulate the syntax / style.

## Purpose
The hope of this code is to provided a basis for understand how React operates by providing examples that are transparent in their operation and use analogous syntax.

## App: Four Ways
Each application will be written four ways:
1. using React.js: in JSX syntax
    - which is then converted to `React.createElement()` calls
2. using React.js: using `React.createElement()` directly
3. using vanilla (plain) Javascript: building html strings
    - analogous to React JSX
3. using vanilla (plain) Javascript: using `document.createElement()`
    - using a helper `createElement()` to emulate functionality of `React.createElement()`


## Structure
> Each folder represents a different app, and includes an `index.html` file where all 4 ways of writing the app are loaded.
1. `props/`
    - This is the simplest an application can get: just generating html from JS variables and passing down props
    - There is no state used here, and therefore no state updating
    - Note: The Vanilla JS examples don't support state and have no way or re-rendering
        - this is to keep the syntax simple for the basic example
2. `state/` _(TBD)_
3. `effects/` _(TBD)_
