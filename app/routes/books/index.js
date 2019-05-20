import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.query("book", {
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
