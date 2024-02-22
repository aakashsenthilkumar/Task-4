
//Anonymous Function

const removeDuplicates = function (arr) {
    return arr.filter(function (value, index, self) {
        // Keep only the first occurrence of each element
        return self.indexOf(value) === index;
    });
};
console.log(removeDuplicates(arr=[1,2,3,1,5,3,2]))

//IIFE Function

const uniqueArray = (function(arr) {
    return arr.filter((value, index, self) => {
        // Return true if the index of the current value is its first occurrence in the array
        return self.indexOf(value) === index;
    });
})([1, 2, 2, 3, 4, 4, 5, 6, 6]);

console.log(uniqueArray);