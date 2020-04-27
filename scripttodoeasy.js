function getTodos() {
    var todos = new Array;
    var todosStr = localStorage.getItem('todo');
    if (todosStr !== null){
        todos = JSON.parse(todosStr);
    }
    return todos;
}

function add(){
    var task = document.getElementById('task').value;
    var todos = getTodos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify);
    show();

    return false;
}

function clearDefault(a) {
    if(a.deafultValue ==a.value) {a.value=""}
};

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    return false;
}

function show(){
    var todos = getTodos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id=""' + i + '>Delete</button> </li>';
    };
    html += '</ul>';
    
}