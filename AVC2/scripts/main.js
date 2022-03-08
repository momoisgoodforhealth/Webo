let fizzbuzz = 'Fizzbuzz';
let fizz = 'Fizz';
let buzz = 'Buzz';

var fizzBuzz = function (n) {
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
const myHeading = document.querySelector('h1');
myHeading.textContent = fizzBuzz(2);