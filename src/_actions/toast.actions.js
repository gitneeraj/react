import { toastConstants } from '../constants';
import { toast } from "react-toastify";

export const toastActions = {
    success,
    error,
    clear
};

function success(message) {
    toast.success(message);
    return { type: toastConstants.SUCCESS, message };
}

function error(message) {
    toast.error(message);
    return { type: toastConstants.ERROR, message };
}

function clear() {
    toast.dismiss();
    return { type: toastConstants.CLEAR };
}