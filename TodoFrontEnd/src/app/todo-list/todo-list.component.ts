import { Component } from '@angular/core';
import { ToDoItem } from '../model/TodoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: ToDoItem[] = [];

  constructor(
    private todoService: TodoService,
    private todoHttpService: TodoHttpService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.refreshList()
  }

  refreshList() {
    this.todoHttpService.getAll().subscribe(todoItems => {
      this.todoItems = todoItems;
    })
  }

  onUpdateTodo(id: number, isDone: boolean) {
    this.todoService.update(id, isDone);
  }

  onGotoDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
