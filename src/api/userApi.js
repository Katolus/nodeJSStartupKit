import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
    return get('users');
}

export function deleteUser(id){
    return del(`users/${id}`);
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess,onError);//we are adding baseUrl (localhost:3001/) with url (i.e. users)
}

// Can't call this function delete since reserved word

function del(url){
    const request = new Request(baseUrl + url, {
        method:'DELETE' // Creates a request towards a given URL with a DELETE signature
    });

    return fetch(request).then(onSuccess,onError);
}

function onSuccess(response){
    return response.json();
}

function onError(error){
    console.log(error); // eslint-disable-line no-console
}