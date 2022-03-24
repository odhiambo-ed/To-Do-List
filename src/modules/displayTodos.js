import checkTodo from './checkTodo.js';
import deleteTodo from './deleteTodo.js';

const displayItems = (position, item) => {
  const tableBody = document.getElementById('tbody');
  const tableRow = document.createElement('tr');
  tableRow.style.cursor = 'pointer';
  const deleteButton = document.createElement('i');
  deleteButton.setAttribute('class', 'bi bi-trash3-fill');
  deleteButton.setAttribute('id', 'end-delete');
  const todoInput = document.createElement('input');
  todoInput.setAttribute('class', item.completed && 'completed');
  todoInput.setAttribute('type', 'text');
  todoInput.setAttribute('value', item.todo);
  todoInput.setAttribute('disabled', 'true');
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
  th2.appendChild(todoInput);
  const th3 = document.createElement('td');
  th3.appendChild(deleteButton);
  const th4 = document.createElement('td');
  th4.innerHTML = `
    <div class="end-dots">
      <i class="bi bi-three-dots-vertical"></i>
    </div>
  `;
  tableRow.appendChild(th1);
  tableRow.appendChild(th2);
  tableRow.appendChild(th3);
  tableRow.appendChild(th4);
  tableBody.appendChild(tableRow);
};

export default displayItems;
