import Component from '@ember/component';

export default Component.extend({
    tagName: "button",
    attributeBindings: ["type"],
    didInsertElement: function() {
        this.element.addEventListener();
    }
});
