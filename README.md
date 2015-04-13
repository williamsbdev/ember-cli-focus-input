# Ember-cli-focus-input

[![Build Status][]](https://travis-ci.org/williamsbdev/ember-cli-focus-input)
[![NPM Downlaads][]](https://www.npmjs.org/package/ember-cli-focus-input)

## Description

Ember-cli-focus-input is a set of ember components that provide autofocus (the
first input of your form/page).

## Installation

    # Install via npm
    $ npm install ember-cli-focus-input --save-dev
    # make ember-cli fetch interal dependencies
    $ ember g ember-cli-focus-input

## Focus Input

    {{focus-input value=model.field class="foo"}}

By default the input will be focused and have the content selected. If you prefer not to have the text selected/highlighted configure it like so.

    {{focus-input value=model.field class="foo" select="false"}}

## Focus Button

    {{focus-button value=model.buttonField class="bar"}}

## Running Tests

    npm install
    bower install
    ember test
    ember test --server

## Issues/Contributions

PRs are welcome!

## License

Copyright © 2015 Brandon Williams http://williamsbdev.com

Licensed under the MIT License

[Build Status]: https://travis-ci.org/williamsbdev/ember-cli-focus-input.svg?branch=master
[NPM Downlaads]: https://img.shields.io/npm/dm/ember-cli-focus-input.svg
