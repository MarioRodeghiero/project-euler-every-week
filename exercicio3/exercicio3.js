
/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

n = 600851475143;
primo = 3;
var fator;
fatorArray = [];

while ( n > 1) {
    fator = n % primo;
    if (fator == 0) {
       fatorArray.push(primo)        
       n = n / primo;
       primo = primo + 2; 
    }
    else{
        primo = primo + 2;
    } 
}


console.log('------------------------------------');
console.log(fatorArray);
console.log('------------------------------------');