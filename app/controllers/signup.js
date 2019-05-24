import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  errors: null,
  emailError: computed("errors", function() {
    return this.model.get("validations.attrs.email.messages").join("; ");
  }),
  firstNameError: computed("errors", function() {
    return this.model.get("validations.attrs.firstName.messages").join("; ");
  }),
  lastNameError: computed("errors", function() {
    return this.model.get("validations.attrs.lastName.messages").join("; ");
  }),
  passwordError: computed("errors", function() {
    return this.model.get("validations.attrs.password.messages").join("; ");
  }),

  actions: {
    signup(newLibrarian) {
      this.set("errors", this.model.get("validations.errors"));

      if (this.model.get("validations.isValid")) {
        newLibrarian.save().then(() => this.transitionToRoute("login"));
      }
    }
  }
});
