$(document).on('turbolinks:load', function(){
  $('#message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = (window.location.href); // $(this).attr('action')でも可能です
    $.ajax({  
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});