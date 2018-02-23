// import { authHeader } from '../_helpers';
import { urlConstants } from '../_constants';

export const userService = {
    login,
    logout,    
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