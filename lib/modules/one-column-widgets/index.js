module.exports = {
  extend: 'apostrophe-widgets',
  label: '1 Column',
  contextualOnly: true,
  addFields: [
    {
      name: 'main',
      type: 'area',
      label: 'Main Area',
    },
  ],
  construct: function(self, options) {
    var superPushAssets = self.pushAssets;
    self.pushAssets = function() {
      superPushAssets();
      self.pushAsset('stylesheet', 'always', { when: 'always' });
    };
  },
};
