import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../../core/services/todo.service';
import * as TodoActions from './todo.actions';
import { catchError, map, mergeMap, switchMap, of, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTodoState } from './todo.selectors';
import { Todo } from '../../core/models/todo.model';

// API RESPONSE TYPE
interface TodoResponse {
  todos: Todo[];
}

// --------------------------------------
// Load Todos
// --------------------------------------
export const loadTodos = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() =>
        todoService.getTodos(30, 0).pipe(
          map((res: TodoResponse | Todo[]) =>
            TodoActions.loadTodosSuccess({
              todos: Array.isArray(res) ? res : res.todos
            })
          ),
          catchError(() => of(TodoActions.loadTodosFailure()))
        )
      )
    );
  },
  { functional: true }
);

// --------------------------------------
// Create Todo
// --------------------------------------
export const createTodo = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(TodoActions.createTodo),
      mergeMap(({ todo }) =>
        todoService.create(todo).pipe(
          map((newTodo: Todo) =>
            TodoActions.createTodoSuccess({ todo: newTodo })
          )
        )
      )
    );
  },
  { functional: true }
);

// --------------------------------------
// Update Todo
// --------------------------------------
export const updateTodo = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(TodoActions.updateTodo),
      mergeMap(({ todo }) =>
        todoService.update(todo).pipe(
          map((updated: Todo) =>
            TodoActions.updateTodoSuccess({ todo: updated })
          )
        )
      )
    );
  },
  { functional: true }
);

// --------------------------------------
// Delete Todo
// --------------------------------------
export const deleteTodo = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap(({ id }) =>
        todoService.delete(id).pipe(
          map(() => TodoActions.deleteTodoSuccess({ id }))
        )
      )
    );
  },
  { functional: true }
);

// --------------------------------------
// Load More Todos
// --------------------------------------
export const loadMoreTodos = createEffect(
  (
    actions$ = inject(Actions),
    todoService = inject(TodoService),
    store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(TodoActions.loadMoreTodos),
      withLatestFrom(store.select(selectTodoState)),
      switchMap(([, state]) =>
        todoService.getTodos(state.limit, state.skip).pipe(
          map((res: TodoResponse) =>
            TodoActions.loadMoreTodosSuccess({ todos: res.todos })
          )
        )
      )
    );
  },
  { functional: true }
);

// --------------------------------------
// EXPORT AS SINGLE OBJECT
// --------------------------------------
export const TODO_EFFECTS = {
  loadTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  loadMoreTodos
};
