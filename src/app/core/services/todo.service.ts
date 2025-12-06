import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteResponse, Todo, TodoListResponse } from '../models/todo.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  getTodos(limit: number, skip: number): Observable<TodoListResponse> {
    return this.http.get<TodoListResponse>(
      `${this.apiUrl}/todos?limit=${limit}&skip=${skip}`
    );
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/todos/${id}`);
  }

  create(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/todos/add`, todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/todos/${todo.id}`, {
      completed: todo.completed,
      todo: todo.todo,
    });
  }

  delete(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${this.apiUrl}/todos/${id}`);
  }
}
