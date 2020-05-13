// You will be provided with an initial array, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments

function destroyer(arr) {
   let args = [];
 
   for(let i = 1; i < arguments.length; i++) {
     args.push(arguments[i])
   }
 
   args.forEach((el) => {
     for(let j = 0; j < arr.length; j++) {
       if(arr[j] === el) {
         arr.splice(j, j+1)
       }
     }
   })
   
   console.log(arr)
 
   return arr;
 }
 
 destroyer([1, 2, 3, 1, 2, 3], 2, 3); 