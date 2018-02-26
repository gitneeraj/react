import { combineReducers } from 'redux';
import { toast } from "../_reducers/toast.reducer";
import { login } from "../_reducers/login.reducer";
import { company } from "../_reducers/company.reducer";

export const rootReducers = combineReducers({
    toast,
    login,
    company
});