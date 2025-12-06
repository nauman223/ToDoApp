import { createAction, props } from '@ngrx/store';
import { Todo } from '../../core/models/todo.model';

// 🔹 Load Todos
export const loadTodos = createAction('[Todos] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todos] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction('[Todos] Load Todos Failure');

// 🔹 Create Todo
export const createTodo = createAction(
  '[Todos] Create Todo',
  props<{ todo: Partial<Todo> }>()
);

export const createTodoSuccess = createAction(
  '[Todos] Create Todo Success',
  props<{ todo: Todo }>()
);

// 🔹 Update Todo
export const updateTodo = createAction(
  '[Todos] Update Todo',
  props<{ todo: Todo }>()
);

export const updateTodoSuccess = createAction(
  '[Todos] Update Todo Success',
  props<{ todo: Todo }>()
);

// 🔹 Delete Todo
export const deleteTodo = createAction(
  '[Todos] Delete Todo',
  props<{ id: number }>()
);

export const deleteTodoSuccess = createAction(
  '[Todos] Delete Todo Success',
  props<{ id: number }>()
);

// 🔹 Load More Todo
export const loadMoreTodos = createAction('[Todos] Load More Todos');

export const loadMoreTodosSuccess = createAction(
  '[Todos] Load More Todos Success',
  props<{ todos: Todo[] }>()
);
