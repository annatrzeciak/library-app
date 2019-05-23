import Route from "@ember/routing/route";
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  model() {
    return this.store.createRecord("reader");
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set("title", "Add new reader");
    controller.set("buttonLabel", "Add new reader");
  },

  renderTemplate() {
    this.render("readers/form");
  },

  actions: {
    saveReader(newReader) {
      newReader.save().then(() => this.transitionTo("readers"));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get("model").rollbackAttributes();
    }
  }
});
