const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter')

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

    todoInput.value = '';
}

function deleteOrCheck(event) {
    const item = event.target;

    const todo = item.parentElement;
    switch(item.classList[0]) {
        case 'delete-btn':
            todo.classList.add('fall');
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

