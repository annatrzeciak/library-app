import Controller from "@ember/controller";
import { not, and, gte, match } from "@ember/object/computed";

export default Controller.extend({
  responseMessage: "",

  emailAddress: "",
  message: "",

  isCorrectEmail: match("emailAddress", /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isValid: and("isCorrectEmail", "isLongEnough"),
  isDisabled: not("isValid"),

  actions: {
    sendMessage() {
      const email = this.get("emailAddress");
      const message = this.get("message");

      const newMessage = this.store.createRecord("message", { email, message });

      newMessage.save().then(response => {
        this.set("responseMessage", "Sending message finished succesfull :)");
        this.set("emailAddress", "");
        this.set("message", "");
      });
    }
  }
});
