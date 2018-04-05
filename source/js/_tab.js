(function() {
  $.fn.tabs = function() {
    this.find('.tab__link').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $($(this).attr('href')).hide();
      } else {
        $('.tab__content').hide();
        $($(this).attr('href')).show();
      }

      $('.tab__link').removeClass('active');
      $(this).addClass('active');
    });

    this.find('.tab__link:first-child').trigger('click');
  };
})(jQuery);
