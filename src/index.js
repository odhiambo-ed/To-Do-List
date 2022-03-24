import './style.css';

import getAllTodos from './modules/getTodos.js';
import Todo from './modules/todo.js';

const initialArr = [
  {
    todo: 'add water',
    completed: false,
  },
  {
    todo: 'wash dishes',
    completed: false,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  if (getTodos === null || getTodos.length === 0) {
    localStorage.setItem('todos', JSON.stringify(initialArr));
    getAllTodos();
  } else {
    getAllTodos();
  }
});

const todoList = new Todo();

document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todoItem = document.querySelector('#todo-input');
  todoList.addTodo(todoItem.value);
  todoItem.value = '';
});

const clearCompleted = document.querySelector('#clear-title');
clearCompleted.addEventListener('click', () => {
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  const correctTodos = existingTodos.filter((val) => !val.completed);
  localStorage.setItem('todos', JSON.stringify(correctTodos));
  window.location.reload(true);
});
