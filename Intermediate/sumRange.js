// return the sum of two numbers in a given array, plus the sum of all the numbers between them

function sumAll(arr) {
   let tempArr = [];
   let retNum = 0;
   if(arr[0] < arr[1]) {
     tempArr = arr;
   } else {
     tempArr.push(arr[1]);
     tempArr.push(arr[0]);
   }
 
   for(let i = tempArr[0]; i <= tempArr[1]; i++) {
     retNum = retNum + i;
   }  
   
   return retNum;
 }
 
 sumAll([1,4]);