import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoitemComponent } from './create-todoitem.component';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from '../model/TodoItem';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateTodoitemComponent', () => {
  let component: CreateTodoitemComponent;
  let fixture: ComponentFixture<CreateTodoitemComponent>;

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
      providers: [{provide: TodoService, useValue: todoServiceStub}],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(CreateTodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create todo item when form is submitted', () => {
    // Arrange
    component.todoForm.controls['title'].setValue('Buy Milk');
    component.todoForm.controls['description'].setValue('Buy some Milk');

    // Act
    component.onSubmit();
    const todoService = fixture.debugElement.injector.get(TodoService);

    // Assert
    expect(todoService.todoItems.length).toBe(1);
    expect(todoService.todoItems[0]).toEqual(new ToDoItem(1, 'Buy Milk', 'Buy some Milk', false));
  })
});
