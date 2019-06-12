$(function() {
  var search_list = $("#user-search-result");
  var second_list = $("#chat-group-users");
  function appendUser(user) {
    // 取ってきた値を出力するところの位置
    $('p').data('name', 'user_id')
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
                </div>`
    search_list.append(html);      
  }
  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${msg}</p>
    </div>`
    search_list.append(html);
  }
  // 追加ボタンが押された時の処理
  $(document).on('click', ".user-search-add", function() {
    var user_id = $(this).data("user-id");
    var name = $(this).data("user-name");
    var html = `
                <div id="chat-group-users">
                  <div class="chat-group-user clearfix" id="chat-group-user-22">
                    <input name="group[user_ids][]" type="hidden" value=${user_id}>
                      <p class="chat-group-user__name">${name}</p>
                    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                  </div>
                </div>
                `
    second_list.append(html)
    // 追加ボタンが押された後の処理
    $("#user-search-result").empty();
    $().parents().remove();
  });
  // ボタンがクリックされた時
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      // 処理を行って欲しいコードがあるURL
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    //  doneとfailはAjax通信の時のみ
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーが見つかりません");
    }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  })
  // 削除ボタンが押された時の処理
  $(document).on('click', ".user-search-remove", function() {
    $(this).parent().remove();
  })
   });
  



