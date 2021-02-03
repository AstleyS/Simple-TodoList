const author = document.querySelector('.author');
let authorName = prompt('Please, Insere your name');
author.innerText = `${authorName}'s TodoList`;

const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter');

document.addEventListener('DOMContentLoaded', getLocalTodos);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCheck);
filter.addEventListener('click', filterTodo);

function addTodo(event) {

    // prevents form from submitting
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value.trim();
    newTodo.classList.add('todo-item');
            
    const completedB = document.createElement('button');
    completedB.innerText = "Check";
    completedB.classList.add('complete-btn');
    
    const deleteB = document.createElement('button');
    deleteB.innerText = "Delete";
    deleteB.classList.add('delete-btn');
    
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(completedB);
    todoDiv.appendChild(deleteB);
    todoList.appendChild(todoDiv);

    saveLocalTodos(todoInput.value);

    todoInput.value = '';
}

function deleteOrCheck(event) {
    const item = event.target;

    const todo = item.parentElement;
    switch(item.classList[0]) {
        case 'delete-btn':
            todo.classList.add('fall');
            deleteLocalTodos(todo);
            todo.addEventListener('transitionend', () => {
                todo.remove(); 
            })
            break;
        case 'complete-btn':
            todo.classList.toggle('completed');
            break;
        default:
            console.log('btn not found');
    }
}

function filterTodo(event) {
    const todos = document.querySelectorAll('.todo');
    todos.forEach((todo) => {
        if (todo.style !== undefined) {
            switch(event.target.value) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if (todo.classList.contains('completed'))
                        todo.style.display = 'flex';
                    else 
                        todo.style.display = 'none';
                    break;
                case 'uncompleted':
                    if (!todo.classList.contains('completed'))
                        todo.style.display = 'flex';
                    else 
                        todo.style.display = 'none';
                    break;
                default:
                    console.log('btn not found');
            }
        }
    });
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
            
        const completedB = document.createElement('button');
        completedB.innerText = "Check";
        completedB.classList.add('complete-btn');
        
        const deleteB = document.createElement('button');
        deleteB.innerText = "Delete";
        deleteB.classList.add('delete-btn');
        
        todoDiv.appendChild(newTodo);
        todoDiv.appendChild(completedB);
        todoDiv.appendChild(deleteB);
        todoList.appendChild(todoDiv);
    });
}

function deleteLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todos.indexOf(todo.children[0].innerText);
    todos.splice(todoIndex, 1)
    localStorage.setItem("todos", JSON.stringify(todos));
}