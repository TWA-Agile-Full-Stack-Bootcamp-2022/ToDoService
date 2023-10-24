import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from '../model/TodoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get<ToDoItem[]>('https://localhost:5001/ToDoItem');
  }

  public create(title: string, description: string) {
    const todoItem = new ToDoItem(0, title, description, false);
    return this.http.post<ToDoItem>('https://localhost:5001/ToDoItem', todoItem);
  }

  public update(item: ToDoItem) {
    return this.http.put<ToDoItem>(`https://localhost:5001/ToDoItem`, item);
  }

  public getById(id: number) {
    return this.http.get<ToDoItem>(`https://localhost:5001/ToDoItem/${id}`);
  }

  public deleteById(id: number) {
    return this.http.delete(`https://localhost:5001/ToDoItem?id=${id}`);
  }

}
