const arr1 = (numArray)=> {
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
