$(function(){
  function buildHTML(message){
    var img = message.image ? "<img src=${message.image}>":""
    var html =
      `<div class="message" data-message-id=${message.id}>
        <div class="content-rightside__lower">
          <div class="content-rightside__lower__uppersize">
          </div>
          <div class="content-rightside__lower__userdays">
            <div class="content-rightside__lower__userdays__username">
              ${message.user_name}
            </div>
            <div class="content-rightside__lower__userdays__days">
              ${message.date}
            </div>
          </div>
          <div class="content-rightside__lower__text">
            ${message.content}
            <div>
              ${img}
            </div>
          </div>
        </div>
      </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
      $('form')[0].reset();
      $('.form__submit').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
      $('.form__submit').attr('disabled', false);
    });
  });
});