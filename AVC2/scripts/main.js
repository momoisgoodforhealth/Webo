let fizzbuzz = 'Fizzbuzz';
let fizz = 'Fizz';
let buzz = 'Buzz';

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

let onclickbutton = function (n) {
    myHeading.textContent = fizzBuzz(n);
}
let value = 5;
const myHeading = document.querySelector('h1');
const myHeading2 = document.querySelector('h2');
const button = document.getElementById('button');
//button.onclick = myHeading2.querySelector('button');
//myHeading.textContent = fizzBuzz(value);