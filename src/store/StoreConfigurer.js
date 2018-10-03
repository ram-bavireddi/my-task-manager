import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import LoginReducer from '../Login/LoginReducer';
import LogoutReducer from '../Logout/LogoutReducer';
import RootSaga from '../saga/RootSaga';
import ListsReducer from '../Board/Lists/ListsReducer';
import AddListReducer from '../Board/AddList/AddListReducer';
import AddCardReducer from '../Board/Lists/List/AddCard/AddCardReducer';
import CardsReducer from '../Board/Lists/List/Cards/CardsReducer';
import CardReducer from '../Board/Lists/List/Cards/Card/CardReducer';

export default class StoreConfigurer {
  static configure() {
    const sagaMiddleware = createSagaMiddleWare();
    const reducer = combineReducers({
      login: LoginReducer.reducer,
      logout: LogoutReducer.reducer,
      lists: ListsReducer.reducer,
      newList: AddListReducer.reducer,
      cards: CardsReducer.reducer,
      newCard: AddCardReducer.reducer,
      editCard: CardReducer.reducer
    });
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(RootSaga.rootSaga);
    return store;
  }
}
