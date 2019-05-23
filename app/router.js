import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("about");
  this.route("contact");

  this.route("admin", function() {
    this.route("subscribers");
    this.route("messages");
    this.route("statistics");
  });
  this.route("readers", function() {
    this.route("new");
    this.route("edit", { path: "/edit/:reader_id" });
  });
  this.route("books", function() {
    this.route("new");
    this.route("edit", { path: "/edit/:book_id" });
    this.route("borrow", { path: "/borrow/:book_id" });
    this.route("return", { path: "/return/:book_id" });

  });

  this.route('auth', function() {
    this.route('login');
    this.route('signup');
  });
});

export default Router;
