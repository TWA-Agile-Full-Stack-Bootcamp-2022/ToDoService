import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

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
});
