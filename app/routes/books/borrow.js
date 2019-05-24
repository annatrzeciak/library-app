import Route from "@ember/routing/route";
import { hash } from "rsvp";
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{

  selectedReaderId: null,

  model(params) {
    return hash({
      readers: this.store.findAll("reader"),
      book: this.store.findRecord("book", params.book_id)
    });
  },

  setupController(controller, model) {
    controller.set("buttonLabel", "Borrow");
    controller.set("readers", model.readers);
    controller.set("book", model.book);

    this._super(controller, model);
  },

  actions: {
    selectReader(readerId) {
      this.set("selectedReaderId", readerId);
    },

    borrowBook([book, readerId]) {
      var reader = this.store.peekRecord("reader", readerId);
      reader.get("books").pushObject(book);
      book.set("reader", reader);

      book
        .save()
        .then(() => {return reader.save()})
        .then(() => this.transitionTo("books"));
    }
  }
});
