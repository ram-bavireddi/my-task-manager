import { takeLatest, put, call } from 'redux-saga/effects';
import AddListActions from './AddListActions';
import TaskManagerApi from '../../api/TaskManagerApi';

export default class AddListSaga {
  static *watcher() {
    yield takeLatest(AddListActions.ADD_LIST_REQUEST, AddListSaga.addList);
  }

  static *addList(action) {
    try {
      const list = yield call(TaskManagerApi.save, '/lists', {
        name: action.listName
      });
      yield put(AddListActions.addListSuccess(list));
    } catch (e) {
      yield put(AddListActions.addListFailure({ message: e.message }));
    }
  }
}
