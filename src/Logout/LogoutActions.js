export default class LogoutActions {
  static LOGOUT_REQUEST = 'LOGOUT_REQUEST';
  static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  static LOGOUT_FAILURE = 'LOGOUT_FAILURE';
  static TOGGLE_LOGOUT_FAILURE_MODAL = 'TOGGLE_LOGOUT_FAILURE_MODAL';

  static logoutRequest() {
    return {
      type: LogoutActions.LOGOUT_REQUEST
    };
  }

  static logoutSuccess() {
    return {
      type: LogoutActions.LOGOUT_SUCCESS
    };
  }

  static logoutFailure(error) {
    return {
      type: LogoutActions.LOGOUT_FAILURE,
      error
    };
  }

  static toggleLogoutFailureModal() {
    return {
      type: LogoutActions.TOGGLE_LOGOUT_FAILURE_MODAL
    };
  }
}
