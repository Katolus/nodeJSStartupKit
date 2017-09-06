import './index.css';
// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');
// //debugger; // Wprowadza debugger to kodu, gdzie mozna bedzie miec wgląd do oryginalnego kodu; Zapewnia do sourceMapa zaimplementowana w webpack 'inline-source-map'
// console.log(`I would pay ${courseValue} for this awesome course`); // eslint-disable-line no-console

import {getUsers,deleteUser} from './api/userApi';

// Populate table of users via API call.

getUsers().then(result => {

    let usersBody ="";

    result.forEach(user => {
        usersBody+= `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>    
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        `
    });

    global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');
// We get an array like of elements of class deleteUser

    // Must use array.from to create a real array from a DOM collection
    // getElementsByClassName only returns an "array like" object 

    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target; // grab element 
            event.preventDefault(); // prevent default behaviour of an event
            deleteUser(element.attributes["data-id"].value); // implement deletion function call
            const row = element.parentNode.parentNode; // No idea
            row.parentNode.removeChild(row);
        };
    });

});