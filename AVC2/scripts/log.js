// This program implements the username/login page

// button link
const submitbutton = document.getElementById('submitbutton');

// function that opens main page
var loadmainpage = function () {
    const inputusername = document.getElementById('input').value;
    const username = inputusername;
    localStorage.setItem("username", username);  // store username locally
    location.href = 'main_program.html'
}
