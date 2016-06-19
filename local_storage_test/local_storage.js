var saved_text = [];

$(loaded);
function loaded(){
    init();
    $("#save_button").click(saveText);
    $("#delete_button").click(deleteSavedText);
}

function init(){
    console.log("init");
    //過去に保存したテキストをロード
    if(localStorage.getItem("saved_text") != null){
        saved_text = JSON.parse(localStorage.getItem("saved_text"));
    }
    printSavedText();

}

function printSavedText(){
    console.log("print");
    var target_div = "body fieldset ul";

    //一度表示するdivを空にしてから配列の中身をappend
    $(target_div).html("");
    for(var i=0; i<saved_text.length; i++) {
        $(target_div).append("<li>"+saved_text[i]+"</li>")
    }
}

function saveText(){
    console.log("save");

    if($("#textbox").val() != ""){
        //新たにテキストボックスに入力された内容を追加
        saved_text.push($("#textbox").val());

        //ローカルストレージに保存
        localStorage.setItem("saved_text", JSON.stringify(saved_text));

        //表示してテキストボックスは空に
        printSavedText();
        $("#textbox").val("");
    }
}

function deleteSavedText(){
    //ローカルストレージと配列を空にして表示
    localStorage.clear();
    saved_text = [];
    printSavedText();
}


