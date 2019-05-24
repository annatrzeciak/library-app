import Route from "@ember/routing/route";
import { hash } from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
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
