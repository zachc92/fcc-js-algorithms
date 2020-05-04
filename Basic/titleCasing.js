// take a string and capitalize the first letter of each word
// only the first letter of each word should be capitalized

function titleCase(str) {
   let arr = str.toLowerCase().split(' ');
   
   let res = arr.map(function(el) {
     return el.replace(el.charAt(0), el.charAt(0).toUpperCase())
   })
   
   return(res.join(' '));
 }
 
 titleCase("sHoRt AnD sToUt");