function TodoCard(todo, { onDelete }) {
    const todoElement = document.createElement('div');
    todoElement.className = 'todo-card';

    todoElement.innerHTML = `
        <p>${todo.title}</p>
        <button>Delete</button>
    `;

    const deleteButton = todoElement.querySelector('button');
    deleteButton.onclick = () => onDelete(todo);

    return todoElement;
}

export default TodoCard;
