import Ember from 'ember';

var FocusInput = Ember.TextField.extend({
    attributeBindings: ["select"],
    didInsertElement: function() {
        this.$().focus();
        var select = this.get("select");
        if(select !== "false") {
            this.$().select();
        }
    }
});

export default FocusInput;
