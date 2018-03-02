import { authHeader } from '../_helpers';
import { urlConstants } from '../_constants';

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

    return fetch(urlConstants.getBaseurl() + urlConstants.COMPANIES_LIST_URL, requestOptions).then(handleResponse);
}

function add(company) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        body: JSON.stringify(company)
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.ADD_COMPANY_URL, requestOptions).then(handleResponse);
}

function update(company, id) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(company)
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.UPDATE_COMPANY_URL + id, requestOptions).then(handleResponse);
}

function view(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.GET_COMPANY_URL + id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}