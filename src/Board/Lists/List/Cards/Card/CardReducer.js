import CardActions from './CardActions';
import Objects from '../../../../../utils/Objects';

const initialState = {
  cardEditLoading: false,
  cardDeleteLoading: false,
  error: null,
  card: null
};
export default class CardReducer {
  static reducer(state = initialState, action) {
    switch (action.type) {
      case CardActions.CARD_EDIT_REQUEST:
        return CardReducer.cardEditRequest(state, action);
      case CardActions.CARD_EDIT_SUCCESS:
        return CardReducer.cardEditSuccess(state, action);
      case CardActions.CARD_EDIT_FAILURE:
        return CardReducer.cardEditFailure(state, action);
      case CardActions.CARD_DELETE_REQUEST:
        return CardReducer.cardDeleteReuest(state);
      case CardActions.CARD_DELETE_SUCCESS:
        return CardReducer.cardDeleteSuccess(state);
      case CardActions.CARD_DELETE_FAILURE:
        return CardReducer.cardDeleteFailure(state, action);
      default:
        return state;
    }
  }

  static cardEditRequest(state, action) {
    return Objects.update(state, {
      cardEditLoading: true,
      card: action.card
    });
  }

  static cardEditSuccess(state, action) {
    return Objects.update(state, {
      cardEditLoading: false,
      card: action.card
    });
  }

  static cardEditFailure(state, action) {
    return Objects.update(state, {
      cardEditLoading: false,
      error: action.error
    });
  }

  static cardDeleteReuest(state) {
    return Objects.update(state, {
      cardDeleteLoading: true,
      card: null
    });
  }

  static cardDeleteSuccess(state) {
    return Objects.update(state, {
      cardDeleteLoading: false,
      card: null
    });
  }

  static cardDeleteFailure(state, action) {
    return Objects.update(state, {
      cardDeleteLoading: false,
      error: action.error
    });
  }
}
