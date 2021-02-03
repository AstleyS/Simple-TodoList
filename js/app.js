const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCheck);

function addTodo(event) {

    // prevents form from submitting
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
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

    todoInput.value = '';
}

function deleteOrCheck(event) {
    const item = event.target;

    const todo = item.parentElement;
    switch(item.classList[0]) {
        case 'delete-btn':
            todo.remove(); 
            break;
        case 'complete-btn':
            todo.classList.toggle('completed');
    }
}