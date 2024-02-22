
//Anonymous Function
const isPalindrome = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase
    
    // Compare the cleaned string with its reverse
    return str === str.split('').reverse().join('');
};

const getPalindromes = function (strArray) {
    return strArray.filter(isPalindrome);
};
console.log(getPalindromes(strArray=["deed",'mani']))

//IIFE Function


const palindromes = (function (strArray) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    return strArray.filter((str) => isPalindrome(str));
})(["level", "hello", "madam", "world"]);
console.log(palindromes)