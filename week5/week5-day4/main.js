//Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")


//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//Functions
function addTodo(event) {
    
        //prevent form from submitting
    event.preventDefault();
    //create todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //checkbox button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>' 
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //checkbox button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>' 
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //Append to todo list
    todoList.appendChild(todoDiv)
    //clear todo input value
    todoInput.value = ""
    
}

function deleteCheck(event) {
    const item = event.target

    //Delete todo
    if (item.classList[0] === 'trash-btn') {
        //animation
        item.parentElement.classList.add('fall')
        // delete after animation
        item.parentElement.addEventListener('transitionend', function() {
            item.parentElement.remove()
        })
       
    }

    //checkmark
    if (item.classList[0] === 'complete-btn') {
        item.parentElement.classList.toggle('completed')
    }

}