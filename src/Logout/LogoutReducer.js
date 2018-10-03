import Objects from '../utils/Objects';
import LogoutActions from '../Logout/LogoutActions';

const initialState = {
  loading: false,
  logoutFailureModalOpen: false,
  error: null
};

export default class LogoutReducer {
  static reducer(state = initialState, action) {
    switch (action.type) {
      case LogoutActions.LOGOUT_REQUEST:
        return LogoutReducer.logoutRequest(state);
      case LogoutActions.LOGOUT_FAILURE:
        return LogoutReducer.logoutFailure(state);
      case LogoutActions.TOGGLE_LOGOUT_FAILURE_MODAL:
        return LogoutReducer.toggleLogoutFailureModal(state);
      default:
        return state;
    }
  }

  static logoutRequest(state) {
    return Objects.update(state, {
      loading: true
    });
  }

  static logoutFailure(state) {
    return Objects.update(state, {
      loading: false,
      logoutFailureModalOpen: true
    });
  }

  static toggleLogoutFailureModal(state) {
    return Objects.update(state, {
      loading: false,
      logoutFailureModalOpen: !state.logoutFailureModalOpen
    });
  }
}
