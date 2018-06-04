module.exports = {
  extend: 'apostrophe-pieces',
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  permissionsFields: true,
  addFields: [
    {
      name: 'title',
      label: 'Full Name',
      type: 'string',
      required: true,
      contextual: true,
    },
    {
      name: 'firstName',
      label: 'First Name',
      type: 'string',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'string',
      required: true,
    },
    {
      name: 'body',
      label: 'Biography',
      type: 'area',
      options: {
        widgets: {
          'apostrophe-rich-text': {
            toolbar: ['Bold', 'Italic', 'Link', 'Unlink'],
          },
          'single-image': {
            limit: 1,
          },
        },
      },
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string',
    },
    {
      name: 'thumbImg',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'single-image',
      options: {
        limit: 1,
        minSize: [200, 200],
        aspectRatio: [1, 1],
      },
    },
  ],
  arrangeFields: [
    {
      name: 'contact',
      label: 'Contact',
      fields: ['firstName', 'lastName', 'phone'],
    },
    {
      name: 'admin',
      label: 'Administrative',
      fields: ['slug', 'published', 'tags'],
    },
    {
      name: 'content',
      label: 'Biographical',
      fields: ['thumbImg', 'body'],
    },
  ],
  construct: function(self, options) {
    self.beforeSave = function(req, piece, options, callback) {
      piece.title = piece.firstName + ' ' + piece.lastName;
      return callback();
    };
  },
};
