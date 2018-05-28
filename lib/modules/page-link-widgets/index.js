module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link to a Page',
  addFields: [
    {
      name: '_page',
      type: 'joinByOne',
      withType: 'apostrophe-page',
      label: 'Page',
      required: true,
      idField: 'pageId',
      // For improved performance, only get the required info
      // (i.e. the page title and the link to that page)
      filters: {
        projection: {
          title: 1,
          slug: 1,
        },
      },
    },
  ],
};
