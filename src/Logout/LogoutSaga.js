import { takeLatest, call, put } from 'redux-saga/effects';

import TaskManagerApi from '../api/TaskManagerApi';
import LogoutActions from './LogoutActions';

export default class LogoutSaga {
  static *watcher() {
    yield takeLatest(LogoutActions.LOGOUT_REQUEST, LogoutSaga.doLogout);
  }

  static *doLogout() {
    try {
      const res = yield call(TaskManagerApi.logout);
      if (res && res.message === 'success') {
        yield put(LogoutActions.logoutSuccess());
      } else {
        yield put(
          LogoutActions.logoutFailure({
            code: res.code,
            message: res.message
          })
        );
      }
    } catch (e) {
      yield put(LogoutActions.logoutFailure({ message: e.message }));
    }
  }
}
