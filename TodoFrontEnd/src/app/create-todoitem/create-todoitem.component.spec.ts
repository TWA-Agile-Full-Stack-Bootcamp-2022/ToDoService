import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoitemComponent } from './create-todoitem.component';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from '../model/TodoItem';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TodoHttpService } from '../service/todo-http.service';
import { HtmlParser } from '@angular/compiler';

describe('CreateTodoitemComponent', () => {
  let component: CreateTodoitemComponent;
  let fixture: ComponentFixture<CreateTodoitemComponent>;
  let httpTestingController: HttpTestingController;

  let todoServiceStub: Partial<TodoService> = {
    todoItems: [],
  }
  todoServiceStub.create = (title: string, description: string) => {
    const todoItem = new ToDoItem(1, title, description, false);
    todoServiceStub.todoItems!.push(todoItem);
  }

  beforeEach(() => {


    TestBed.configureTestingModule({
      declarations: [CreateTodoitemComponent],
      providers: [
        { provide: TodoService, useValue: todoServiceStub },
        TodoHttpService
      ],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(CreateTodoitemComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create todo item when form is submitted', () => {
    // Arrange
    component.todoForm.controls['title'].setValue('Buy Milk');
    component.todoForm.controls['description'].setValue('Buy some Milk');

    // Act
    component.onSubmit();

    // Assert
    const req = httpTestingController.expectOne('https://localhost:5001/ToDoItem');
    expect(req.request.method).toEqual('POST');
  })
});
