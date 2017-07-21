import { createAction } from 'redux-act';

export const home = createAction('home route');
export const page = createAction('route to specific page');

export default {
  [home.getType()]: '/',
  [page.getType()]: '/pages/:id'
}