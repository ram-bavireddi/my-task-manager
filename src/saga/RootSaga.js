import { fork, all } from 'redux-saga/effects';

import LoginSaga from '../Login/LoginSaga';
import LogoutSaga from '../Logout/LogoutSaga';
import AddListSaga from '../Board/AddList/AddListSaga';
import ListsSaga from '../Board/Lists/ListsSaga';
import AddCardSaga from '../Board/Lists/List/AddCard/AddCardSaga';
import CardSaga from '../Board/Lists/List/Cards/Card/CardSaga';

export default class RootSaga {
  static *rootSaga() {
    yield all([
      fork(LoginSaga.watcher),
      fork(LogoutSaga.watcher),
      fork(AddListSaga.watcher),
      fork(ListsSaga.watcher),
      fork(AddCardSaga.watcher),
      fork(CardSaga.editCardWatcher),
      fork(CardSaga.deleteCardWatcher)
    ]);
  }
}
