const addTaskInputSel = document.querySelector("#addTaskInput");
const list = document.querySelector("#list");

function addTask() {
    const addTaskInput = addTaskInputSel.value;
    const listItem = document.querySelector(".listItem").cloneNode(true);
    const taskDescription = listItem.querySelector(".taskDescription");
    list.appendChild(listItem);
    taskDescription.innerText = addTaskInput;
    addTaskInputSel.value = ""; // Clear the input field
    listItem.querySelector(".removeTaskButton").addEventListener("click", removeTask);
    listItem.querySelector(".checkBox").addEventListener("change", completeTask);
}

function removeTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    list.removeChild(listItem);
}

function completeTask() {
    const taskDescription = this.nextElementSibling;
    taskDescription.classList.toggle("completed");
    if (taskDescription.classList.contains("completed")) {
        taskDescription.style.textDecoration = "line-through";
        taskDescription.style.opacity = "0.5";
    } else {
        taskDescription.style.textDecoration = "none";
        taskDescription.style.opacity = "1";
    }
}

const addTaskButton = document.querySelector("#addTaskButton");
addTaskButton.addEventListener("click", addTask);
