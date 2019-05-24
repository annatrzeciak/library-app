import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{

  model() {
    return hash({
      readers: this.store.findAll('reader'),
      books: this.store.findAll('book'),
    })
  },

  setupController(controller, model) {
    controller.set('readers', model.readers);
    controller.set('books', model.books);

    this._super(controller, model);
  }
});
