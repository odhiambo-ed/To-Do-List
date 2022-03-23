import './style.css';

const displayItems = (position, item) => {
  const tableBody = document.getElementById('tbody');
  const tableRow = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.innerHTML = `<input type="checkbox" name="check" id={${position}}>`;
  const th2 = document.createElement('td');
  th2.innerHTML = `<p>${item.todo}</p>`;
  tableRow.appendChild(th1);
  tableRow.appendChild(th2);
  tableBody.appendChild(tableRow);
};

const getAllTodos = () => {
  const getTodos = JSON.parse(localStorage.getItem('todos'));
  if (getTodos !== null) {
    getTodos.forEach((val) => {
      displayItems(getTodos.indexOf(val), val);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  getAllTodos();
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

    const existingTodo = JSON.parse(localStorage.getItem('todos'));
    if (existingTodo === null) {
      this.todoArr.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(this.todoArr));
      window.location.reload(true);
    } else {
      const newTodoArr = [...existingTodo, newTodo];
      localStorage.setItem('todos', JSON.stringify(newTodoArr));
      window.location.reload(true);
    }
  }
}

const todoList = new Todo();

document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todoItem = document.querySelector('#todo-input');
  todoList.addTodo(todoItem.value);
  todoItem.value = '';
});
