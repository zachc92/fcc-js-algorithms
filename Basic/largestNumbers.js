// return an array that includes the largest numbers in each of the provided arrays

function largestOfFour(arr) {
   let largestNums = [];
 
   for(let i = 0; i < arr.length; i++) {
     let largest = arr[i][0];
     for(let j = 0; j < arr[i].length; j++) {
       if(arr[i][j] > largest) {
         largest = arr[i][j];
       }
     }
     largestNums.push(largest);
   }
 
   return largestNums;
 }
 
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);