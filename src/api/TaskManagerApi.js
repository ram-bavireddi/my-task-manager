import { firebase } from './FirebaseConfig';
import Objects from '../utils/Objects';

export default class TaskManagerApi {
  static PATH_TO_LISTS = '/lists';

  static login(username, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(value => firebase.auth().currentUser)
      .catch(error => error);
  }

  static logout() {
    return firebase
      .auth()
      .signOut()
      .then(() => ({ message: 'success' }))
      .catch(error => error);
  }

  static save(path, obj) {
    return firebase
      .database()
      .ref(path)
      .push(obj)
      .then(
        ref => Objects.update(obj, { key: ref.key }),
        error => ({ message: error.message ? error.message : 'save failed' })
      );
  }

  static getAll(path) {
    return firebase
      .database()
      .ref(path)
      .once('value')
      .then(snapshot => snapshot)
      .catch(error => error);
  }

  static set(path, obj) {
    return firebase
      .database()
      .ref(path)
      .set(obj);
  }

  static remove(path, key) {
    return firebase
      .database()
      .ref(path)
      .child(key)
      .remove();
  }

  static moveCardFromOneListToAnother(cardDnD) {
    TaskManagerApi.remove(
      `${TaskManagerApi.PATH_TO_LISTS}/${cardDnD.fromList}/cards`,
      cardDnD.card.key
    );
    const { key, title } = cardDnD.card;
    TaskManagerApi.set(
      `${TaskManagerApi.PATH_TO_LISTS}/${cardDnD.toList}/cards/${key}`,
      { title }
    );
  }
}
