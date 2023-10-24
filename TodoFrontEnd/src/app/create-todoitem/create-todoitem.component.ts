import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-create-todoitem',
  templateUrl: './create-todoitem.component.html',
  styleUrls: ['./create-todoitem.component.css']
})
export class CreateTodoitemComponent {

  @Output() created = new EventEmitter();

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private todoHttpService: TodoHttpService
  ) { }

  todoForm = this.formBuilder.group({
    title: '',
    description: ''
  })

  onSubmit() {
    // this.todoService.create(this.todoForm.value.title!, this.todoForm.value.description!)
    this.todoHttpService.create(this.todoForm.value.title!, this.todoForm.value.description!).subscribe(() => {
      this.created.emit();
      this.todoForm.reset()
    })
  }
}
