var input = document.querySelector("#todo");
var list = document.querySelector("ol");

var todo = [];

function renderTodo(){
    list.innerHTML = ""
    for(var i = 0; i < todo.length; i++){
        list.innerHTML += `
        <li>${todo[i]}
        <button onclick="deleteTodo(${i})">Delete</button>
        <button onclick="editTodo(${i})">Edit</button>
        </li>
        ` 
    }

}

function addTodo(){
    todo.push(input.value);
    console.log(todo);
    renderTodo()
    input.value = ""
    
}


function deleteTodo(index){
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    console.log(todo);

   renderTodo()
    
}
function editTodo(index){
    var updatedValue = prompt("enter updated value");
    todo.splice(index , 1 , updatedValue);
    renderTodo()
}