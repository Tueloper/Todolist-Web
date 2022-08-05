// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const checkers = document.querySelectorAll(".checker input[type='checkbox']");
const allTaskButtons = document.querySelector(".todo-nav .all-task");
const activeTaskButtons = document.querySelector(".todo-nav .active-task");
const completedButtons = document.querySelector(".todo-nav .completed-task");
const group = document.querySelectorAll(".group");

// loop through all checkers and add event listener
for (let i = 0; i < checkers.length; i++) {
    checkers[i].addEventListener("click", lineThrough);
}

// set line-through on checker
function lineThrough(e) {
  if (e.target.checked) {
    e.target.parentElement.parentElement.parentElement.parentElement.classList.add("complete");
  } else {
    e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("complete");
  }
};


// add event listener to all task button
allTaskButtons.addEventListener("click", showAllTask);
activeTaskButtons.addEventListener("click", showActiveTask);
completedButtons.addEventListener("click", showCompletedTask);

function showCompletedTask() {
    for (let i = 0; i < group.length; i++) {
        if (!group[i].classList.contains("complete")) {
            group[i].classList.add("d-none");
        } else {
            group[i].classList.remove("d-none");
        }
    }
}

function showActiveTask() {
    for (let i = 0; i < group.length; i++) {
        if (group[i].classList.contains("complete")) {
            group[i].classList.add("d-none");
        } else {
            group[i].classList.remove("d-none");
        }
    }
}

function showAllTask() {
    for (let i = 0; i < group.length; i++) {
        group[i].classList.remove("d-none");
    }
}
