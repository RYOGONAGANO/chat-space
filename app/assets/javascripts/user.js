$(function(){
  function appendUser(user){
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
    </div>`
    $("#user-search-result").append(html);
  }
  function addGroupMember(name, user_id){
    var html =
    `<div class='chat-group-user'>
      <input name='group[user_ids][]' type='hidden' value=${user_id}>
      <p class='chat-group-user__name'>${name}</p>
      <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
    </div>`
    $("#user2-search-result").append(html);
  }
  $('#user-search-field').on('keyup', function(e){
    var input = $("#user-search-field").val();
    var group_id = $("#group_ids").val();


    $.ajax({
      type: 'GET',
      url:  '/users',
      data: {keyword: input, group_id: group_id},
      dataType: 'json'
    })
    .done(function(users){
      if (input.length === 0){
        $('#user-search-result').empty();
      }
      else if (input.length !== 0){
        $('#user-search-result').empty();
        users.forEach(function(user){
          appendUser(user)
        });
      }
      else {
        $('#user-search-result').empty();
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    });
  });
  $(document).on('click', '.user-search-add', function() {
    var name = $(this).data("user-name");
    var user_id = $(this).data("user-id");
    $(this).parent().remove();
    addGroupMember(name, user_id);
  });
  $(document).on("click", '.user-search-remove', function() {
    $(this).parent().remove();
  });
});