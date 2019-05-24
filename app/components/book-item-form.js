import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  buttonLabel: "Save",

  errors: null,
  titleError: computed("errors", function() {
    return this.model.get("validations.attrs.title.messages").join("; ");
  }),
  authorError: computed("errors", function() {
    return this.model.get("validations.attrs.author.messages").join("; ");
  }),
  releaseYearError: computed("errors", function() {
    return this.model.get("validations.attrs.releaseYear.messages").join("; ");
  }),
  ISBNError: computed("errors", function() {
    return this.model.get("validations.attrs.ISBN.messages").join("; ");
  }),

  actions: {
    buttonClicked(param) {
      this.set("errors", this.model.get("validations.errors"));

      if (this.model.get("validations.isValid")) {
        this.sendAction("action", param);
        //TODO server errors
      }
    }
  }
});
