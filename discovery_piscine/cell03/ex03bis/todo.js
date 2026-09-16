$(function () {
  const cookieName = 'cell03_todos_jquery';

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
    const todos = $('#ft_list .todo-item').map(function () {
      return $(this).text();
    }).get();
    document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(todos))}; max-age=31536000; path=/`;
  }

  function addTodo(text) {
    $('<div>', {
      class: 'todo-item',
      text
    }).prependTo('#ft_list');
  }

  readTodos().slice().reverse().forEach(addTodo);

  $('#new-btn').on('click', function () {
    const text = prompt('Enter a new TO DO:');
    if (text !== null && text.trim() !== '') {
      addTodo(text.trim());
      saveTodos();
    }
  });

  $('#ft_list').on('click', '.todo-item', function () {
    if (confirm('Do you want to remove this TO DO?')) {
      $(this).remove();
      saveTodos();
    }
  });
});
