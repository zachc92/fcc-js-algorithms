// Write a function that splits an array into groups the length of size and returns them as a two-dimensional array

function chunkArrayInGroups(arr, size) {
   let retArr = [];
 
 
   for(let i = 0; i < arr.length; i+= size) {
         retArr.push(arr.slice(i, i + size));
   }
   
   console.log(retArr)
   return retArr;
 }
 
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 2); 