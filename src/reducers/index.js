import { LOAD_CARDS, LOAD_USERS, ADD_CARD, ADD_USER, EDIT_CARD, DELETE_CARD, LOGIN_USER, LOGOUT_USER } from '../actions';

const cardReducer = (state = {
  cards: [],
  users: [],
  auth: localStorage.getItem('session')
}, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: action.payload });
    case LOAD_USERS:
      return Object.assign({}, state, { users: action.payload });
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case ADD_USER:
      return Object.assign({}, state, { users: [...state.users, action.payload] });
    case EDIT_CARD:
      return Object.assign({}, state, { cards: action.payload });
    case DELETE_CARD:
      return Object.assign({}, state, { cards: action.payload });
    case LOGIN_USER:
      if (action.payload.success) {
        localStorage.setItem('session', true);
        return Object.assign({}, state, { auth: localStorage.getItem('session') });
      }
      return Object.assign({}, state, { auth: localStorage.getItem('session') });
    case LOGOUT_USER:
      localStorage.removeItem('session');
      return Object.assign({}, state, { auth: localStorage.getItem('session') });
    default:
      return state;
  }
};

export default cardReducer;