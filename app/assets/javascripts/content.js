// $(document).on('turbolinks:load', function() { });

//初回読み込み、ページ切り替えで動く。リロードは動かない
// $(document).on('turbolinks:render', function() {　});

//ページ遷移前に行いたい処理用。ページ切り替えでもリロードでも動かない
// $(document).on('turbolinks:request-start', function() { });




$(function() {

  var buildMessageHTML = function(message) {
    if (message.content && message.image) {
      var html = `<div id="message_id" class="message" data-message-id='${message.id}'>
                    <div class="upper-info">
                      <p class="upper-info__user">
                        ${message.user_name}
                      </p>
                      <p class="upper-info__date">
                        ${message.created_at}
                      </p>
                    </div>
                    <p class="message_text">
                      ${message.content}
                    </p>
                    <image src= ${message.image}>
                  </div>`
    } else if (message.content) {
      var html = `<div id="message_id" class="message" data-message-id='${message.id}'>
                    <div class="upper-info">
                      <p class="upper-info__user">
                        ${message.user_name}
                      </p>
                      <p class="upper-info__date">
                        ${message.created_at}
                      </p>
                    </div>
                      ${message.content}
                  </div>`
    } else if (message.image) {
      var html = `<div id="message_id" class="message" data-message-id='${message.id}'>
                    <div class="upper-info">
                      <p class="upper-info__user">
                        ${message.user_name}
                      </p>
                      <p class="upper-info__date">
                        ${message.created_at}
                      </p>
                    </div>
                     <image src= ${message.image}>
                  </div>`
    };
    return html;
  };
    
    // スクロールされる位置
    $('.middle-right-content').animate({scrollTop: $('.middle-right-content')[0].scrollHeight}, 'fast');
    

  
    var reloadMessages = function() {
      
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {last_id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      var insertHTML = '';
      messages.forEach(function(message) {
        insertHTML = buildMessageHTML(message)
        $('.middle-right-content').append(insertHTML)
      })
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    }) 
  }
  // 5秒ごとに値を取ってくる処理
  setInterval(reloadMessages, 5000);
  reloadMessages()
  
  });
