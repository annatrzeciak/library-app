"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fontawesome: {
      icons: {
        "free-solid-svg-icons": [
          // 'carpet-down',
          "angle-down",
          "angle-up",
          "angle-left",
          "angle-right",
          "user",
          "ellipsis-v",
          "plus",
          "trash-alt",
          "book-reader",
          "book",
          "sort-alpha-down",
          "map-marker-alt",
          "mobile-alt",
          "feather-alt",
          "flag",
          "calendar-alt"
        ]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import("bower_components/jquery/dist/jquery.min.js");
  app.import("bower_components/bootstrap/dist/js/bootstrap.min.js");
  app.import("bower_components/bootstrap/dist/css/bootstrap.min.css");
  app.import("bower_components/patternfly/dist/js/patternfly.min.js");
  app.import("bower_components/patternfly/dist/css/patternfly.min.css");
  app.import(
    "bower_components/patternfly/dist/css/patternfly-additions.min.css"
  );

  return app.toTree();
};
