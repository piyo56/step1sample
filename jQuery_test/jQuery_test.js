var count = 1;

//読み込み完了時に実行する関数を指定
$(loaded);

function loaded(){
    //ボタンタグをクリックしたときの動作を指定
    $("button").click(change_text);
}

function change_text(){
    //IDがmessageの要素のテキストを書き換え
    $("#message").text("こんばんは");
    //bodyにcountの内容を表示するパラグラフを追加
    $("body").append("<p>" + count + "</p>");
    count += 1;
}
