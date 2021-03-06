import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  buttonLabel: "Save",

  errors: null,
  firstNameError: computed("errors", function() {
    return this.model.get("validations.attrs.firstName.messages").join("; ");
  }),
  lastNameError: computed("errors", function() {
    return this.model.get("validations.attrs.lastName.messages").join("; ");
  }),
  addressError: computed("errors", function() {
    return this.model.get("validations.attrs.address.messages").join("; ");
  }),
  phoneError: computed("errors", function() {
    return this.model.get("validations.attrs.phone.messages").join("; ");
  }),

  actions: {
    buttonClicked(param) {
      this.set("errors", this.model.get("validations.errors"));

      if (this.model.get("validations.isValid")) {
        this.sendAction("action", param);
        //TODO server errors
      }
    }}
});
