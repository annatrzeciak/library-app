import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  buttonLabel: "OK",
  selectedReaderId: null,

  isDisabled: computed("selectedReaderId", function() {
    var id = this.get("selectedReaderId");
    return id == null || id == "" ? true : false;
  }),

  actions: {
    buttonClicked(param) {
      this.sendAction("action", [param, this.selectedReaderId]);
    },

    selectReader(readerId) {
      this.set("selectedReaderId", readerId);
    }
  }
});
