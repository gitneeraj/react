import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { toast } from "../_reducers/toast.reducer";
import { login } from "../_reducers/login.reducer";
import { company } from "../_reducers/company.reducer";

export const rootReducers = combineReducers({
    form: formReducer,
    toast,
    login,
    company
});