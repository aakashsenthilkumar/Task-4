const findMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        const midIndex1 = length / 2 - 1;
        const midIndex2 = length / 2;
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
    }
};
console.log(findMedian(arr1=[5,6,7],arr2=[2,8,3]))



//IIFE Function
const medianOfSortedArrays = (function (arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        // If the length is even, return the average of the middle two elements
        const mid1 = mergedArray[length / 2 - 1];
        const mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        // If the length is odd, return the middle element
        return mergedArray[Math.floor(length / 2)];
    }
})([1, 3, 5], [2, 4, 6]);

console.log(medianOfSortedArrays);