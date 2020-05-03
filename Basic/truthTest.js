// function that accepts an array and then returns the first element in that array that passes a provided truth test

function findElement(arr, func) {
   for(let i = 0; i < arr.length; i++) {
     if(func(arr[i])){
       return arr[i];
     }
   }
 }
 
 findElement([1, 2, 3, 8], num => num % 2 === 0);