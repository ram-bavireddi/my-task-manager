import { takeLatest, call, put } from 'redux-saga/effects';

import TaskManagerApi from '../api/TaskManagerApi';
import LoginActions from './LoginActions';
import Objects from '../utils/Objects';

export default class LoginSaga {
  static *watcher() {
    yield takeLatest(LoginActions.LOGIN_REQUEST, LoginSaga.doLogin);
  }

  static *doLogin(action) {
    try {
      const res = yield call(
        TaskManagerApi.login,
        action.email,
        action.password
      );
      if (res && res.uid) {
        const user = res;
        Objects.save('user', JSON.stringify(user));
        yield put(LoginActions.loginSuccess(user));
      } else {
        yield put(
          LoginActions.loginFailure({
            code: res.code,
            message: res.message
          })
        );
      }
    } catch (e) {
      yield put(LoginActions.loginFailure({ message: e.message }));
    }
  }
}
