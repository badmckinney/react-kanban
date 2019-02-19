/**
 * Actions
 */
export const LOAD_CARDS = 'LOAD_CARDS';
export const LOAD_USERS = 'LOAD_USERS';
export const ADD_CARD = 'ADD_CARD';
export const ADD_USER = 'ADD_USER';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

/**
 * Action Creators
 */
export const loadCards = () => {
  return (dispatch) => {
    return fetch('/cards')
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        return dispatch({
          type: LOAD_CARDS,
          payload: cards
        });
      });
  }
}

export const loadUsers = () => {
  return (dispatch) => {
    return fetch('/cards/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return dispatch({
          type: LOAD_USERS,
          payload: users
        });
      });
  }
}

export const addCard = (card) => {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: ADD_CARD,
          payload: body
        });
      });
  }
};

export const addUser = (user) => {
  return (dispatch) => {
    return fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('adduser response', response)
        return response.json();
      })
      .then((body) => {
        return dispatch({
          type: ADD_USER,
          payload: body
        })
      });
  }
};

export const deleteCard = (id) => {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        return dispatch({
          type: DELETE_CARD,
          payload: cards
        });
      });
  }
};

export const editCard = (card) => {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'PUT',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        return dispatch({
          type: EDIT_CARD,
          payload: cards
        });
      });
  }
};

export const loginUser = (user) => {
  return (dispatch) => {
    return fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((success) => {
        return dispatch({
          type: LOGIN_USER,
          payload: success
        });
      });
  }
};

export const logoutUser = () => {
  return (dispatch) => {
    return fetch('/auth/logout')
      .then((response) => {
        return response.json();
      })
      .then((success) => {
        return dispatch({
          type: LOGOUT_USER,
          payload: success
        });
      });
  }
};