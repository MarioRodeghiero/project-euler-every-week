/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

menorDigito = 999;
maiorDigito = 999;
valido = true;
var nstr;

while (valido == true) {
    calcula = menorDigito * maiorDigito;
    nstr = calcula.toString();
    reverseNstr = nstr.split('').reverse().join('');
    if (nstr.localeCompare(reverseNstr) == 0 ) {
        valido = false;
        console.log('------------------------------------');
        console.log(reverseNstr);
        console.log('------------------------------------');
    }
    if (menorDigito == 100) {
        menorDigito = 1000;
        maiorDigito = maiorDigito - 1;
        console.log('------------------------------------');
        console.log(maiorDigito);
        console.log('------------------------------------');
    }
    menorDigito = menorDigito - 1;

}