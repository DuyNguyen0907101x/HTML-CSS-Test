// side-bar menu toggle
$(function() {
  $('.hamburger-icon').on('click', function() {
    if ($(this).hasClass('toggled')) {
      $('.page-layout__side-bar').removeClass('opened');
    } else {
      $('.page-layout__side-bar').addClass('opened');
    }

    $(this).toggleClass('toggled');
  });
});

//collapsable list plugin
$(function() {
  $.fn.collapsableList = function() {
    var $headerHeight = 76;
    var scrollTo = function(id) {
      if (id && id !== '#') {
        $('html, body').animate({
          scrollTop: $(id).offset().top - $headerHeight
        }, 500);
      }
    };

    // hide all sub-lists by default
    this.find('.list__sub-list').hide();

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

  $('.list--collapsable').collapsableList();
});

// tab menu
$(function() {
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

  // console.log($('.tab'))

  $('.tab').tabs();
});
