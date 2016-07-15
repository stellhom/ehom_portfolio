
// mobile navigation hamburger menu animation
// $( ".nav-toggle" ).click(function() {
//     $(this).toggleClass("open");
//     $("nav").fadeToggle(100);
//
//     return false;
// });


$(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
      $menulink = $('.nav-toggle');

  $menulink.click(function() {
    $(this).toggleClass("open");
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    // $("nav").fadeToggle(100);

    return false;
  });
});








// mobile navigation toggle function

// $(function() {
//   $('body').addClass('js');
//   var $menu = $('#menu'),
//       $menulink = $('.menu-link');
//
//   $menulink.click(function() {
//     $menulink.toggleClass('active');
//     $menu.toggleClass('active');
//     return false;
//   });
// });
