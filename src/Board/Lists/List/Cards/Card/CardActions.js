export default class CardActions {
  static CARD_EDIT_REQUEST = 'CARD_EDIT_REQUEST';
  static CARD_EDIT_SUCCESS = 'CARD_EDIT_SUCCESS';
  static CARD_EDIT_FAILURE = 'CARD_EDIT_FAILURE';
  static CARD_DELETE_REQUEST = 'CARD_DELETE_REQUEST';
  static CARD_DELETE_SUCCESS = 'CARD_DELETE_SUCCESS';
  static CARD_DELETE_FAILURE = 'CARD_DELETE_FAILURE';
  static CARD_DND_REQUEST = 'CARD_DND_REQUEST';
  static CARD_DND_SUCCESS = 'CARD_DND_SUCCESS';
  static CARD_DND_FAILURE = 'CARD_DND_FAILURE';

  static cardEditRequest(listKey, card) {
    return {
      type: CardActions.CARD_EDIT_REQUEST,
      listKey,
      card
    };
  }

  static cardEditSuccess(listKey, card) {
    return {
      type: CardActions.CARD_EDIT_SUCCESS,
      listKey,
      card
    };
  }

  static cardEditFailure(error) {
    return {
      type: CardActions.CARD_EDIT_FAILURE,
      error
    };
  }

  static cardDeleteRequest(listKey, cardKey) {
    return {
      type: CardActions.CARD_DELETE_REQUEST,
      listKey,
      cardKey
    };
  }

  static cardDeleteSuccess(listKey, cardKey) {
    return {
      type: CardActions.CARD_DELETE_SUCCESS,
      listKey,
      cardKey
    };
  }

  static cardDeleteFailure(error) {
    return {
      type: CardActions.CARD_DELETE_FAILURE,
      error
    };
  }

  static cardDnDRequest(cardDnD) {
    return {
      type: CardActions.CARD_DND_REQUEST,
      cardDnD
    };
  }

  static cardDnDSuccess(cardDnD) {
    return {
      type: CardActions.CARD_DND_SUCCESS,
      cardDnD
    };
  }

  static cardDnDFailure(error) {
    return {
      type: CardActions.CARD_DND_FAILURE,
      error
    };
  }
}
