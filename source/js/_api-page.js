$(function() {
  $('.btn-hamburger').on('click', function() {
    var $sideBar = $('.page-layout__side-bar');
    if ($(this).hasClass('toggled')) {
      $sideBar.removeClass('opened');
    } else {
      $sideBar.addClass('opened');
    }
    $(this).toggleClass('toggled');
  });

  $('.list--collapsable').collapsableList();
  $('.tab').tabs();
});
