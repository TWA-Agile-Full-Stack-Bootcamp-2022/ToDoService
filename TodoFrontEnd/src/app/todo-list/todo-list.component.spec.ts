import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTodoitemComponent } from '../create-todoitem/create-todoitem.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [TodoListComponent, CreateTodoitemComponent],
      imports: [ReactiveFormsModule]
    })
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
