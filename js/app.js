const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);

function addTodo(event) {

    // prevents form from submitting
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
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
}