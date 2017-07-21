import { createStore, applyMiddleware, Store } from 'redux';
import rootReducer, { RootState } from './reducers';
import { createLogger } from 'redux-logger';

export function configureStore(initialState?: RootState): Store<RootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const logger = createLogger({
      collapsed: true,
      predicate: () =>
        true
  });
  const createStoreWithMiddleware = applyMiddleware(logger)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
