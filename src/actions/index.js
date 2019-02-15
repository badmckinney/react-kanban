/**
 * Actions
 */
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

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

export const deleteCard = (id) => {
  console.log('action', id);
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