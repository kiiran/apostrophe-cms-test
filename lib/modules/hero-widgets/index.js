module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Hero',
  addFields: [
    {
      type: 'singleton',
      name: 'backgroundImage',
      label: 'Background image',
      widgetType: 'single-image',
      options: {
        limit: 1,
        required: true,
      },
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      options: {
        required: true,
      },
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
