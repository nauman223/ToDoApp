import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDropListGroup, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../../../core/models/todo.model';

import * as TodoActions from '../../state/todo.actions';
import {
  selectTodoItems,
  selectCompletedItems,
  selectTodosLoading,
} from '../../state/todo.selectors';

import { TodoStatusColumn } from '../../components/todo-status-column/todo-status-column';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    CdkDropListGroup,
    TodoStatusColumn,
    MatButtonModule,
    MatProgressSpinner,
  ],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss'],
})
export class TodoList implements OnInit {
  private store = inject(Store);
  private router = inject(Router);

  // State
  todoList: Todo[] = [];
  completedList: Todo[] = [];

  // Typed loading observable
  loading$: Observable<boolean> = this.store.select(selectTodosLoading);

  // ESLint: remove type annotation (boolean inferred)
  firstLoadDone = false;

  ngOnInit() {
    this.store.select(selectTodoItems).subscribe((list) => {
      this.todoList = list ?? [];
    });

    this.store.select(selectCompletedItems).subscribe((list) => {
      this.completedList = list ?? [];
    });

    if (!this.firstLoadDone) {
      this.firstLoadDone = true;
      this.store.dispatch(TodoActions.loadTodos());
    }
  }

  createTodo() {
    this.router.navigate(['/todos/create']);
  }

  onDrop(event: CdkDragDrop<Todo[]>) {
    const item = event.item.data as Todo;

    const updated: Todo = {
      ...item,
      completed: event.container.id === 'completed',
    };

    this.store.dispatch(TodoActions.updateTodo({ todo: updated }));
  }

  isLoadingMore = false;

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const bottom =
      target.scrollHeight - target.scrollTop <= target.clientHeight + 50;

    if (bottom && !this.isLoadingMore) {
      this.isLoadingMore = true;

      this.store.dispatch(TodoActions.loadMoreTodos());

      setTimeout(() => (this.isLoadingMore = false), 1500);
    }
  }
}
