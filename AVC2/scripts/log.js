const submitbutton = document.getElementById('submitbutton');
let username = 'TEST VALUE';
localStorage.setItem("username", username);


let loadmainpage = function () {
    location.href = 'main_program.html';
}

submitbutton.onclick = function () {
   // let inputusername = document.getElementById('input').value;
   // let username = inputusername;
  //  localStorage.setItem("username", username);
    location.href = 'main_program.html';
}