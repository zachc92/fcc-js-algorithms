// return an array containing the content of two given arrays
// the content of the first array should be spliced into the second array at a given index
// do not alter the given arrays

function frankenSplice(arr1, arr2, n) {
   let tempArr = arr2.slice(0, arr2.length);
 
   for(let i = 0; i < arr1.length; i++) {
     tempArr.splice(n + i, 0, arr1[i])
   }
   
   return tempArr;
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);