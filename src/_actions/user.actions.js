import { userConstants } from '../_constants';
import { userService } from '../_services';
import { toastActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
};

function login(data) {
    return dispatch => {
        dispatch(request());
        userService.login(data)
            .then(
                response => {                     
                    if(response.status === 'fail'){
                        dispatch(failure(response));
                        dispatch(toastActions.error(response.message));
                    }else{
                        dispatch(success(response));
                        history.push('/');
                        dispatch(toastActions.success(userConstants.LOGIN_SUCCESS_MESSAGE));
                    }                    
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: userConstants.LOGIN_REQUEST } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        userService.logout();
        dispatch(toastActions.success(userConstants.LOGOUT_SUCCESS_MESSAGE));
        return { type: userConstants.LOGOUT };
    };
}