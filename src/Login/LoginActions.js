export default class LoginActions {
  static LOGIN_REQUEST = 'LOGIN_REQUEST';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_FAILURE = 'LOGIN_FAILURE';
  static TOGGLE_LOGIN_FAILURE_MODAL = 'TOGGLE_LOGIN_FAILURE_MODAL';

  static loginRequest(email, password) {
    return {
      type: LoginActions.LOGIN_REQUEST,
      email,
      password
    };
  }

  static loginSuccess(user) {
    return {
      type: LoginActions.LOGIN_SUCCESS,
      user
    };
  }

  static loginFailure(error) {
    return {
      type: LoginActions.LOGIN_FAILURE,
      error
    };
  }

  static toggleLoginFailureModal() {
    return {
      type: LoginActions.TOGGLE_LOGIN_FAILURE_MODAL
    };
  }
}
