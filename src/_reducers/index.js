import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { toast } from "../_reducers/toast.reducer";
import { Form } from "../_reducers/form.reducer";
import { login } from "../_reducers/login.reducer";
import { user } from "../_reducers/user.reducer";
import { company } from "../_reducers/company.reducer";
import { jobSource } from "../_reducers/jobSource.reducer";

export const rootReducers = combineReducers({
    form: formReducer.plugin(Form),
    toast,
    login,
    user,
    company,
    jobSource,
});