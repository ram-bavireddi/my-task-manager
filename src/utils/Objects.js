export default class Objects {
  static update(object, props) {
    return {
      ...object,
      ...props
    };
  }

  static save(key, value) {
    localStorage.setItem(key, value);
  }

  static get(key) {
    return localStorage.getItem(key);
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}
