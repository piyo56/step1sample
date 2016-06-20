var save_key = "todo_list";
var tasks = [];

$(loaded);
function loaded(){
    init();
    $("#add_button").click(addTask);
    $(".done_button").click(function(){
        deleteTask($(this).attr("id"));
    });
};

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
    var target_div = "#output";
    var task_div = "";

    //一度divを空にしてからtodoリスト(tasks)の中身を表示
    $(target_div).html("");
    for(var i=0; i<tasks.length; i++) {
        task_div = '<div class="container">' +
                       '<div class="list_button task_button" id="task' + i + '">' +
                           tasks[i] +
                       '</div>' +
                       '<div class="list_button done_button" id="task' + i + '">' +
                           'done' +
                       '</div>' +
                   '</div>';
        $(target_div).append(task_div);
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

function deleteTask(task_id){
    console.log("delete");
    //押下されたdoneボタンのidから番号（添字）を取得
    var index = Number(task_id.split("task").join(""));

    //tasks[index]を削除してローカルストレージを更新
    tasks.splice(index, 1);
    localStorage.setItem(save_key, JSON.stringify(tasks));

    //表示
    printTasks();
    
    //TODO
    //addは自然に連続で実行できるのに，deleteは
    //最後にloaded関数を呼んでおかないと連続で実行できない
    $(loaded);
}
