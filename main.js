import './style.css'
import { createTodo, clear } from './src/utils/todoActions'
import { refreshTodosDisplay } from './src/utils/todoDisplayActions'
import { startTimer } from './src/utils/timer'

// Starts the timer when the page loads
window.onload = function () {
  startTimer();
};

// Refreshes the todos display when the page loads
refreshTodosDisplay();

document.querySelector('main').innerHTML = `
  <form id="todo-form">
    <input type="text" id="todo-input" placeholder="Add a todo">
  </form>
  <button id="clear-button">Clear Todos</button>
`

//Form Event Listener
let form = document.querySelector('#todo-form');
document.querySelector('#todo-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.querySelector('#todo-input');
  if (input.value.trim()) {
    createTodo(input.value);
    input.value = '';
  }
});

// Clear Event Listener
let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
  clear();
})

