import { toastConstants } from '../_constants';
// import { toast } from "react-toastify";

export const toastActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: toastConstants.SUCCESS, message };
}

function error(message) {
    return { type: toastConstants.ERROR, message };
}

function clear() {
    return { type: toastConstants.CLEAR };
}