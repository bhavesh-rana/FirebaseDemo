import {combineReducers} from 'redux';
import {dataPassReducer} from '../reducer/reducer';

export const addReducer = combineReducers({
  user: dataPassReducer,
});
