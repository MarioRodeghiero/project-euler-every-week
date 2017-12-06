/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

let primo = 2;
let i = 2;

while ( i <= 20) {
    if ( primo % i === 0) {
        console.log(`${primo}`);
        primo ++;
        i++;
    }
    console.log(`${primo}`);
    primo ++;
    i++;
}





// for(let i = 0; i < 14; i++) {
//     if (primo % 2 == 0) {
//         primo++;
//     }
//     if (primo % i == 0) {
//         console.log(`${primo}`);
//         primo++;
//     }