/*
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

numSmallest = 2018;

while (true) {

    numSmallest = numSmallest + 1;

    teste(numSmallest);

    if (result == 0) {
        console.log(numSmallest);
        return false;
    }
}

function teste(num) {

    myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    myArray.forEach(function (element) {
        return num % element;
    });
}
