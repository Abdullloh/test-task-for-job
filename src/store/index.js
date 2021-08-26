import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mainReducer from './reducers/mainReducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['payload']
}
console.log('store')
const rootReducer = combineReducers({
    payload: mainReducer,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  console.log(store,persistor)
  export { store as default, persistor }