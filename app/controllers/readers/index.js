import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  loading: false,
  queryParams: ["page", "size"],
  page: 1,
  size: 10,
  count: computed("model", function() {
    return Math.ceil(this.get("model").meta.count) || 1;
  }),
  lastPage: computed("model", function() {
    return Math.ceil(this.get("model").meta.count / this.size) || 1;
  }),

  actions: {
    selectedResultsPerPage(resultsPerPage) {
      this.transitionToRoute("/readers?size=" + resultsPerPage);
    },
    goToPage(value) {
      let goToPage;
      if (typeof value == "object") {
        if (value.keyCode == "13") {
          goToPage = value.target.value;
        }
      } else {
        goToPage = value;
      }
      if (goToPage >= 1 && goToPage <= this.lastPage) {
        this.set("page", goToPage);
        this.transitionToRoute("readers", {
          queryParams: { page: { number: goToPage } }
        });
      }
    }
  }
});
