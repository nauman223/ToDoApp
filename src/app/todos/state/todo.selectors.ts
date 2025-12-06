import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

// All todos
export const selectTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);

// Loading state
export const selectTodosLoading = createSelector(
  selectTodoState,
  (state) => state.loading
);

// Filter convenience selectors
export const selectTodoItems = createSelector(
  selectTodoState,
  (state) => state.todos.filter((t) => !t.completed) // OK
);

export const selectCompletedItems = createSelector(selectTodos, (todos) =>
  todos.filter((t) => t.completed)
);
