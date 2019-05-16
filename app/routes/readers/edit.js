import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("reader", params.reader_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set("title", "Edit reader");
    controller.set("buttonLabel", "Update reader");
  },

  renderTemplate() {
    this.render("readers/form");
  },

  actions: {
    saveReader(reader) {
      reader.save().then(() => this.transitionTo("readers"));
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
