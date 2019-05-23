import Component from "@ember/component";

export default Component.extend({
  session: Ember.inject.service("session"),
  actions: {
    deleteBook(book) {
      let confirmation = confirm("Are you sure?");

      if (confirmation) {
        book.destroyRecord();
      }
    },
  }
});
