import Controller from "@ember/controller";

export default Controller.extend({
  session: Ember.inject.service("session"),

  afterModel() {
    // console.log(this.get("session").isAuthenticated)

    // if (this.get("session").isAuthenticated) {
    //   let authInformation = this.get("session").data.authenticated.exp;
    //   const now = new Date();
    //   const expiresIn = authInformation - now.getTime();
    //   if (expiresIn > 0) {
    //     setTimeout(() => {
    //       this.get("session").invalidate();
    //     }, expiresIn);
    //   } else {
    //     this.get("session").invalidate();
    //   }
    // }
  }
});
