/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

nInicial = 1;
somaMultiplos = 0;
maximo = 1000;

while (nInicial < maximo) {
  if (nInicial % 3 == 0) {
    somaMultiplos = nInicial + somaMultiplos;
  }
  else if (nInicial % 5 == 0) {
    somaMultiplos = nInicial + somaMultiplos;
  }
  nInicial++;
}

console.log('------------------------------------');
console.log(somaMultiplos);
console.log('------------------------------------');
