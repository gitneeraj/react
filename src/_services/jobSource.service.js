import { authHeader } from '../_helpers';
import { urlConstants } from '../_constants';
import { responseService } from './';

export const jobSourceService = {
    getAll,
    add,
    update,
    view,
    search
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.JOB_SOURCE_LIST_URL, requestOptions).then(responseService.handle);
}

function add(jobSource) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(jobSource)
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.ADD_JOB_SOURCE_URL, requestOptions).then(responseService.handle);
}

function update(jobSource, id) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(jobSource)
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.UPDATE_JOB_SOURCE_URL + id, requestOptions).then(responseService.handle);
}

function view(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.GET_JOB_SOURCE_URL + id, requestOptions).then(responseService.handle);
}

function search(filters) {
    let params = '';
    if(filters.company && filters.company !== 0) params = '/' + filters.company;

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(filters)
    };
    
    return fetch(urlConstants.getBaseurl() + urlConstants.JOB_SOURCE_LIST_URL + params, requestOptions).then(responseService.handle);
}
