
//Anonymous Function

const rotateArray = function (arr, k) {
    for (let i = 0; i < k; i++) {
        // Remove the last element and add it to the beginning of the array
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
};
console.log(rotate)

//IIFE Function
const rotatedArray = (function(arr, k) {
   
    k = k % arr.length;

    const rotatedPart = arr.slice(0, arr.length - k);
    const remainingPart = arr.slice(arr.length - k);
    return [...remainingPart, ...rotatedPart];
})([1, 2, 3, 4, 5], 2);