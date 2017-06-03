import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

const getNewStore = () => {
  const store = applyMiddleware(thunk, promise, createLogger());
  return createStore(mainReducer, store);
};

export default getNewStore;
