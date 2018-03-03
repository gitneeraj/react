export const responseService = {
    handle
}

function handle(response){
    if (!response.ok) {
        window.location = "/login";
        return Promise.reject(response.statusText);
    }

    return response.json();
}