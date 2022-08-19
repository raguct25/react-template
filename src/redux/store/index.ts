import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'react-template',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);
const store = createStore(persistedReducer, middleware);
// const store = createStore(rootReducer, middleware); if didn't use persist you can use this store function expression

const persistor = persistStore(store);

export { store, persistor };
