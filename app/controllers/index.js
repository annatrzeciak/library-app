import Controller from "@ember/controller";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  session: Ember.inject.service("session"),

  responseMessage: "",
  emailAddress: "",

  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),

  actions: {
    saveSubscribe() {
        const email = this.get('emailAddress');

        const newSubscriber = this.store.createRecord('subscriber', { email });

        newSubscriber.save().then(response => {
          this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
          this.set('emailAddress', '');
        });

      },
  }
});
