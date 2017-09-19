/* 

The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

let naturalNumber = 100;
let naturalSquare = 100;
let sumNumber = 0;
let numberSum = 0;
let myArray = [];


function squareSum() {

    for (var i = 0; i <= naturalNumber; i++) {

        sumNumber += i;
        console.log(sumNumber)
    }
    return Math.pow(sumNumber, 2);
}

function sumSquare() {

    for (var i = 0; i <= naturalSquare; i++) {
        
        numberSum =+ i;
        myArray.push(Math.pow(numberSum, 2));
    }

    var total = myArray.reduce(function(a, b) {
        return a + b;
    });
    return total;
}

console.log(squareSum() - sumSquare());

