// mobile navigation hamburger menu animation

$(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
      $burger = $('.nav-toggle'); //animated hamburger menu

  $burger.click(function() { //when burger menu is clicked...
    $(this).toggleClass('open'); //nav toggle opens
    $burger.toggleClass('active'); //burger menu goes into active state X
    $menu.toggleClass('active'); //list menu is revealed

    return false;
  });
});


//  masonry grid

// $('.grid').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });





// mobile navigation hamburger menu animation
// $( ".nav-toggle" ).click(function() {
//     $(this).toggleClass("open");
//     $("nav").fadeToggle(100);
//
//     return false;
// });



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
