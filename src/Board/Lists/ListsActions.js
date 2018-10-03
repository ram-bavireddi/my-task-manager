export default class ListsActions {
  static LISTS_FETCH_REQUEST = 'LISTS_FETCH_REQUEST';
  static LISTS_FETCH_SUCCESS = 'LISTS_FETCH_SUCCESS';
  static LISTS_FETCH_FAILURE = 'LISTS_FETCH_FAILURE';

  static listsFetchRequest() {
    return {
      type: ListsActions.LISTS_FETCH_REQUEST
    };
  }

  static listsFetchSuccess(lists) {
    return {
      type: ListsActions.LISTS_FETCH_SUCCESS,
      lists
    };
  }

  static listsFetchFailure(error) {
    return {
      type: ListsActions.LISTS_FETCH_FAILURE,
      error
    };
  }
}
