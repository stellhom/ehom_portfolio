//
// $('a').on('click', function(event) {
// event.preventDefault();
// $('#socialmedia').toggle('fast');
// });

$('#socialmedia').click(function() {

    $('.socialmedia').slideToggle('fast');

    return false;

});
