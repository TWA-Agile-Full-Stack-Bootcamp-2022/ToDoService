import { TestBed } from '@angular/core/testing';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import {routes} from './app-routing.module'
import { Router, RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { By } from '@angular/platform-browser';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes(routes)],
    declarations: [AppComponent, TodoListComponent, TodoDetailComponent]
  }).compileComponents());

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TodoFrontEnd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TodoFrontEnd');
  });

  it('should render TodoListCompnoent when navigate to "/"', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const harness = await RouterTestingHarness.create()
    await harness.navigateByUrl('/')
    fixture.detectChanges()

    const component = fixture.debugElement.queryAll(By.directive(TodoListComponent))

    expect(component.length).toEqual(1)

  })

  it('should render TodoDetailComponent when navigate to "/detail"', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const harness = await RouterTestingHarness.create()
    await harness.navigateByUrl('/detail')
    fixture.detectChanges()

    const component = fixture.debugElement.queryAll(By.directive(TodoDetailComponent))

    expect(component.length).toEqual(1)
  })

});
