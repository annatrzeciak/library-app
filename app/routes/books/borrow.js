import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model(params) {
    return hash({
      readers: this.store.findAll("reader"),
      book: this.store.findRecord("book", params.book_id)
    });
  },
  setupController(controller, model) {
    controller.set("readers", model.readers);
    controller.set("book", model.book);

    this._super(controller, model);
  },
  
});
