export const authHeader = () => {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('authenticated'));
    
    if (user && user.api_token) {
        return { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + user.api_token 
        };
    } else {
        return {};
    }
}