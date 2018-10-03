export default class AddListActions {
  static ADD_LIST_REQUEST = 'ADD_LIST_REQUEST';
  static ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
  static ADD_LIST_FAILURE = 'ADD_LIST_FAILURE';
  static TOGGLE_OPEN_ADDLIST = 'TOGGLE_OPEN_ADDLIST';
  static LIST_NAME_CHANGE = 'LIST_NAME_CHANGE';

  static addListRequest(listName) {
    return {
      type: AddListActions.ADD_LIST_REQUEST,
      listName
    };
  }
  static addListSuccess(list) {
    return {
      type: AddListActions.ADD_LIST_SUCCESS,
      list
    };
  }

  static addListFailure(error) {
    return {
      type: AddListActions.ADD_LIST_FAILURE,
      error
    };
  }

  static toggleOpenAddList() {
    return {
      type: AddListActions.TOGGLE_OPEN_ADDLIST
    };
  }

  static handleListNameChange(listName) {
    return {
      type: AddListActions.LIST_NAME_CHANGE,
      listName
    };
  }
}
