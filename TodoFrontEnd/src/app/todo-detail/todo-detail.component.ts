import { Component } from '@angular/core';
import { ToDoItem } from '../model/TodoItem';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  todoItem: ToDoItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.todoItem = this.todoService.getById(id);
  }
}
