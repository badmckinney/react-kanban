import { LOAD_CARDS, LOAD_USERS, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions';

const cardReducer = (state = {
  cards: [],
  users: []
}, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: action.payload });
    case LOAD_USERS:
      return Object.assign({}, state, { users: action.payload });
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case EDIT_CARD:
      return Object.assign({}, state, { cards: action.payload });
    case DELETE_CARD:
      return Object.assign({}, state, { cards: action.payload });
    default:
      return state;
  }
};

export default cardReducer;