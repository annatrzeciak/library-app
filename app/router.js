import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('subscribers');
    this.route('messages');
  });
  this.route('readers', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:reader_id' });
  });
  this.route('reader', function() {});
});

export default Router;
