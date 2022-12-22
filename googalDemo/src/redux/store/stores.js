import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {addReducer} from '.';

export const stores = createStore(addReducer, {}, applyMiddleware(thunk));
