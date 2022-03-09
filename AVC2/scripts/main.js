let fizzbuzz = 'Fizzbuzz';
let fizz = 'Fizz';
let buzz = 'Buzz';
let url = 'http://basic-web.dev.avc.web.usf.edu/:id';
let url2 = 'http://basic-web.dev.avc.web.usf.edu/:id2';


let fizzBuzz = function (n) {
    let x = 0;
    let bool1 = false;
    let bool2 = false;
    for (let i = 1; i <= n; i++) {
        bool1 = false;
        bool2 = false;
        let balls1 = i % 3;
        let balls2 = i % 5;

        if (balls1 == 0) {
            bool1 = true;
        }

        if (balls2 == 0) {
            bool2 = true;
        }

        if (bool1 == true && bool2 == true) {
            x = fizzbuzz;
        }
        else if (bool1 == true) {
            x = fizz;
        }
        else if (bool2 == true) {
            x = buzz;
        }
        else {
            x = String(i); 
        }
    }
    return x;
};

let value = 0;

function get(url) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.onload = function () {
            resolve({ status: http.status, data: JSON.parse(http.response) });
        };
        http.open("GET", url);
        http.send();
    });
}

function post(url, data) {
    data = JSON.stringify(data);
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.onload = function () {
            resolve({ status: http.status, data: JSON.parse(http.response) });
        };
        http.open("POST", url2);
        //Make sure that the server knows we're sending it json data.
        http.setRequestHeader("Content-Type", "application/json");
        http.send(data);
    });
}  


window.addEventListener('load', () => {
    const myHeading = document.getElementById('user-name');
    myHeading.textContent = localStorage.getItem('username');
})
const responseheading = document.getElementById('result');

get(url).then(function (response) {

    //Put all code that relies on the data from this request in here.

    if (response.status == 200) {
        const username = response.data.id; //The username that was requested. In this case it is "myUserName".
        const score = response.data.score; //The user's current score.
        responseheading.textContent = username;

    }
    else {
        //User "myUserName" not found.
        //response.data is null
        post(url2, { score: 0 }); //create a new user.
    }
});

/*var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://basic-web.dev.avc.web.usf.edu/')
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    responseheading.textContent = ourData
    console.log('yolo');
};  */

const myHeading2 = document.querySelector('h2');
const button = document.getElementById('button');
button.onclick = function () {
    value++;
    myHeading2.textContent = fizzBuzz(value);
    let userscore = { username: localStorage.getItem('username'), score: value };
      post(url2, userscore).then(function (response) {
    switch (response.status) {
      case 200:
       //User was updated successfully.
        //response.data will be the same as returned by get(), and should contain the updated data.
            console.log(200)
        const score = response.data.score;
        break;
      case 201:
        //A new user was successfully created. Otherwise same as status 200.
        console.log(200)
         score = response.data.score;
        break;
      case 400:
        //Bad request. Most likely your data that you sent (in this case dataToSend) was formatted incorrectly, or you supplied a negative score value.
        //response.data will be: { Error: "error message" }
  console.error(response.data);
        break;
      case 500:
       //Something went wrong on the server, such as the database got deleted somehow. This should never happen.
        //response.data will be the same as status 400.
  console.error(response.data);
        break;
    }
          });     
}




