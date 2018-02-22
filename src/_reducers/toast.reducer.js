import { toastConstants } from '../constants';

export function toast(state = {}, action) {
  switch (action.type) {
    case toastConstants.SUCCESS:
      return {
        type: 'toast-success',
        message: action.message
      };
    case toastConstants.ERROR:
      return {
        type: 'toast-danger',
        message: action.message
      };
    case toastConstants.CLEAR:
      return {};
    default:
      return state
  }
}