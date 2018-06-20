import {setupApplicationTest} from 'ember-qunit';
import {test, module} from 'qunit';
import {currentURL, visit} from '@ember/test-helpers';
import $ from 'jquery';

let originalSelect;

const FOCUSED_INPUT = 'input.focused-input';
const UNSELECTED_INPUT = 'input.focused-input-not-selected';
const FOCUSED_BUTTON = 'button.focused-button';

function isFocused(selector) {
  let focused = $(document.activeElement);
  let element = $(selector);
  return element.is(":focus") || element.is(focused);
}

module('Acceptance: Focus', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    originalSelect = $.prototype.select;
  });
  hooks.afterEach(function () {
    $.prototype.select = originalSelect;
  });

  test('First field should have focus', async function (assert) {
    await visit('/input');
    assert.equal(currentURL(), '/input');
    assert.ok(isFocused(FOCUSED_INPUT));
  });

  test('focused field should have value set and selected', async function (assert) {
    let selected = false;
    $.prototype.select = function () {
      selected = true;
    };
    await visit('/input');
    assert.equal(currentURL(), '/input');
    assert.equal($(FOCUSED_INPUT).val(), 'foo');
    assert.equal(selected, true);
  });

  test('First button should have focus', async function (assert) {
    await visit('/button');
    assert.equal(currentURL(), '/button');
    assert.ok(isFocused(FOCUSED_BUTTON));
    assert.equal($(FOCUSED_BUTTON).attr('type'), 'submit');
  });

  test('focused field can be configured to not select the value on focus', async function (assert) {
    let selected = false;
    $.prototype.select = function () {
      selected = true;
    };
    await visit('/unselected');
    assert.equal(currentURL(), '/unselected');
    assert.equal($(UNSELECTED_INPUT).val(), 'foo');
    assert.equal(selected, false);
  });

  test('focused field will have any className attribute set in the template', async function (assert) {
    await visit('/unselected');
    assert.equal(currentURL(), '/unselected');
    assert.ok($(UNSELECTED_INPUT).hasClass('watwat'));
    await visit('/input');
    assert.equal(currentURL(), '/input');
    assert.ok($(FOCUSED_INPUT).hasClass('yoyo'));
  });
});
