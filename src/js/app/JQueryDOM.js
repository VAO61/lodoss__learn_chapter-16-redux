import $ from 'jquery';

$(document).ready(() => {
  $('#showMeMore').on('mouseenter', function() {
    $('#viewMore').addClass('users-list__user_active-event');
    $('.users-list__desc').addClass('users-list__desc_active-event');
  });
  $('#showMeMore').on('mouseleave', function() {
    $('#viewMore').removeClass('users-list__user_active-event');
    $('.users-list__desc').removeClass('users-list__desc_active-event');
  });
});
