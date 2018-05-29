module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Navbar',
  addFields: [
    {
      type: 'area',
      name: 'links',
      label: 'Links',
      options: {
        widgets: {
          link: {},
          'page-link': {},
        },
      },
    },
  ],
};
