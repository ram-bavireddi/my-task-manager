import Objects from '../../../../utils/Objects';
import AddCardActions from '../AddCard/AddCardActions';
import ListActions from '../ListActions';
import CardActions from './Card/CardActions';

const initialState = {
  loading: false,
  cardsMap: {},
  error: null
};

export default class CardsReducer {
  static reducer(state = initialState, action) {
    switch (action.type) {
      case AddCardActions.ADD_CARD_SUCCESS:
        return CardsReducer.addCardSuccess(state, action);
      case ListActions.LIST_DID_MOUNT:
        return CardsReducer.extractCards(state, action);
      case CardActions.CARD_EDIT_SUCCESS:
        return CardsReducer.cardEditSuccess(state, action);
      case CardActions.CARD_DELETE_SUCCESS:
        return CardsReducer.cardDeleteSuccess(state, action);
      case CardActions.CARD_DND_SUCCESS:
        return CardsReducer.cardDnDSuccess(state, action);
      case CardActions.CARD_DND_FAILURE:
        return CardsReducer.cardDnDFailure(state, action);
      default:
        return state;
    }
  }

  static extractCards(state, action) {
    const cardList = [];
    const cards = action.list.cards;
    if (cards) {
      Object.keys(cards).forEach(key => {
        const card = cards[key];
        card['key'] = key;
        cardList.push(card);
      });
    }

    return Objects.update(state, {
      cardsMap: Objects.update(state.cardsMap, { [action.list.key]: cardList }),
      loading: false
    });
  }

  static addCardSuccess(state, action) {
    let cards = [];
    if (state.cardsMap[action.listKey]) {
      cards = [...state.cardsMap[action.listKey]];
    }
    cards.push(action.card);
    return Objects.update(state, {
      cardsMap: Objects.update(state.cardsMap, { [action.listKey]: cards }),
      loading: false
    });
  }

  static cardEditSuccess(state, action) {
    const cardList = [...state.cardsMap[action.listKey]];
    const card = cardList.find(card => card.key === action.card.key);
    card.title = action.card.title;
    return Objects.update(state, {
      cardsMap: Objects.update(state.cardsMap, { [action.listKey]: cardList })
    });
  }

  static cardDeleteSuccess(state, action) {
    const cardList = CardsReducer.deleteCardFromList(
      state,
      action.listKey,
      action.cardKey
    );
    return Objects.update(state, {
      cardsMap: Objects.update(state.cardsMap, { [action.listKey]: cardList })
    });
  }

  static cardDnDSuccess(state, action) {
    const cardDnD = action.cardDnD;
    const fromList = CardsReducer.deleteCardFromList(
      state,
      cardDnD.fromList,
      cardDnD.card.key
    );
    const toList = CardsReducer.addCardToList(
      state,
      cardDnD.toList,
      cardDnD.card
    );
    return Objects.update(state, {
      cardsMap: Objects.update(state.cardsMap, {
        [cardDnD.fromList]: fromList,
        [cardDnD.toList]: toList
      })
    });
  }

  static cardDnDFailure(state, action) {
    return Objects.update(state, {
      error: action.error
    });
  }

  static deleteCardFromList(state, listKey, cardKey) {
    const cardList = [...state.cardsMap[listKey]];
    const index = cardList.findIndex(card => card.key === cardKey);
    cardList.splice(index, 1);
    return cardList;
  }

  static addCardToList(state, listKey, card) {
    const cardList = [...state.cardsMap[listKey]];
    cardList.push(card);
    return cardList;
  }
}
