import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo } from '../../core/models/todo.model';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  skip: number;
  limit: number;
  hasMore: boolean;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  skip: 0,
  limit: 10,
  hasMore: true,
};

export const todoReducer = createReducer(
  initialState,

  // 🔹 Load
  on(TodoActions.loadTodos, (state) => ({
    ...state,
    loading: true,
  })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos, // first load replaces old
    skip: todos.length,
    hasMore: todos.length > 0,
    loading: false,
  })),
  on(TodoActions.loadTodosFailure, (state) => ({
    ...state,
    loading: false,
  })),

  // 🔹 Create
  on(TodoActions.createTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),

  // 🔹 Update
  on(TodoActions.updateTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  })),

  // 🔹 Delete
  on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((t) => t.id !== id),
  })),

  // 🔹 More Todo
  on(TodoActions.loadMoreTodos, (state) => ({
    ...state,
    loading: true,
  })),

  // 🔹 More Todo success
  on(TodoActions.loadMoreTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: [...state.todos, ...todos], // ← ⭐ APPEND
    skip: state.skip + todos.length,
    hasMore: todos.length > 0,
    loading: false,
  }))
);
