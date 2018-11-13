import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  selectedReaderId: null,
  isDisabled: computed("selectedReaderId", function() {
    var id = this.get("selectedReaderId");
    return id == null || id == "" ? true : false;
  }),

  actions: {
    selectReader(readerId) {
      this.set("selectedReaderId", readerId);
    },
    borrowBook(book) {
      var reader = this.store.peekRecord("reader", this.selectedReaderId);

      book.set("reader", reader);
      book.save();
    }
  }
});
