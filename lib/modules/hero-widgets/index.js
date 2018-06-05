module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Hero',
  addFields: [
    {
      type: 'singleton',
      name: 'backgroundImage',
      label: 'Background image',
      widgetType: 'single-image',
      required: true,
      options: {
        limit: 1,
      },
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'string',
      name: 'description',
      label: 'Descriptive text',
    },
    {
      type: 'area',
      name: 'links',
      label: 'Links',
      options: {
        widgets: {
          'page-button': {},
        },
      },
    },
  ],
};
