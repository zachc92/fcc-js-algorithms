// confirm that a string ends with a given character without using the endsWith method

function confirmEnding(str, target) {
   let targetLength = target.length * -1;
   let ending = str.slice(targetLength)
 
   if(ending === target) {
     return true;
   } else {
     return false;
   }
 
 }
 
 confirmEnding("Bastian", "n");