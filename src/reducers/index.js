import { LOAD_CARDS } from '../actions';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return action.payload;
    default:
      return state;
  }
};

export default cardReducer;