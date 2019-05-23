import Route from "@ember/routing/route";

import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Route.extend(ApplicationRouteMixin, {
  model() {
    return this.store.createRecord("book");
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set("title", "Add new book");
    controller.set("buttonLabel", "Add new book");
  },

  renderTemplate() {
    this.render("books/form");
  },

  actions: {
    saveBook(newBook) {
      newBook.save().then(() => this.transitionTo("books"));
    },

    willTransition() {
      this.controller.get("model").rollbackAttributes();
    }
  }
});
