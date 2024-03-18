import './style.css'
import { createTodo, todos, clear } from './src/utils/todoActions'
import { refreshTodosDisplay } from './src/utils/todoDisplayActions'


document.querySelector('#app').innerHTML = `
  <form id="todo-form">
    <input type="text" id="todo-input" placeholder="Add a todo">
    <button type="submit">Add</button>
  </form>
  <button id="clear-button">Clear Todos</button>
`

refreshTodosDisplay();

let form = document.querySelector('#todo-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let input = document.querySelector('#todo-input');
  createTodo(input.value);
  console.log(todos);
  input.value = '';
});

let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function () {
  clear();
})

