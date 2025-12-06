import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { Todo } from '../../../core/models/todo.model';
import { TodoService } from '../../../core/services/todo.service';
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.scss',
})
export class TodoDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);
  public router = inject(Router);
  public dialog = inject(MatDialog);

  todo = signal<Todo | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.todoService.getTodoById(id).subscribe({
      next: (todo) => this.todo.set(todo),
      error: () => this.router.navigate(['/todos'])
    });
  }

  edit() {
    if (!this.todo()) return;
    this.router.navigate(['/todos', this.todo()!.id, 'edit']);
  }

  delete() {
    if (!this.todo()) return;

    const dialog = this.dialog.open(ConfirmDialog, {
      width: '350px',
      data: {
        title: 'Delete Todo',
        message: 'Are you sure you want to delete this todo? This action cannot be undone.',
      },
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        // Optional: API delete here
        // this.todoService.delete(this.todo()!.id).subscribe(() => {
        this.router.navigate(['/todos']);
      }
    });
  }
}
