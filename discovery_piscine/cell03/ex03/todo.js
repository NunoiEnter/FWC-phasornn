const todoList = document.getElementById('ft_list');
const newButton = document.getElementById('new-btn');
const cookieName = 'cell03_todos';

function readTodos() {
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${cookieName}=`));

  if (!cookie) {
    return [];
  }

  try {
    const value = cookie.slice(cookieName.length + 1);
    const todos = JSON.parse(decodeURIComponent(value));
    return Array.isArray(todos) ? todos.filter((todo) => typeof todo === 'string') : [];
  } catch {
    return [];
  }
}

function saveTodos() {
  const todos = Array.from(todoList.children).map((item) => item.textContent);
  document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(todos))}; max-age=31536000; path=/`;
}

function addTodo(text) {
  const item = document.createElement('div');
  item.className = 'todo-item';
  item.textContent = text;
  todoList.prepend(item);
}

function renderTodos(todos) {
  todoList.replaceChildren();
  todos.slice().reverse().forEach(addTodo);
}

newButton.addEventListener('click', () => {
  const text = prompt('Enter a new TO DO:');
  if (text !== null && text.trim() !== '') {
    addTodo(text.trim());
    saveTodos();
  }
});

todoList.addEventListener('click', (event) => {
  const item = event.target.closest('.todo-item');
  if (!item) {
    return;
  }

  if (confirm('Do you want to remove this TO DO?')) {
    item.remove();
    saveTodos();
  }
});

renderTodos(readTodos());
