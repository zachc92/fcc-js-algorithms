// Compare two arrays and return a new array with any imtems only found in one of the two given arrays

function diffArray(arr1, arr2) {
   var newArr = [];
 
   arr2.forEach((el) => {
     if(arr1.indexOf(el) === -1) {
       newArr.push(el)
     }
   })
 
   arr1.forEach((el) => {
     if(arr2.indexOf(el) === -1) {
       newArr.push(el)
     }
   })
 
   console.log(newArr)
   return newArr;
 }
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);