import { Component } from '@angular/core';
import { ToDoItem } from '../model/TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: ToDoItem[] = [
    new ToDoItem(1, 'Buy Milk', "Buy some Milk", false),
    new ToDoItem(2, 'Buy Bread', "Buy some Bread", false),
  ]

  onUpdateTodo(id: number, isDone: boolean) {
    const todoItem = this.todoItems.find(todo => todo.id === id);
    if (todoItem) {
      todoItem.isDone = isDone;
    }
  }
}
