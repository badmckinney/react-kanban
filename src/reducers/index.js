import { LOAD_CARDS, ADD_CARD, DELETE_CARD } from '../actions';

const cardReducer = (state = {
  cards: []
}, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: action.payload });
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case DELETE_CARD:
      return Object.assign({}, state, { cards: action.payload });
    default:
      return state;
  }
};

export default cardReducer;