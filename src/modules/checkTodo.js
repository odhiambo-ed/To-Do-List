const checkTodo = (position, state) => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  getTodos[position].completed = state;
  localStorage.setItem('todos', JSON.stringify(getTodos));
  window.location.reload(true);
};

export default checkTodo;
