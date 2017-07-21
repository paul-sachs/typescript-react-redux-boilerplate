import { createAction } from 'redux-act';

export const addTodo = createAction<TodoItemData, {}>('add todo');
export const editTodo = createAction<TodoItemData, {}>('edit todo');
export const deleteTodo = createAction<TodoItemId, {}>('delete todo');
export const completeTodo = createAction<TodoItemId, {}>('complete todo');
export const completeAll = createAction('complete all');
export const clearCompleted = createAction('clear completed');
