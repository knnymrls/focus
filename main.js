import './style.css'

document.querySelector('#app').innerHTML = `
  <button></button>
`

class todo {
  constructor(title, completion, index) {
    this.title = title
    this.completion = completion
    this.index = index
  }
}

let todos = [];

function createTodo(title) {
  let index = todos.length
  let newTodo = new todo(`${title}`, false, index)
  todos.push(newTodo)
}

function deleteTodo(index) {
  let temp = [];
  for (let i = 0; i < todos.length; i++) {
    if (i != index) {
      temp.push(todos[i])
    }
  }
  todos = temp
  reIndex()
}

function reIndex() {
  for (let i = 0; i < todos.length; i++) {
    todos[i].index = i
  }
}


function completedTodo(todo) {
  todo.completion = true;
}

createTodo('go on a run')
createTodo('go on a walk')
createTodo('go on a hike')
deleteTodo(1)


console.log(todos)