// jQuery to set up Masonry using document.ready function

$(document).ready(function() {
$('#proj-grid').masonry({
// columnWidth: 320,
itemSelector: '.proj-width'
}).imagesLoaded(function() {
$('#proj-grid').masonry('reload');
});
});

// OLD SCRIPTS

// jQuery to set up Masonry
//first set main container as variable
// var $container = jQuery('#proj-grid');

// initialize -- apply masonry effect to container
// $container.masonry({

   // columnWidth: 200,
// wasn't working so removed and let media queries handle the resizing in percentages (responsive)

//targets each image in grid -- use css & media queries for sizing
//   itemSelector: '.proj-width'
// });


// or can use Vanilla Javascript version (works too!)
// var container = document.querySelector('#proj-grid');
// var msnry = new Masonry( container, {
//   itemSelector: '.proj-width'
// });
