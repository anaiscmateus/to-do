// GOAL: BUILD A SIMPLE TO DO LIST
// VARS (smurf tools)
const userInput = document.querySelector('#userInput') // the box where you type tasks
const toDoList = document.querySelector('#toDoList') // the paper where your tasks appear
const addBtn = document.querySelector('#add') // button to add tasks
const clearAllBtn = document.querySelector('#clearAll') // button to clear all tasks

// EVENT LISTENERS (smurfs)
addBtn.addEventListener('click', addTask) // smurfs listen for a click and adds tasks to the list
clearAllBtn.addEventListener('click', clearAll) // sumrfs listen for a click and clears all tasks
toDoList.addEventListener('click', function(event) { 
    // smurfs listen for clicks on checkboxes and removes tasks
    // function(event) {} can give smurfs special instructions
    if (event.target.classList.contains('checkBox')) {
        removeTask(event.target)
    }
}) 

toDoList.addEventListener('dblclick', function (event) {
    // smurfs listen for double-clicks on task text
    // function(event) {} can give smurfs special instructions
    if (event.target.classList.contains('taskText')) {
        editTask(event.target)
    }
})

// FUNCTIONS (smurf magic spells)
function addTask() {
    // smurfs take what you typed and write it on the paper
    let task = userInput.value.trim() // smurfs take what you typed and trim around it

    // if you type anything, smurfs will write on the paper
    if (task) { 
        toDoList.innerHTML += `<li class="task"><input type="checkbox" name="checkBox" class="checkBox"><span class="taskText">${task}</span></li>` 
        userInput.value = '' // smurfs clear the box where you type tasks
    }
}

function clearAll() {
    // smurfs erase everything from the special paper
    toDoList.innerHTML = ''
}

function removeTask(checkbox) {
    // When you click a checkbox, smurfs will make it disappear
    checkbox.parentElement.remove()
}

function editTask(taskText) {
    // Get the current text
    let str = taskText.innerText

    // Replace the task text with an input field and update button
    taskText.innerHTML = `<input type="text" class="taskEditor" value="${str}"><button id="update">Update</button>`

    // Get the newly added input and update button
    const taskEditor = taskText.querySelector('.taskEditor')
    const updateButton = taskText.querySelector('#update')

    // Add a click event listener to the update button
    updateButton.addEventListener('click', function () {
        let newTask = taskEditor.value

        if (newTask) {
            taskText.innerText = newTask
        } else {
            taskText.innerText = str
        }
    })

}