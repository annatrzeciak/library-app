import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.findAll("reader");
  },
  actions: {
    deleteReader(reader) {
      let confirmation = confirm("Are you sure?");

      if (confirmation) {
        reader.destroyRecord();
      }
    }
  }
});
