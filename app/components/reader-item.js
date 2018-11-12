import Component from "@ember/component";

export default Component.extend({
  actions: {
    deleteReader(reader) {
      let confirmation = confirm("Are you sure?");

      if (confirmation) {
        reader.destroyRecord();
      }
    }
  }
});
