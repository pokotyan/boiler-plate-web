import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../saga';
import rootReducer from '../reducers';

const env = process.env.NODE_ENV;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, ...(env !== 'production' ? [logger] : []))
);

sagaMiddleware.run(rootSaga);

// Enable Webpack hot module replacement for reducers
if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
