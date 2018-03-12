import { jobSourceConstants } from '../_constants';
import { jobSourceService } from '../_services';
import { toastActions } from './';

export const jobSourceActions = {
    getAll,
    add,
    update,
    view,
    search
};

function getAll(){
    return dispatch => {
        dispatch(request());
        jobSourceService.getAll()
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
    function request() { return { type: jobSourceConstants.LIST_REQUEST } }
    function success(data) { return { type: jobSourceConstants.LIST_SUCCESS, data } }
    function failure(error) { return { type: jobSourceConstants.LIST_FAILURE, error } }
}

function add(jobSource){
    return dispatch => {
        dispatch(request());
        jobSourceService.add(jobSource)
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
    function request() { return { type: jobSourceConstants.ADD_REQUEST } }
    function success(data) { return { type: jobSourceConstants.ADD_SUCCESS, data } }
    function failure(error) { return { type: jobSourceConstants.ADD_FAILURE, error } }
}

function update(jobSource, id){
    return dispatch => {
        dispatch(request());
        jobSourceService.update(jobSource, id)
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
    function request() { return { type: jobSourceConstants.UPDATE_REQUEST } }
    function success(data) { return { type: jobSourceConstants.UPDATE_SUCCESS, data } }
    function failure(error) { return { type: jobSourceConstants.UPDATE_FAILURE, error } }
}

function view(id){
    return dispatch => {
        dispatch(request());
        jobSourceService.view(id)
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
    function request() { return { type: jobSourceConstants.VIEW_REQUEST } }
    function success(data) { return { type: jobSourceConstants.VIEW_SUCCESS, data } }
    function failure(error) { return { type: jobSourceConstants.VIEW_FAILURE, error } }
}

function search(keyword){
    return dispatch => {
        dispatch(request());
        jobSourceService.search(keyword)
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
    function request() { return { type: jobSourceConstants.SEARCH_REQUEST } }
    function success(data) { return { type: jobSourceConstants.SEARCH_SUCCESS, data } }
    function failure(error) { return { type: jobSourceConstants.SEARCH_FAILURE, error } }
}