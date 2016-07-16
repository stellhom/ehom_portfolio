// use Masonry as a jQuery plugin 

var $container = jQuery('#proj-grid');   //first set main container as variable
$container.masonry({   // initialize -- apply masonry effect to container
  // columnWidth: 200,
  // wasn't working so removed and let media queries handle the resizing in percentages (responsive)
  itemSelector: '.proj-width'   //targets each image in grid -- use css & media queries for sizing
});



// Vanilla Javascript version (works too!)
// var container = document.querySelector('#proj-grid');
// var msnry = new Masonry( container, {
//   itemSelector: '.proj-width'
// });
