// function that reverses the provided string

function reverseString(str) {
   let temp = str.split('');
   let arr = [];
   
   temp.forEach((el) => {
     arr.unshift(el);
   })
 
   return arr.join('');
 }
 
 reverseString("hello");