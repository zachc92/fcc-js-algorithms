// repeat a given string for a given number of times

function repeatStringNumTimes(str, num) {
   let string = '';
 
   for(let i = 0; i < num; i++) {
     string = string + str;
   }
   
   return string;
 }
 
 repeatStringNumTimes("abc", 3);