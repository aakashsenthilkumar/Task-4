
//Anonymous Function

const arr = function (array){
    let sum = 0;
    for(let i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(arr(array=[2,5,7,9]));

  //IIFE function

  const arrfun = (function (array1){
 let sum = 0;
    for(let i = 0 ; i< array1.length ; i++){
       sum = sum + array1[i];
     }
     return sum;
  })([3,5,7,9,6])
  console.log(arrfun);
  