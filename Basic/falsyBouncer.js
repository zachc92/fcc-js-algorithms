// return an array that only contains truthy values in a given array

function bouncer(arr) {
  
   let res = [];
 
   arr.forEach((el) => {
     if(!!el == true) {
       res.push(el);
     }
   })
 
   return res;
 }
 
 bouncer([7, "ate", "", false, 9]);