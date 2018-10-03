import AddListActions from '../AddList/AddListActions';
import Objects from '../../utils/Objects';
import ListsActions from './ListsActions';

const initialState = {
  loading: false,
  lists: [],
  error: null
};

export default class ListsReducer {
  static reducer(state = initialState, action) {
    switch (action.type) {
      case ListsActions.LISTS_FETCH_REQUEST:
        return ListsReducer.listsFetchRequest(state);
      case ListsActions.LISTS_FETCH_SUCCESS:
        return ListsReducer.listsFetchSuccess(state, action);
      case ListsActions.LISTS_FETCH_FAILURE:
        return ListsReducer.listsFetchFailure(state, action);
      case AddListActions.ADD_LIST_SUCCESS:
        return ListsReducer.addListSuccess(state, action);
      default:
        return state;
    }
  }

  static listsFetchRequest(state) {
    return Objects.update(state, {
      loading: true
    });
  }

  static listsFetchSuccess(state, action) {
    return Objects.update(state, {
      lists: action.lists,
      loading: false
    });
  }

  static listsFetchFailure(state, action) {
    return Objects.update(state, {
      loading: false,
      error: action.error
    });
  }

  static addListSuccess(state, action) {
    const lists = [...state.lists];
    lists.push(action.list);
    return Objects.update(state, {
      lists,
      loading: false
    });
  }
}
