export default function getBaseUrl(){
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/';
}// If host is localhost direct to mock API if not use other API