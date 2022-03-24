export default class Todo {
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
