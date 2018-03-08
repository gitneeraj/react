import { companyConstants } from '../_constants';
import { companyService } from '../_services';
import { toastActions } from './';

export const companyActions = {
    getAll,
    add,
    update,
    view,
    search
};

function getAll(){
    return dispatch => {
        dispatch(request());
        companyService.getAll()
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
                    dispatch(toastActions.error(error.toString()));
                    dispatch(failure(error.toString()));
                }
            );
    }
    function request() { return { type: companyConstants.LIST_REQUEST } }
    function success(data) { return { type: companyConstants.LIST_SUCCESS, data } }
    function failure(error) { return { type: companyConstants.LIST_FAILURE, error } }
}

function add(company){
    return dispatch => {
        dispatch(request());
        companyService.add(company)
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
                    dispatch(toastActions.error(error.toString()));
                    dispatch(failure(error.toString()));
                }
            );
    }
    function request() { return { type: companyConstants.ADD_REQUEST } }
    function success(data) { return { type: companyConstants.ADD_SUCCESS, data } }
    function failure(error) { return { type: companyConstants.ADD_FAILURE, error } }
}

function update(company, id){
    return dispatch => {
        dispatch(request());
        companyService.update(company, id)
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
                    dispatch(toastActions.error(error.toString()));
                    dispatch(failure(error.toString()));
                }
            );
    }
    function request() { return { type: companyConstants.UPDATE_REQUEST } }
    function success(data) { return { type: companyConstants.UPDATE_SUCCESS, data } }
    function failure(error) { return { type: companyConstants.UPDATE_FAILURE, error } }
}

function view(id){
    return dispatch => {
        dispatch(request());
        companyService.view(id)
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
                    dispatch(toastActions.error(error.toString()));
                    dispatch(failure(error.toString()));
                }
            );
    }
    function request() { return { type: companyConstants.VIEW_REQUEST } }
    function success(data) { return { type: companyConstants.VIEW_SUCCESS, data } }
    function failure(error) { return { type: companyConstants.VIEW_FAILURE, error } }
}

function search(keyword){
    return dispatch => {
        dispatch(request());
        companyService.search(keyword)
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
                    dispatch(toastActions.error(error.toString()));
                    dispatch(failure(error.toString()));
                }
            );
    }
    function request() { return { type: companyConstants.SEARCH_REQUEST } }
    function success(data) { return { type: companyConstants.SEARCH_SUCCESS, data } }
    function failure(error) { return { type: companyConstants.SEARCH_FAILURE, error } }
}