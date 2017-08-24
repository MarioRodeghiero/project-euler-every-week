/*
* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let num = 23279250;
let divide = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function resto(teste){ 
    return teste > 0;
};

// function menorNum(number){
//     let calcula;
//     for(let i=1;i <=20; i++){
//        calcula map((el)=> number % el);
//     }
// }

function menorNum(number) {
    let calcula = divide.map((el)=> number % el);
    if (calcula.find(resto)){
        number++;
        menorNum(number);
    } else{
        return console.log(number);
    }
}

menorNum(num);