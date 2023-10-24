import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailComponent } from './todo-detail.component';
import { ActivatedRoute } from '@angular/router';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      providers: [{provide: ActivatedRoute, useValue: {snapshot: {paramMap: {get: () => 1}}}}]
    });
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
