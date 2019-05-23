import Route from "@ember/routing/route";
import { hash } from "rsvp";
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  model(params) {
    return hash({
      book: this.store.findRecord("book", params.book_id)
    });
  },

  setupController(controller, model) {
    controller.set("buttonLabel", "Return");
    controller.set("book", model.book);
    this._super(controller, model);
  },

  actions: {
    returnBook([book, readerId]) {
      var reader = this.store.peekRecord("reader", book.get("reader.id"));
      reader.get("books").removeObject(book);
      book.set("reader", "");

      book
        .save()
        .then(() => {return reader.save()})
        .then(() => this.transitionTo("books"));
    }
  }
});
