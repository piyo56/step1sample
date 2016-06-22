//TODO
// - 入力チェック
// - デザインをもう少しマシに
// (- 登録した日付とかその他オプション)

var debug_mode = true;
var save_key = "todo_list";
var tasks = [];

$(waitForEvent);
function waitForEvent(){
    init();
    //$(ターゲット).click()でなく$(document).on()を使うと動く
    $(document).on("click", "#add_button",  function(){
        addTask();
    });
    $(document).on("click", ".done_button", function(){
        deleteTask($(this).attr("id"));
    });
};

function init(){
    if(debug_mode) console.log("init");
    //ユーザーのtodoリストをロード
    if(localStorage.getItem(save_key) != null){
        tasks = JSON.parse(localStorage.getItem(save_key));
    }
    printTasks();
}

function printTasks(){
    if(debug_mode) console.log("print");
    var target_div = "#output";
    var task_div = "";

    //一度divを空にしてからtodoリスト(tasks)の中身を表示
    $(target_div).html("");
    for(var i=0; i<tasks.length; i++) {
        task_div = '<div class="container">' +
                       '<div class="list_button task_button">' +
                           tasks[i] +
                       '</div>' +
                       '<div class="list_button done_button" id="task' + i + '">' +
                           'done' +
                       '</div>' +
                   '</div>';
        $(target_div).append(task_div);
    }
}

function checkText(text){
    // 文字数が0または20以上は不可
    if (0 === text.length || 50 < text.length) {
        alert("文字数は1〜50字にしてください");
        return false;
    }

    // すでに入力された値があれば不可
    if(tasks.indexOf(text) >= 0){
        alert("同じ内容は避けてください");
        return false;
    }

    // すべてのチェックを通過できれば可
    return true;
}

function addTask(){
    if(debug_mode) console.log("save");
    new_task = $("#new_task").val();
    console.log(new_task);
    
    //入力チェック
    if(checkText(new_task)){
        //タスクを追加と保存
        tasks.unshift(new_task);
        localStorage.setItem(save_key, JSON.stringify(tasks));

        //表示してテキストボックスは空に
        printTasks();
        $("#new_task").val("");
    }
    //$(waitForEvent);
}

function deleteTask(task_id){
    if(debug_mode) console.log("delete");
    //押下されたdoneボタンのidから番号（添字）を取得
    var index = Number(task_id.split("task").join(""));

    //tasks[index]を削除してローカルストレージを更新
    tasks.splice(index, 1);
    localStorage.setItem(save_key, JSON.stringify(tasks));

    //表示
    printTasks();
    //$(waitForEvent);
}
