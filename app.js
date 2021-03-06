var path = require('path');

var apos = require('apostrophe')({
  shortName: 'apostrophe-test',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    'apostrophe-templates': {
      viewsFolderFallback: path.join(__dirname, 'views'),
    },

    'apostrophe-pages': {
      filters: {
        // Grab our ancestor pages, with two levels of subpages
        ancestors: { children: { depth: 2 } },
        // We usually want children of the current page, too
        children: true,
      },
      // other apostrophe-pages options like `types` ...
    },

    'link-widgets': {},
    'hero-widgets': {},
    'page-button-widgets': {},
    'page-link-widgets': {},
    'navbar-widgets': {},
    'drawer-widgets': {},
    'one-column-widgets': {},
    'two-column-widgets': {},
    'three-column-widgets': {},
    'single-image-widgets': {},
    people: {},
    'people-widgets': {
      extend: 'apostrophe-pieces-widgets',
      filters: {
        projection: {
          slug: 1,
          title: 1,
          type: 1,
          tags: 1,
          phone: 1,
          thumbImg: 1,
        },
      },
    },
  },
});
