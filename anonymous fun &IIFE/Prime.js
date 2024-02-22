//Anonymous Function
const arr1 = function filterPrimeNumbers(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                // If the number is divisible by any number from 2 to sqrt(number), it's not prime
                return false;
            }
        }
        // If no divisors were found, the number is prime
        return true;
    });

    console.log(numArray);
    
}
console.log(arr1(filterPrimeNumbers=[2,1,3,4,6]))

//IIFE Function
const arr2=(function filterPrimeNumbers(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                // If the number is divisible by any number from 2 to sqrt(number), it's not prime
                return false;
            }
        }
        // If no divisors were found, the number is prime
        return true;
    });

    console.log(numArray);
})([5,7,8,9,11])
console.log(arr2);






