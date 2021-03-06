(function($) {
  $.fn.collapsableList = function() {
    var $headerHeight = 76;

    var scrollTo = function(id) {
      if (id && id !== '#') {
        $('html, body').animate({
          scrollTop: $(id).offset().top - $headerHeight
        }, 500);
      }
    };

    // expand/collapse sub-list when click on item
    var $listItems = this.find('.list__item > a');
    $listItems
      .on('click', function(e) {
        e.preventDefault();

        $listItems.removeClass('active');
        $(this).addClass('active');

        var $subList = $(this).closest('.list__item').children('.list__sub-list');

        if ($subList.is(':visible')) {
          $subList.slideUp();
        } else {
          $subList.slideDown();
        }

        scrollTo($(this).attr('href'));
      });

    // set active class on sub-list item clicked
    var $subListItems = this.find('.list__sub-list a');
    $subListItems.on('click', function(e) {
      e.preventDefault();

      $subListItems.removeClass('active');
      $(this).addClass('active');

      scrollTo($(this).attr('href'));
    });
  };
})(jQuery);
