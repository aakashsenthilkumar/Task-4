const sumnum = (array)=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
 
    }
    return sum;
}
console.log(sumnum(array=[5,71,52,32]));