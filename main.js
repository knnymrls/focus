import './style.css'
import { createTodo, clear } from './src/utils/todoActions'
import { refreshTodosDisplay } from './src/utils/todoDisplayActions'
import { startTimer } from './src/utils/timer'

window.onload = function () {
  startTimer();
};

document.querySelector('main').innerHTML = `
  <form id="todo-form">
    <input type="text" id="todo-input" placeholder="Add a todo">
  </form>
  <button id="clear-button">Clear Todos</button>
`

refreshTodosDisplay();

let form = document.querySelector('#todo-form');

document.querySelector('#todo-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const input = document.querySelector('#todo-input');
  if (input.value.trim()) {
    createTodo(input.value);
    input.value = '';
  }
});

let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
  clear();
})

