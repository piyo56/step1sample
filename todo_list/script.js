var save_key = "todo_list";
var tasks = [];

$(loaded);
function loaded(){
    init();
    $("#add_button").click(addTask);
    //$("#delete_button").click(deleteTask);
}

function init(){
    console.log("init");
    //ユーザーのtodoリストをロード
    if(localStorage.getItem(save_key) != null){
        tasks = JSON.parse(localStorage.getItem(save_key));
    }
    printTasks();
}

function printTasks(){
    console.log("print");
    var target_div = "#todo_list ul";

    //一度divを空にしてからtodoリスト(tasks)の中身を表示
    $(target_div).html("");
    for(var i=0; i<tasks.length; i++) {
        console.log(tasks[i]);
        $(target_div).append("<li>"+tasks[i]+"</li>")
    }
}

function addTask(){
    console.log("save");
    if($("#new_task").val() != ""){
        //新たにタスクを追加
        tasks.unshift($("#new_task").val());

        //ローカルストレージに保存
        localStorage.setItem(save_key, JSON.stringify(tasks));

        //表示してテキストボックスは空に
        printTasks();
        $("#new_task").val("");
    }
}

function deleteSavedText(){
    //ローカルストレージと配列を空にして

    //表示
    printTasks();
}


