"use strict";
//! The items Exists or exists
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
//Run only if btn exists
//btn?.addEventListenetr()
const todos = readTodos();
todos.forEach(createTodo);
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
});
//It say it is a string because I say so
let mystery = "Hello World";
const numChars = mystery.length;
