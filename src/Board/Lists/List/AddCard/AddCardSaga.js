import { takeLatest, put, call } from 'redux-saga/effects';

import AddCardActions from './AddCardActions';
import TaskManagerApi from '../../../../api/TaskManagerApi';

export default class AddCardSaga {
  static *watcher() {
    yield takeLatest(AddCardActions.ADD_CARD_REQUEST, AddCardSaga.addCard);
  }

  static *addCard(action) {
    try {
      const card = yield call(
        TaskManagerApi.save,
        `/lists/${action.listKey}/cards`,
        {
          title: action.cardTitle
        }
      );
      yield put(AddCardActions.addCardSuccess(action.listKey, card));
    } catch (e) {
      yield put(AddCardActions.addCardFailure({ message: e.message }));
    }
  }
}
