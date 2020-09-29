let inputText = document.getElementById("inputText")
let addButton = document.getElementById("addButton")
let taskList = document.getElementById('taskList')
let completedTaskList = document.getElementById('completedTaskList')

inputText.addEventListener('click', function() {
    inputText.value = ''
})

addButton.addEventListener('click', function() {
    let li = document.createElement('li')
    
    let newTask = inputText.value
    if (newTask === '') {
        alert("Task field can't be left blank");
        newTask = 'New task name'
        
    }
    inputText.Value = '' //clear input field when ADD is clicked

    let label = document.createElement('label')
    label.innerHTML = newTask

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.name = 'pendingTask'
    checkbox.addEventListener('click', function() {
        if (this.checked) {
            completedTaskList.appendChild(this.parentElement)
        } else {
            taskList.appendChild(this.parentElement)           
        }     
    })

    let removeButton = document.createElement('button')
    removeButton.innerHTML = 'remove'
    removeButton.addEventListener('click', function() {
        let parent = this.parentElement.parentElement
        parent.removeChild(this.parentElement)
    })

    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(removeButton)

    taskList.appendChild(li)
})

