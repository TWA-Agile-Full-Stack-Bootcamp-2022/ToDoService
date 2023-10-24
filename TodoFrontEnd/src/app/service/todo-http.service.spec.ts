import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todoItems', () => {
    httpClientSpy.get.and.returnValue(asyncData([{
      "id": 0,
      "title": "Home work",
      "description": "Have to complete home work",
      "isDone": false
    }]));

    service.getAll().subscribe({next: data => {
      expect(data.length).toBe(1);
    }})
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })

  it('should create todoItem', () => {
    httpClientSpy.post.and.returnValue(asyncData({
      "id": 0,
      "title": "Home work",
      "description": "Have to complete home work",
      "isDone": false
    }));

    service.create('Home work', 'Have to complete home work').subscribe({next: data => {
      expect(data.title).toBe('Home work');
    }})
    expect(httpClientSpy.post.calls.count()).toBe(1);
  })
});
