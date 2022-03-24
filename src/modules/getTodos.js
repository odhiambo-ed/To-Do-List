import displayItems from './displayTodos.js';

const getAllTodos = () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  getTodos.forEach((val) => {
    displayItems(getTodos.indexOf(val), val);
  });
};

export default getAllTodos;
