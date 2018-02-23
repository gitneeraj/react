import { toastConstants } from '../_constants';

export function toast(state = {}, action) {
  switch (action.type) {
    case toastConstants.SUCCESS:
      return {
        type: toastConstants.SUCCESS,
        message: action.message
      };
    case toastConstants.ERROR:
      return {
        type: toastConstants.ERROR,
        message: action.message
      };
    case toastConstants.CLEAR:
      return {};
    default:
      return state
  }
}