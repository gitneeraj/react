import { authHeader } from '../_helpers';
import { urlConstants } from '../_constants';
import { responseService } from './response.service';

export const userService = {
    login,
    logout,
    getAll,
    add,
    update,
    view,
    search
};

function login({email, password}) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.LOGIN_URL, requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            // login successful if there's a token in the response
            if (user && user.api_token) {
                // store user details and token in local storage to keep user logged in between page refreshes
                localStorage.setItem('authenticated', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('authenticated');
}

function getAll(companyId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.COMPANIES_USERS_LIST_URL + companyId, requestOptions).then(responseService.handle);
}

function add(user, companyId) {
    user.company_id = companyId;
    delete user.search;
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(user)
    };

    console.log(urlConstants.getBaseurl() + urlConstants.ADD_COMPANY_USERS_URL, requestOptions);
    return fetch(urlConstants.getBaseurl() + urlConstants.ADD_COMPANY_USERS_URL, requestOptions).then(responseService.handle);
}

function update(user, id) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(user)
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.UPDATE_COMPANY_USERS_URL + id, requestOptions).then(responseService.handle);
}

function view(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.GET_COMPANY_USERS_URL + id, requestOptions).then(responseService.handle);
}

function search(keyword, companyId) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(keyword)
    };

    return fetch(urlConstants.getBaseurl() + urlConstants.COMPANIES_USERS_LIST_URL + companyId, requestOptions).then(responseService.handle);
}