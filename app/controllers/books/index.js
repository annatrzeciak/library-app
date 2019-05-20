import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ["page", "size"],
  page: 1,
  size: 10,
  count: computed("model", function() {
    return Math.ceil(this.get("model").meta.count) || 1;
  }),
});
