
// anonymous function
const arr = function(array){

    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
 
    }
    
}

console.log(arr(array=[10,13,14,71]));


//IIFE function

const arr1 = (function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,85,91])
console.log(arr1);