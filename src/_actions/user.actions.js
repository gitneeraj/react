import { userConstants } from '../_constants';
import { userService } from '../_services';
import { toastActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    add,
    update,
    view,
    search
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

function getAll(companyId){
    return dispatch => {
        dispatch(request());
        userService.getAll(companyId)
            .then(
                response => {
                    if(response.status === 'fail'){
                        dispatch(failure(response));
                        dispatch(toastActions.error(response.message));
                    }else{
                        dispatch(success(response));
                    }
                },
                error => {
                    dispatch(toastActions.error(error));
                    dispatch(failure(error));
                }
            );
    }
    function request() { return { type: userConstants.LIST_REQUEST } }
    function success(data) { return { type: userConstants.LIST_SUCCESS, data } }
    function failure(error) { return { type: userConstants.LIST_FAILURE, error } }
}

function add(user){
    return dispatch => {
        dispatch(request());
        userService.add(user)
            .then(
                response => {
                    if(response.status === 'fail'){
                        dispatch(failure(response));
                        dispatch(toastActions.error(response.message));
                    }else{
                        dispatch(success(response));
                        dispatch(getAll());
                    }
                },
                error => {
                    dispatch(toastActions.error(error));
                    dispatch(failure(error));
                }
            );
    }
    function request() { return { type: userConstants.ADD_REQUEST } }
    function success(data) { return { type: userConstants.ADD_SUCCESS, data } }
    function failure(error) { return { type: userConstants.ADD_FAILURE, error } }
}

function update(user, id){
    return dispatch => {
        dispatch(request());
        userService.update(user, id)
            .then(
                response => {
                    if(response.status === 'fail'){
                        dispatch(failure(response));
                        dispatch(toastActions.error(response.message));
                    }else{
                        dispatch(success(response));
                        dispatch(toastActions.success(response.message));
                        dispatch(getAll());
                    }
                },
                error => {
                    dispatch(toastActions.error(error));
                    dispatch(failure(error));
                }
            );
    }
    function request() { return { type: userConstants.UPDATE_REQUEST } }
    function success(data) { return { type: userConstants.UPDATE_SUCCESS, data } }
    function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }
}

function view(id){
    return dispatch => {
        dispatch(request());
        userService.view(id)
            .then(
                response => {
                    if(response.status === 'fail'){
                        dispatch(failure(response));
                        dispatch(toastActions.error(response.message));
                    }else{
                        dispatch(success(response));
                    }
                },
                error => {
                    dispatch(toastActions.error(error));
                    dispatch(failure(error));
                }
            );
    }
    function request() { return { type: userConstants.VIEW_REQUEST } }
    function success(data) { return { type: userConstants.VIEW_SUCCESS, data } }
    function failure(error) { return { type: userConstants.VIEW_FAILURE, error } }
}

function search(keyword){
    return dispatch => {
        dispatch(request());
        userService.search(keyword)
            .then(
                response => {
                    if(response.status === 'fail'){
                        dispatch(failure(response));
                        dispatch(toastActions.error(response.message));
                    }else{
                        dispatch(success(response));
                    }
                },
                error => {
                    dispatch(toastActions.error(error));
                    dispatch(failure(error));
                }
            );
    }
    function request() { return { type: userConstants.SEARCH_REQUEST } }
    function success(data) { return { type: userConstants.SEARCH_SUCCESS, data } }
    function failure(error) { return { type: userConstants.SEARCH_FAILURE, error } }
}