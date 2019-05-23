import Controller from "@ember/controller";

export default Controller.extend({
  session: Ember.inject.service("session"),

  actions: {
    authenticate: function() {
      const credentials = this.getProperties("email", "password");
      const authenticator = "authenticator:token";

      this.get("session")
        .authenticate(authenticator, credentials)
        .then(() => {

        // TODO error auth data
          let authInformation = this.get("session").data.authenticated.exp;
          const now = new Date();
          const expiresIn = authInformation - now.getTime();
          setTimeout(() => {
            this.get("session").invalidate();
          }, expiresIn);
          this.transitionToRoute("");
        });
    }
  }
});
