// return true if the string in the first element of the array contains all of the letters of the string in the second element of the array

function mutation(arr) {
   let second = arr[1].toLowerCase();
   let first = arr[0].toLowerCase();
 
   for(let i = 0; i < arr[1].length; i++)
     if(first.indexOf(second[i]) == -1){
       return false;
     }
 
     return true;
 
 }
 
 mutation(["hello", "hey"]);