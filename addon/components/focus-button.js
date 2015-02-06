import Ember from "ember";

var FocusButton = Ember.Component.extend({
    tagName: "button",
    attributeBindings: ["type"],
    didInsertElement: function() {
        this.$().focus();
    }
});

export default FocusButton;
