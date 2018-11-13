import Component from "@ember/component";

export default Component.extend({
  actions: {
    deleteBook(book) {
      let confirmation = confirm("Are you sure?");

      if (confirmation) {
        book.destroyRecord();
      }
    },

    moreInfo(readerId) {
      var reader = this.store.peekRecord("reader", readerId);
      console.log(reader);
    }
  }
});
