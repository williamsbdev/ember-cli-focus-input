import TextField from '@ember/component/text-field';

export default TextField.extend({
  attributeBindings: ["select"],
  didInsertElement: function () {
    this.$().focus();
    let select = this.get("select");
    if (select !== "false") {
      this.$().select();
    }
  }
});
