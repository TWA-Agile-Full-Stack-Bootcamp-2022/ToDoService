import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/TodoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems: ToDoItem[];

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

  public create(title: string, description: string) {
    const id = this.todoItems.length + 1;
    const todoItem = new ToDoItem(id, title, description, false);
    this.todoItems.push(todoItem);
  }

  public getById(id: number): ToDoItem | undefined {
    return this.todoItems.find(todo => todo.id === id);
  }
}
