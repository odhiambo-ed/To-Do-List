import Sortable from 'sortablejs';

import checkTodo from './checkTodo.js';
import deleteTodo from './deleteTodo.js';

const displayItems = (position, item) => {
  const tableBody = document.getElementById('tbody');
  Sortable.create(tableBody, {
    onAdd: (event) => {
      const existentTodos = JSON.parse(localStorage.getItem('todos'));
      const tmp = existentTodos[event.newIndex];
      existentTodos[event.newIndex] = item;
      existentTodos[event.oldIndex] = tmp;
      localStorage.setItem('todos', JSON.stringify(existentTodos));
      window.location.reload(true);
    },
  });
  const tableRow = document.createElement('tr');
  tableRow.style.cursor = 'move';
  const deleteButton = document.createElement('i');
  deleteButton.setAttribute('class', 'bi bi-trash3-fill');
  deleteButton.setAttribute('id', 'end-delete');
  const todoInput = document.createElement('input');
  todoInput.setAttribute('class', item.completed && 'completed');
  todoInput.setAttribute('type', 'text');
  todoInput.setAttribute('value', item.todo);
  todoInput.disabled = true;
  todoInput.setAttribute('id', 'todo-edit');
  todoInput.style.border = 'none';
  todoInput.style.outline = 'none';
  todoInput.style.paddingLeft = 200;
  todoInput.style.paddingRight = 200;
  deleteButton.addEventListener('click', () => {
    deleteTodo(item);
  });
  tableRow.addEventListener('mouseover', () => {
    tableRow.style.backgroundColor = '#f4f7b2';
    deleteButton.style.opacity = 1;
    deleteButton.style.pointerEvents = 'all';
    todoInput.style.backgroundColor = '#f4f7b2';
  });
  tableRow.addEventListener('mouseout', () => {
    tableRow.style.backgroundColor = '';
    deleteButton.style.opacity = 0;
    deleteButton.style.pointerEvents = 'none';
    todoInput.style.backgroundColor = '';
  });
  const th1 = document.createElement('td');
  th1.draggable = true;
  th1.style.flex = 1;
  th1.style.width = '100%';
  const checkInput = document.createElement('input');
  checkInput.setAttribute('class', 'check');
  checkInput.setAttribute('type', 'checkbox');
  checkInput.setAttribute('name', 'check');
  checkInput.setAttribute('id', position);
  if (item.completed) {
    checkInput.checked = true;
  }
  checkInput.addEventListener('change', () => {
    checkTodo(position, checkInput.checked);
  });
  th1.appendChild(checkInput);
  const th2 = document.createElement('td');
  th2.draggable = true;
  const actionForm = document.createElement('form');
  actionForm.appendChild(todoInput);
  actionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const listedTodos = JSON.parse(localStorage.getItem('todos'));
    listedTodos[position].todo = todoInput.value;
    localStorage.setItem('todos', JSON.stringify(listedTodos));
    window.location.reload(true);
  });
  th2.appendChild(actionForm);
  const th3 = document.createElement('td');
  th3.appendChild(deleteButton);
  const th4 = document.createElement('td');
  const dotDiv = document.createElement('div');
  dotDiv.setAttribute('class', 'end-dots');
  const dotIcon = document.createElement('i');
  dotIcon.setAttribute('class', 'bi bi-three-dots-vertical');
  dotIcon.setAttribute('id', 'dot-icon');
  dotIcon.addEventListener('click', () => {
    todoInput.disabled = false;
  });
  dotDiv.appendChild(dotIcon);
  th4.appendChild(dotDiv);
  tableRow.appendChild(th1);
  tableRow.appendChild(th2);
  tableRow.appendChild(th3);
  tableRow.appendChild(th4);
  tableBody.appendChild(tableRow);
};

export default displayItems;
