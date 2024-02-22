// //Anonymous Function:
const string =   function (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(string(str="mY nAme Aakash"));



  //IIFE function:

   const result =(function (str1) {
     str1 = str1.toLowerCase().split(' ');
    for (let i = 0; i < str1.length; i++) {
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
    } 
    return str1.join(' ');
  })("mY nAme gUvi");

  console.log(result);
   







   