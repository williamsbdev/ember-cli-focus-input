import Ember from 'ember';
import { test, module } from 'qunit';
import startApp from '../helpers/start-app';
import {isFocused} from 'ember-cli-test-helpers/tests/helpers/input';

var application, originalSelect;

var FOCUSED_INPUT = 'input.focused-input';
var UNSELECTED_INPUT = 'input.focused-input-not-selected';
var FOCUSED_BUTTON = 'button.focused-button';

module('Acceptance: Focus', {
    setup: function() {
        originalSelect = $.prototype.select;
        application = startApp();
    },
    teardown: function() {
        $.prototype.select = originalSelect;
        Ember.run(application, 'destroy');
    }
});

test('First field should have focus', function(assert) {
    visit('/input');
    andThen(function() {
        assert.equal(currentURL(), '/input');
        isFocused(FOCUSED_INPUT);
    });
});

test('focused field should have value set and selected', function(assert) {
    var selected = false;
    $.prototype.select = function() {
        selected = true;
    };
    visit('/input');
    andThen(function() {
        assert.equal(currentURL(), '/input');
        assert.equal(find(FOCUSED_INPUT).val(), 'foo');
        assert.equal(selected, true);
    });
});

test('First button should have focus', function(assert) {
    visit('/button');
    andThen(function() {
        assert.equal(currentURL(), '/button');
        isFocused(FOCUSED_BUTTON);
        assert.equal(find(FOCUSED_BUTTON).attr('type'), 'submit');
    });
});

test('focused field can be configured to not select the value on focus', function(assert) {
    var selected = false;
    $.prototype.select = function() {
        selected = true;
    };
    visit('/unselected');
    andThen(function() {
        assert.equal(currentURL(), '/unselected');
        assert.equal(find(UNSELECTED_INPUT).val(), 'foo');
        assert.equal(selected, false);
    });
});

test('focused field will have any className attribute set in the template', function(assert) {
    visit('/unselected');
    andThen(function() {
        assert.equal(currentURL(), '/unselected');
        assert.ok(find(UNSELECTED_INPUT).hasClass('watwat'));
    });
    visit('/input');
    andThen(function() {
        assert.equal(currentURL(), '/input');
        assert.ok(find(FOCUSED_INPUT).hasClass('yoyo'));
    });
});
