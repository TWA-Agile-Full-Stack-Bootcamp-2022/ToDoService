import { Component } from '@angular/core';
import { ToDoItem } from '../model/TodoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: ToDoItem[] = [];

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.todoItems = this.todoService.getAll();
  }

  onUpdateTodo(id: number, isDone: boolean) {
    this.todoService.update(id, isDone);
  }

  onGotoDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
