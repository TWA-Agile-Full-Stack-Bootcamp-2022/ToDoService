import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/TodoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoItems: ToDoItem[];

  constructor() {
    this.todoItems = [
      new ToDoItem(1, 'Buy Milk', "Buy some Milk", false),
      new ToDoItem(2, 'Buy Bread', "Buy some Bread", false),
    ]
  }

  public getAll(): ToDoItem[] {
    return this.todoItems;
  }

  public update(id: number, isDone: boolean) {
    const todoItem = this.todoItems.find(todo => todo.id === id);
    if (todoItem) {
      todoItem.isDone = isDone;
    }
  }
}
