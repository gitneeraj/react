import { toastConstants } from '../_constants';

const initialState = {
    type: toastConstants.CLEAR,
    message: null
};

export function toast(state = initialState, action) {
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
      return initialState
  }
}