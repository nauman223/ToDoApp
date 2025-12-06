import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../core/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../core/models/todo.model';
import { TodoForm } from '../../components/todo-form/todo-form';

@Component({
  selector: 'app-todo-edit',
  imports: [CommonModule, TodoForm],
  templateUrl: './todo-edit.html',
  styleUrl: './todo-edit.scss',
})
export class TodoEdit implements OnInit {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  todo = signal<Todo | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.todoService.getTodoById(id).subscribe((res) => {
      this.todo.set(res);
    });
  }

  updateTodo(data: Partial<Todo>) {
    const updated = { ...this.todo()!, ...data };

    this.todoService.update(updated).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }
}
