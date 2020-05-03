// return the length of the longest string in a given sentence

function findLongestWordLength(str) {
   let arr = str.split(' ');
   let returnString = '';
   
   arr.forEach((el) => {
     if(el.length > returnString.length){
       returnString = el;
     }
   })
   
   return returnString.length;
 }
 
 findLongestWordLength("The quick brown fox jumped over the lazy dog");