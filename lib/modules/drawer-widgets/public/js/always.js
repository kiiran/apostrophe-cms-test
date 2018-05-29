apos.define('drawer-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
    self.play = function($widget, data, options) {
      $widget.find('[data-drawer-title]').click(function() {
        var $drawer = $widget.find('[data-drawer]');
        $drawer.toggleClass('open');

        if ($drawer.hasClass('open')) {
          $drawer.slideDown();
        } else {
          $drawer.slideUp();
        }
        // Stop bubbling and default behavior for jQuery event
        return false;
      });
    };
  },
});
