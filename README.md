# Ember-cli-focus-input

[![Build Status][]](https://travis-ci.org/williamsbdev/ember-cli-focus-input)
[![NPM Downloads][]](https://www.npmjs.org/package/ember-cli-focus-input)

## Description

Ember-cli-focus-input is a set of ember components that provide autofocus (the
first input of your form/page).

## Why? There's the HTML5 input autofocus attribute!

The HTML5 input autofocus attribute does not work properly for Ember applications. It just lets you specify that a form control should have input focus **when the page loads**. That's why the attribute does not work properly on single page applications (SPA's).

## Installation

As any other ember-cli addon, run:

    $ ember install ember-cli-focus-input

## Focus Input

    {{focus-input value=model.field class="foo"}}

By default the input will be focused and have the content selected. If you prefer not to have the text selected/highlighted configure it like so.

    {{focus-input value=model.field class="foo" select="false"}}

## Focus Button

    {{focus-button value=model.buttonField class="bar"}}

## Running Tests

    npm install (or yarn install)
    ember test
    ember try:each (test again multiple ember versions defined in config/ember-try.js)

## License

Copyright © 2016 Brandon Williams http://williamsbdev.com

Licensed under the MIT License

[Build Status]: https://travis-ci.org/williamsbdev/ember-cli-focus-input.svg?branch=master
[NPM Downloads]: https://img.shields.io/npm/dm/ember-cli-focus-input.svg
