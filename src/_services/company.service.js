import { authHeader } from '../_helpers';
import { urlConstants } from '../_constants';
import { responseService } from './response.service';

export const companyService = {
    getAll,
    add,
    update,
    view
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.COMPANIES_LIST_URL, requestOptions).then(responseService.handle);
}

function add(company) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(company)
    };

    console.log(urlConstants.getBaseurl() + urlConstants.ADD_COMPANY_URL, requestOptions)
    return fetch(urlConstants.getBaseurl() + urlConstants.ADD_COMPANY_URL, requestOptions).then(responseService.handle);
}

function update(company, id) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(company)
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.UPDATE_COMPANY_URL + id, requestOptions).then(responseService.handle);
}

function view(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.GET_COMPANY_URL + id, requestOptions).then(responseService.handle);
}

// function handleResponse(response) {
//     if (!response.ok) { 
//         window.location = "/login";
//         return Promise.reject(response.statusText);
//     }

//     return response.json();
// }