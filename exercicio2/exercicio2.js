/*
 By considering the terms in the
 Fibonacci sequence whose values do not exceed four million, 
 find the sum of the even-valued terms.
*/

numFirst = 1;
numSecond = 2;
max = 4000000;
sum = 2;
fibonacciArry = [1, 2];

while (numSecond < max) {
    nunTree = numFirst;
    numFirst = numSecond;
    numSecond = numFirst + nunTree;
    fibonacciArry.push(numSecond);
    if (numSecond % 2 == 0) {
      sum = numSecond + sum;
    }
}   

console.log('------------------------------------');
console.log(fibonacciArry);
console.log('------------------------------------');
console.log('Resposta da soma: ',sum);