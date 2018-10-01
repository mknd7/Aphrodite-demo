# Aphrodite demo

A simple demo which uses web components with Aphrodite

## Issues found when working with Aphrodite

* Shadow DOM styling does not seem to be possible (Styles are injected into the `<head>` of the document) [Link](https://github.com/Khan/aphrodite#style-injection-and-buffering)
* Limitation of Aphrodite - CSS declaration order is not preserved [Link](https://github.com/Khan/aphrodite#object-key-ordering)
* Does not provide a way to prevent global styles from being inherited by component

## Benefits of using Aphrodite

* Styles are inlined with `!important`, so there is no chance of clashing styles overriding

## Observations

* With webcomponentsjs polyfill, works cross-browser
* Firefox has a minor bug in its Devtools relating to web components - when we edit attribute in Devtools, attributeChangedCallback is not fired [Link](https://bugzilla.mozilla.org/show_bug.cgi?id=1449489)