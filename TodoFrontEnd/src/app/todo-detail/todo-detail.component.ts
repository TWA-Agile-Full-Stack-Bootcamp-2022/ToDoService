import { Component } from '@angular/core';
import { ToDoItem } from '../model/TodoItem';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  todoItem: ToDoItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private todoHttpService: TodoHttpService,
    private formBuilder: FormBuilder
  ) {
  }

  editForm = this.formBuilder.group({
    title: '',
    description: '',
    isDone: false
  })

  ngOnInit(): void {
   this.initData();
  }

  initData() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    // this.todoItem = this.todoService.getById(id);
    this.todoHttpService.getById(id).subscribe(todoItem => {
      this.todoItem = todoItem;
      this.editForm.setValue({
        title: todoItem.title,
        description: todoItem.description,
        isDone: todoItem.isDone
      })
    })
  }

  onSubmit() {
    console.log(this.editForm.value)
    const toDoItem = new ToDoItem(this.todoItem!.id, this.editForm.value.title!, this.editForm.value.description!, this.editForm.value.isDone!)
    this.todoHttpService.update(toDoItem).subscribe(() => {
      this.initData();
    })
  }
}
