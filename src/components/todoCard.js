function TodoCard(todo, { onToggleCompletion }) {
    // Create a todo card element
    const todoElement = document.createElement('div');
    todoElement.className = 'todo-card';

    // Add the todo title and checkbox to the todo card
    const labelClass = todo.completed ? 'completed' : '';
    todoElement.innerHTML = `
        <input type="checkbox" id="todo-${todo.id}" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
        <label for="todo-${todo.id}" class="${labelClass}">${todo.title}</label>
    `;

    const checkbox = todoElement.querySelector('input[type="checkbox"]');
    const label = todoElement.querySelector('label');
    checkbox.onchange = () => {
        label.classList.toggle('completed');
        // Call the onToggleCompletion function with the todo as an argument
        onToggleCompletion(todo);
    };

    return todoElement;
}

export default TodoCard;

