import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.query("reader", {
      page: {
        number: params.page,
        size: params.size
      }
    });
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }
});
