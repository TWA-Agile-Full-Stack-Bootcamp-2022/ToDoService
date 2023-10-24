import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { ToDoItem } from '../model/TodoItem';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todoItems', () => {
    expect(service.getAll().length).toBe(2);
  })

  it('should update todoItem', () => {
    service.update(1, true);
    expect(service.getAll()[0].isDone).toBe(true);
  })

  it('should create todoItem', () => {
    service.create('Buy Milk', 'Buy some Milk');
    expect(service.getAll().length).toBe(3);
  })

  it('should get todoItem by id', () => {
    service.getById(1);
    expect(service.getById(1)).toEqual(new ToDoItem(1, 'Buy Milk', "Buy some Milk", false));
  })
});
