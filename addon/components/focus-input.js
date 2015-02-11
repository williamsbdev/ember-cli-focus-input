import Ember from 'ember';

var FocusInput = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
        this.$().select();
    }
});

export default FocusInput;
