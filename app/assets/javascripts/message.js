$(function(){
  
  $(document).on('turbolinks:load', function(){
  // 値を取ってきたものを出力するところのHTML
    function buildHTML(message){
      var content = message.content ? `${ message.content }` : "";
      var image = message.image ? `<img src= ${ message.image }>` : "";
      var html = `
                      <div class="message" id="message_id">
                        <div class="upper-info">
                          <p class="upper-info__user">
                            ${message.name}
                          </p>
                          <p class="upper-info__date">
                            ${message.created_at}
                          </p>
                        </div>
                          <p class="message_text">
                            ${content}
                          </p>
                          ${image}
                      </div>
                      `
      return html;
    }

  

  // メッセージが送信された時の動き
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    // 入力された値をformDataとしている
    var formData = new FormData(this);
    // 'action'は現在いる位置
    var url = $(this).attr('action')
    // ボタンを連続で押しても大丈夫にする処理
    $('#send_class').removeAttr('data-disable-with');
    // 入力された値をからにする
    $('#message_content').val('')

    
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    // 帰ってきた値を出力するところの位置を指定
    .done(function(data){
      var html = buildHTML(data);
        $('.middle-right-content').append(html);

        // 画面に表示される最初の位置
        $('.middle-right-content').animate({scrollTop: $('.middle-right-content')[0].scrollHeight}, 10);
      
      return false

    })
    // エラー時の処理
    .fail(function(){
      alert('error');
    })
  });
})
})