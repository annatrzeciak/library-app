import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
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
    selectedResultsPerPage(resultPerPage) {
      this.set("size", resultPerPage);
      this.set("page", 1);
      this.transitionToRoute("readers", {
        queryParams: { page: { number: 1, size: resultPerPage } }
      });
    },

    goToFirstPage() {
      this.set("page", 1);
      this.transitionToRoute("readers", {
        queryParams: { page: { number: 1 } }
      });
    },
    goToPrevPage() {
      this.set("page", this.page - 1);
      this.transitionToRoute("readers", {
        queryParams: { page: { number: this.page - 1 } }
      });
    },
    goToNextPage() {
      this.set("page", this.page + 1);
      this.transitionToRoute("readers", {
        queryParams: { page: { number: this.page + 1 } }
      });
    },
    goToLastPage() {
      this.set("page", this.lastPage);
      this.transitionToRoute("readers", {
        queryParams: { page: { number: this.lastPage } }
      });
    },
    goToPage($event) {
      if ($event.keyCode == "13") {
        let goToPage = $event.target.value;
        if (goToPage >= 1 && goToPage <= this.lastPage) {
          this.set("page", goToPage);
          this.transitionToRoute("readers", {
            queryParams: { page: { number: goToPage } }
          });
        }
      }
    }
  }
});
