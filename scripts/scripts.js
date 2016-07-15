
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
      $menulink = $('.nav-toggle'); //animated hamburger menu

  $menulink.click(function() { //when burger menu is clicked...
    $(this).toggleClass("open"); 
    $menulink.toggleClass('active');
    $menu.toggleClass('active');

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
