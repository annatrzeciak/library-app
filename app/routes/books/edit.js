import Route from "@ember/routing/route";
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin,{

  model(params) {
    return this.store.findRecord("book", params.book_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set("title", "Edit book");
    controller.set("buttonLabel", "Update book");
  },

  renderTemplate() {
    this.render("books/form");
  },

  actions: {
    saveBook(book) {
      book.save().then(() => this.transitionTo("books"));
    },

    willTransition(transition) {
      let model = this.controller.get("model");

      if (model.get("hasDirtyAttributes")) {
        let confirmation = confirm(
          "Your changes haven't saved yet. Would you like to leave this form?"
        );

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
