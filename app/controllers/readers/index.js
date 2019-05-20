import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  loading: false,
  queryParams: ["page", "size"],
  page: 1,
  size: 10,
  count: computed("model", function() {
    console.log(this.get("model"));
    return Math.ceil(this.get("model").meta.count) || 1;
  }),

});
