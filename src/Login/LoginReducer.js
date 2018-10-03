import Objects from '../utils/Objects';
import LoginActions from './LoginActions';
import LogoutActions from '../Logout/LogoutActions';

const initialState = {
  loading: false,
  user: JSON.parse(Objects.get('user')),
  loginSuccess: false,
  error: null,
  loginFailureModalOpen: false
};

export default class LoginReducer {
  static reducer(state = initialState, action) {
    switch (action.type) {
      case LoginActions.LOGIN_REQUEST:
        return LoginReducer.loginRequest(state);
      case LoginActions.LOGIN_SUCCESS:
        return LoginReducer.loginSuccess(state, action);
      case LoginActions.LOGIN_FAILURE:
        return LoginReducer.loginFailure(state, action);
      case LoginActions.TOGGLE_LOGIN_FAILURE_MODAL:
        return LoginReducer.toggleLoginFailureModal(state);
      case LogoutActions.LOGOUT_SUCCESS:
        return LoginReducer.logoutSuccess(state);
      default:
        return state;
    }
  }

  static loginRequest(state) {
    return Objects.update(state, {
      loading: true
    });
  }

  static loginSuccess(state, action) {
    return Objects.update(state, {
      loading: false,
      user: action.user,
      loginSuccess: true,
      error: null,
      loginFailureModalOpen: false
    });
  }

  static loginFailure(state, action) {
    return Objects.update(state, {
      loading: false,
      error: action.error,
      loginFailureModalOpen: true
    });
  }

  static toggleLoginFailureModal(state) {
    return Objects.update(state, {
      loading: false,
      loginFailureModalOpen: !state.loginFailureModalOpen
    });
  }

  static logoutSuccess(state) {
    Objects.remove('user');
    return Objects.update(state, {
      user: null
    });
  }
}
