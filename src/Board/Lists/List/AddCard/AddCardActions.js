export default class AddCardActions {
  static ADD_CARD_REQUEST = 'ADD_CARD_REQUEST';
  static ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
  static ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';
  static TOGGLE_OPEN_ADD_CARD = 'TOGGLE_OPEN_ADD_CARD';

  static addCardRequest(cardTitle, listKey) {
    return {
      type: AddCardActions.ADD_CARD_REQUEST,
      cardTitle,
      listKey
    };
  }
  static addCardSuccess(listKey, card) {
    return {
      type: AddCardActions.ADD_CARD_SUCCESS,
      card,
      listKey
    };
  }

  static addCardFailure(error) {
    return {
      type: AddCardActions.ADD_CARD_FAILURE,
      error
    };
  }

  static toggleOpenAddCard(openAddCardKey) {
    return {
      type: AddCardActions.TOGGLE_OPEN_ADD_CARD,
      openAddCardKey
    };
  }
}
