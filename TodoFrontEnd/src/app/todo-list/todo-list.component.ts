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
    const item = this.todoItems.find(todo => todo.id === id);
    if (item) {
      item.isDone = true;
      this.todoHttpService.update(item).subscribe(() => {
        this.refreshList()
      })
    }
  }

  onDelete(id: number) {
    this.todoHttpService.deleteById(id).subscribe(() => {
      this.refreshList()
    })
  }

  onGotoDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
