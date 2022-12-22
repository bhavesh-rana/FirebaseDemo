import {NEW_USER} from '../action/type';

const intialState = {
  userData: [],
};

export const dataPassReducer = (state = intialState, action) => {
  //console.log('action=>>>', action.payload);
  switch (action.type) {
    case NEW_USER:
      return;

    default:
      return state;
  }
};
