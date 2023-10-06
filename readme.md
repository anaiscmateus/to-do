# To-Do List

Manage your tasks with this simple to-do list app. You can add tasks, clear all tasks, remove tasks, and edit and update existing tasks. Simply click on the checkbox to remove a task, or double-click on the task text to edit it.

![Project Screenshot](https://raw.githubusercontent.com/anaiscmateus/to-do/main/img/project-cover.png)

Link to project: [Live Demo](https://effortless-macaron-e2d475.netlify.app/)

## How It's Made

This project was built using HTML, CSS, and JavaScript:

- **HTML:** Provides the structure and content of the to-do list.
- **CSS:** Adds stylish animations for button interactions, enhancing the user experience.
- **JavaScript:** Handles task management, including adding, removing, updating, and clearing tasks.

One of the major challenges I faced was adding event listeners for each checkbox. I learned about using anonymous functions within event listeners, allowing me to define a function right where it's used within the listener. This proved essential in handling task removal efficiently.

Editing tasks also posed a challenge. I implemented a solution where the task text is substituted with an input box for editing, and the task is updated based on the user's input.

## How To's

### How to Remove a Task

![Remove Task](https://raw.githubusercontent.com/anaiscmateus/to-do/main/img/removeTaskTut.gif)

To remove a task, simply click the checkbox next to the task. It will be removed from your to-do list.

### How to Edit and Update a Task

![Edit Task](https://raw.githubusercontent.com/anaiscmateus/to-do/main/img/updateTaskTut.gif)

To edit and update a task:
1. Double-click on the task text you wish to edit.
2. Make your changes in the input field that appears.
3. Click the "Update" button to save your changes.

## Optimizations (Planned) 🛠️

Coming soon! Here are some planned optimizations for the future:

- Saving to-do list data to the browser's local storage, ensuring users don't lose their tasks between sessions.
- Instead of removing a task completely when the user clicks on the checkbox, tasks will be crossed out. Double-clicking on the checkbox will remove the task, and there will be a button to clear all crossed out or completed tasks.

Stay tuned for updates! 🚀

## Lessons Learned 📚

During the development of this project, I gained valuable insights:

- I learned more about the use of anonymous functions in JavaScript and their usefulness in handling event listeners efficiently.
- Exploring CSS animations added interactivity and enhanced the user experience.

Feel free to explore the live demo and start managing your tasks with the To-Do List! 🌟

Link to project: [Live Demo](https://effortless-macaron-e2d475.netlify.app/)