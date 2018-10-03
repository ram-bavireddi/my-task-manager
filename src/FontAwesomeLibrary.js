import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faTimes,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

export default class FontAwesomeLibrary {
  static init() {
    library.add(faPlus, faTimes, faPencilAlt);
  }
}
