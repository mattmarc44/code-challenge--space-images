$('[data-toggle="refresh-list"]').on('click', function(){
  alert("When this is clicked, refresh the images on the site.");

  var target = $($(this).data('target'));
  var source = $(this).data('source')

  console.log( "Tag to refresh:", target );
  console.log( "Source of images:", source );

  // Not sure what to do with those values, I think I can use: https://api.jquery.com/jQuery.ajax/ 
  $.ajax({
    url: source
  }).done(function( data ) {
    debugger;

    // I think I can use _.shuffle(data) to shuffle the array I get here.
    // Then update those 3 images somehow...
    console.log(data)
    console.log(target.find('.card')[0])
  });
});
