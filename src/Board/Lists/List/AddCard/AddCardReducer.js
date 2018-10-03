import Objects from '../../../../utils/Objects';
import AddCardActions from './AddCardActions';

const initialState = {
  loading: false,
  card: null,
  error: null
};

export default class AddCardReducer {
  static reducer(state = initialState, action) {
    switch (action.type) {
      case AddCardActions.ADD_CARD_REQUEST:
        return AddCardReducer.addCardRequest(state);
      case AddCardActions.ADD_CARD_SUCCESS:
        return AddCardReducer.addCardSuccess(state, action);
      case AddCardActions.ADD_CARD_FAILURE:
        return AddCardReducer.addCardFailure(state, action);
      case AddCardActions.TOGGLE_OPEN_ADD_CARD:
        return AddCardReducer.toggleOpenAddCard(state, action);
      default:
        return state;
    }
  }

  static addCardRequest(state) {
    return Objects.update(state, {
      loading: true
    });
  }

  static addCardSuccess(state, action) {
    return Objects.update(state, {
      loading: false,
      card: action.card,
      error: null,
      [`${action.listKey}-openAddCard`]: false
    });
  }

  static addCardFailure(state, action) {
    return Objects.update(state, {
      loading: false,
      error: action.error,
      [`${action.listKey}-openAddCard`]: false
    });
  }

  static toggleOpenAddCard(state, action) {
    return Objects.update(state, {
      [action.openAddCardKey]: !state[action.openAddCardKey]
    });
  }
}
