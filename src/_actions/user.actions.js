import { userConstants } from '../constants';
import { userService } from '../_services';
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
                    }else{
                        dispatch(success(response));
                        history.push('/dashboard');
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
    userService.logout();
    return { type: userConstants.LOGOUT };
}