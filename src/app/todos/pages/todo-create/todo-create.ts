import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../core/services/todo.service';
import { Router } from '@angular/router';
import { TodoForm } from '../../components/todo-form/todo-form';
import { Todo } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-create',
  imports: [CommonModule, TodoForm],
  templateUrl: './todo-create.html',
  styleUrl: './todo-create.scss',
})
export class TodoCreate {
  private todoService = inject(TodoService);
  private router = inject(Router);

  saveTodo(data: Partial<Todo>) {
    const payload = {
      ...data,
      userId: 1,
    };

    this.todoService.create(payload).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }
}
