import { takeLatest, put, call } from 'redux-saga/effects';
import ListsActions from './ListsActions';
import TaskManagerApi from '../../api/TaskManagerApi';

export default class ListsSaga {
  static *watcher() {
    yield takeLatest(ListsActions.LISTS_FETCH_REQUEST, ListsSaga.fetchLists);
  }

  static *fetchLists() {
    try {
      const listsSnapshot = yield call(
        TaskManagerApi.getAll,
        TaskManagerApi.PATH_TO_LISTS
      );
      const lists = yield call(ListsSaga.getLists, listsSnapshot);
      yield put(ListsActions.listsFetchSuccess(lists));
    } catch (e) {
      yield put(ListsActions.listsFetchFailure({ message: e.message }));
    }
  }

  static getLists(listsSnapshot) {
    const lists = [];
    listsSnapshot.forEach(child => {
      const item = child.val();
      item['key'] = child.key;
      lists.push(item);
    });
    return lists;
  }
}
