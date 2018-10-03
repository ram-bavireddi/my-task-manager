export default class ListActions {
  static LIST_DID_MOUNT = 'LIST_DID_MOUNT';

  static listDidMount(list) {
    return {
      type: ListActions.LIST_DID_MOUNT,
      list
    };
  }
}
