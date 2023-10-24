import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-todoitem',
  templateUrl: './create-todoitem.component.html',
  styleUrls: ['./create-todoitem.component.css']
})
export class CreateTodoitemComponent {
  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
  ) { }

  todoForm = this.formBuilder.group({
    title: '',
    description: ''
  })

  onSubmit() {
    this.todoService.create(this.todoForm.value.title!, this.todoForm.value.description!)
    this.todoForm.reset()
  }

}
