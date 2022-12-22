import {NEW_USER} from './type';

export const Onnewuser = request => async dispatch => {
  dispatch({
    type: NEW_USER,
    payload: request,
  });
};
