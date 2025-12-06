export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export enum TodoStatus {
  TODO = 'todo',
  COMPLETED = 'completed',
}

export interface TodoListResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export interface DeleteResponse {
  id: number;
  isDeleted: boolean;
  deletedOn: string;
}
