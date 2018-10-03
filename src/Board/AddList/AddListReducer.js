import Objects from '../../utils/Objects';
import AddListActions from './AddListActions';

const initialState = {
  loading: false,
  list: null,
  error: null,
  openAddList: false,
  listName: ''
};

export default class AddListReducer {
  static reducer(state = initialState, action) {
    switch (action.type) {
      case AddListActions.ADD_LIST_REQUEST:
        return AddListReducer.addListRequest(state);
      case AddListActions.ADD_LIST_SUCCESS:
        return AddListReducer.addListSuccess(state, action);
      case AddListActions.ADD_LIST_FAILURE:
        return AddListReducer.addListFailure(state, action);
      case AddListActions.TOGGLE_OPEN_ADDLIST:
        return AddListReducer.toggleOpenAddList(state);
      case AddListActions.LIST_NAME_CHANGE:
        return AddListReducer.handleListNameChange(state, action);
      default:
        return state;
    }
  }

  static addListRequest(state) {
    return Objects.update(state, {
      loading: true
    });
  }

  static addListSuccess(state, action) {
    return Objects.update(state, {
      loading: false,
      list: action.list,
      error: null,
      openAddList: false,
      listName: ''
    });
  }

  static addListFailure(state, action) {
    return Objects.update(state, {
      loading: false,
      error: action.error
    });
  }

  static toggleOpenAddList(state) {
    return Objects.update(state, {
      openAddList: !state.openAddList
    });
  }

  static handleListNameChange(state, action) {
    return Objects.update(state, {
      listName: action.listName
    });
  }
}
