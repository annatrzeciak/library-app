import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.createRecord("librarian");
  },

  setupController(controller, model) {
    this._super(controller, model);
  },
  actions: {
    signup(newLibrarian) {
      // TODO form sign validation
      newLibrarian.save().then(() => {this.transitionTo("librarian.login")
    });
    }
  }
});
