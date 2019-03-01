import {
  LOAD_CARDS, LOAD_USERS,
  ADD_CARD, ADD_USER,
  EDIT_CARD, DELETE_CARD,
  LOGIN_USER, LOGOUT_USER,
  LOGIN_ERROR, NAME_TAKEN,
  REGISTER_ERROR
} from '../actions';

const cardReducer = (state = {
  cards: [],
  users: [],
  auth: localStorage.getItem('session'),
  error: ''
}, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: action.payload, error: '' });
    case LOAD_USERS:
      return Object.assign({}, state, { users: action.payload });
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    case ADD_USER:
      return Object.assign({}, state, { users: [...state.users, action.payload], error: '' });
    case EDIT_CARD:
      return Object.assign({}, state, { cards: action.payload });
    case DELETE_CARD:
      return Object.assign({}, state, { cards: action.payload });
    case LOGIN_USER:
      if (action.payload.success) {
        localStorage.setItem('session', true);
        return Object.assign({}, state, { auth: localStorage.getItem('session'), error: '' });
      }
      return Object.assign({}, state, { auth: localStorage.getItem('session') });
    case LOGOUT_USER:
      localStorage.removeItem('session');
      return Object.assign({}, state, { auth: localStorage.getItem('session'), error: '' });
    case LOGIN_ERROR:
      return Object.assign({}, state, { error: action.payload });
    case NAME_TAKEN:
      return Object.assign({}, state, { error: action.payload });
    case REGISTER_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export default cardReducer;