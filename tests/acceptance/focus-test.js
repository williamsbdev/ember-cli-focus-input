import Ember from 'ember';
import startApp from '../helpers/start-app';
import {isFocused} from 'ember-cli-test-helpers/tests/helpers/input';

var application;

var FOCUSED_INPUT = 'input.focused-input';
var FOCUSED_BUTTON = 'button.focused-button';

module('Acceptance: Focus', {
    setup: function() {
        application = startApp();
    },
    teardown: function() {
        Ember.run(application, 'destroy');
    }
});

test('First field should have focus', function() {
    visit('/input');
    andThen(function() {
        equal(currentURL(), '/input');
        isFocused(FOCUSED_INPUT);
    });
});

test('First button should have focus', function() {
    visit('/button');
    andThen(function() {
        equal(currentURL(), '/button');
        isFocused(FOCUSED_BUTTON);
        equal(find(FOCUSED_BUTTON).attr('type'), 'submit');
    });
});
