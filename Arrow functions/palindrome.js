const isPalindrome = (str) =>{
    // Remove non-alphanumeric characters and convert to lowercase
    
    // Compare the cleaned string with its reverse
    return str === str.split('').reverse().join('');
};

const getPalindromes = function (strArray) {
    return strArray.filter(isPalindrome);
};
console.log(getPalindromes(strArray=["deed",'mani']))