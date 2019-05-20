import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({

  router: Ember.inject.service(),

  lastPage: computed("model", function() {
    return Math.ceil(this.get("model").meta.count / this.size) || 1;
  }),

  actions: {
    selectedResultsPerPage(resultsPerPage) {
      this.get('router').transitionTo(
        "/" + this.get("model").modelName + "s?size=" + resultsPerPage
      );
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
        this.get('router').transitionTo(this.get("model").modelName + "s", {
          queryParams: { page: { number: goToPage } }
        });
      }
    }
  }
});
