const deleteTodo = (item) => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  const filtered = getTodos.filter((val) => val.todo !== item.todo);
  localStorage.setItem('todos', JSON.stringify(filtered));
  window.location.reload(true);
};

export default deleteTodo;
