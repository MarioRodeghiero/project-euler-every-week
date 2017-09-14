/*
* 2520 is the smallest number that can be divided bnum2 each of the numbers from 1 to 10 without any remainder.
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/


(function () {
    function smallestTest(num1, num2) {
    	while (num2 != 0) {
    		var test = num1 % num2;
    		num1 = num2;
    		num2 = test;
    	}
    	
    	return num1;
    }
    
    var smallest = 1;
    for (var i = 1; i <= 20; i++) {
        smallest = (smallest * i) / smallestTest(smallest, i);
    }
    
    console.log('The smallest positive is: ' + smallest);
})();