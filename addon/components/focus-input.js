import Ember from 'ember';

var FocusInput = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    }
});

export default FocusInput;
