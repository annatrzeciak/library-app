import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {

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
