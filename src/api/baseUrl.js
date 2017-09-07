export default function getBaseUrl(){
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}// If host is localhost direct to mock API if not use other API
// When you send query parameter in url string ?useMockApi=true -> app switches to mockApi

function getQueryStringParameterByName(name,url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");

    var regex =new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"); // no idea what this does
    var results = regex.exec(url);
    if(!results) return null; 
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));

    // Getting some strings from URL ? 
}