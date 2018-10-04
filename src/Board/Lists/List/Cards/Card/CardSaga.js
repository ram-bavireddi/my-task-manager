import { takeLatest, put, call } from 'redux-saga/effects';
import CardActions from './CardActions';
import TaskManagerApi from '../../../../../api/TaskManagerApi';

export default class CardSaga {
  static *editCardWatcher() {
    yield takeLatest(CardActions.CARD_EDIT_REQUEST, CardSaga.editCard);
  }

  static *deleteCardWatcher() {
    yield takeLatest(CardActions.CARD_DELETE_REQUEST, CardSaga.deleteCard);
  }

  static *editCard(action) {
    try {
      yield call(
        TaskManagerApi.set,
        `${TaskManagerApi.PATH_TO_LISTS}/${action.listKey}/cards/${
          action.card.key
        }`,
        {
          title: action.card.title
        }
      );
      yield put(CardActions.cardEditSuccess(action.listKey, action.card));
    } catch (e) {
      yield put(CardActions.cardEditFailure({ message: e.message }));
    }
  }

  static *deleteCard(action) {
    try {
      yield call(
        TaskManagerApi.remove,
        `${TaskManagerApi.PATH_TO_LISTS}/${action.listKey}/cards`,
        action.cardKey
      );
      yield put(CardActions.cardDeleteSuccess(action.listKey, action.cardKey));
    } catch (e) {
      yield put(CardActions.cardDeleteFailure({ message: e.message }));
    }
  }
}
