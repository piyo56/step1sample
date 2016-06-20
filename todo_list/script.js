var save_key = "todo_list";
var tasks = [];

$(loaded);
function loaded(){
    init();
    $("#add_button").click(addTask);
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

    console.log(task_div);

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
        console.log(tasks[i]);
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

