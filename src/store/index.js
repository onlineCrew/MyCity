import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from 'reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewares.push(createFlipperDebugger());
}

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);
export default store;
