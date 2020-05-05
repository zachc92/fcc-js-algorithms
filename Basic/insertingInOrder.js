// insert a number into an array at the index where it belongs
// the array must be sorted in ascending order

function getIndexToIns(arr, num) {
  
   if(arr.length == 0) {
      return 0;
   }

   const compareNums = (a , b) => {
      return a - b;
   }

   let sortedArr = arr.sort(compareNums);

   for(let i = 0; i < sortedArr.length; i++) {
      if(num > arr[i] && num < arr[i + 1] || arr[i + 1] === undefined) {
         return i + 1;
      } else if(num === arr[i]) {
         return i;
      } else if(num === arr[0] || !arr[0]) {
         return 0;
      } 
   }

}
 
getIndexToIns([40, 60], 50);
  