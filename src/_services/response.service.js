export const responseService = {
    handle
}

function handle(response){
    if (!response.ok) {
        if(response.status === 401) window.location = "/login";
        
        return Promise.reject(response.statusText);
    }

    return response.json();
}