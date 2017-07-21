import { createReducer } from 'redux-act';
import * as Actions from 'actions/todos';

const initialState: TodoStoreState = [{
  id: 0,
  text: 'Use Redux',
  completed: false
}];

export default createReducer<TodoStoreState>({
  [Actions.addTodo.getType()]: (state, payload) => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      ...payload,
    }, ...state];
  },

  [Actions.deleteTodo.getType()]: (state, payload) => {
    return state.filter(todo => todo.id !== payload);
  },

  [Actions.editTodo.getType()]: (state, payload) => {
    return state.map(todo => {
      return todo.id === payload.id
        ? { ...todo, text: payload.text }
        : todo;
    });
  },

  [Actions.completeTodo.getType()]: (state, payload) => {
    return state.map(todo => {
      return todo.id === payload
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
  },

  [Actions.completeAll.getType()]: (state, payload) => {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => {
      return {
        ...todo,
        completed: !areAllMarked
      };
    });
  },

  [Actions.clearCompleted.getType()]: (state, payload) => {
    return state.filter(todo => todo.completed === false);
  }
}, initialState);
