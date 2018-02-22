import { combineReducers } from 'redux';
import { toast } from "../_reducers/toast.reducer";
import { login } from "../_reducers/login.reducer";

export const rootReducers = combineReducers({
    toast,
    login
});