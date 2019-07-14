import $ from 'jquery';

$(document).ready(() => {
  $('.widget-users__control').on('mouseenter', function() {
    $('.users-list__user').addClass('users-list__user_active-event');
    $('.users-list__desc').addClass('users-list__desc_active-event');
  });
  $('.widget-users__control').on('mouseleave', function() {
    $('.users-list__user').removeClass('users-list__user_active-event');
    $('.users-list__desc').removeClass('users-list__desc_active-event');
  });
});
