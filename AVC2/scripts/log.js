const submitbutton = document.getElementById('submitbutton');

var loadmainpage = function () {
    const inputusername = document.getElementById('input').value;
    const username = inputusername;
    localStorage.setItem("username", username);
    location.href = 'main_program.html'
}

//submitbutton.onclick = function () {
   // let inputusername = document.getElementById('input').value;
   // let username = inputusername;
  //  localStorage.setItem("username", username);
   // location.href = 'main_program.html';
//}