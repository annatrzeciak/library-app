import Component from "@ember/component";

export default Component.extend({
  session: Ember.inject.service("session"),
  didInsertElement() {
    if (this.get("session").isAuthenticated) {
      let authInformation = this.get("session").data.authenticated.exp;
      const now = new Date();
      const expiresIn = authInformation - now.getTime();
      if (expiresIn > 0) {
        setTimeout(() => {
          this.get("session").invalidate();
        }, expiresIn);
      } else {
        this.get("session").invalidate();
      }
    }
  },
  actions: {
    logout() {
      this.get("session").invalidate();
    }
  }
});
