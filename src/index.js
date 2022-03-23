import './style.css';

const initialArr = [
  {
    todo: 'wash Dishes',
    completed: false,
  },
  {
    todo: 'complete ToDo list projects',
    completed: false,
  },
];

const displayItems = (position, item) => {
  const tableBody = document.getElementById('tbody');
  const tableRow = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.innerHTML = `<input class="check" type="checkbox" name="check" id={${position}}>`;
  const th2 = document.createElement('td');
  th2.innerHTML = `<p>${item.todo}</p>`;
  const th3 = document.createElement('td');
  th3.innerHTML = `
    <div class="end-dots">
      <i class="bi bi-three-dots-vertical float-right"></i>
    </div>
  `;
  tableRow.appendChild(th1);
  tableRow.appendChild(th2);
  tableRow.appendChild(th3);
  tableBody.appendChild(tableRow);
};

const getAllTodos = () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  getTodos.forEach((val) => {
    displayItems(getTodos.indexOf(val), val);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  if (getTodos === null) {
    localStorage.setItem('todos', JSON.stringify(initialArr));
    getAllTodos();
  } else {
    getAllTodos();
  }
});

class Todo {
  constructor() {
    this.todoArr = [];
  }

  addTodo(todo) {
    const newTodo = {
      todo,
      completed: false,
    };
    this.todoArr.push(newTodo);
    const existingTodo = JSON.parse(localStorage.getItem('todos'));
    const newTodoArr = [...existingTodo, ...this.todoArr];
    localStorage.setItem('todos', JSON.stringify(newTodoArr));
    window.location.reload(true);
  }
}

const todoList = new Todo();

document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todoItem = document.querySelector('#todo-input');
  todoList.addTodo(todoItem.value);
  todoItem.value = '';
});
