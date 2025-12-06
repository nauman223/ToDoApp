import { Component, Input, inject } from '@angular/core';
import { Todo } from '../../../core/models/todo.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.scss',
})
export class TodoCard {
  @Input() todo!: Todo;
  private router = inject(Router);

  openDetails() {
    this.router.navigate(['/todos', this.todo.id]);
  }
}
