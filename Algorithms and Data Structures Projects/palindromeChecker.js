// return true if the given string is a palindrome

function palindrome(str) {
   let arr1 = str.split('');
   let arr2 = [];
   let arr3 = [];
   let regex = /[a-zA-Z0-9]/
 
   arr1.forEach((el) => {
     if(regex.test(el) == true) {
       arr2.unshift(el);
       arr3.push(el);
     }
   })
   
   let str1 = arr3.join('').toLowerCase();
   let str2 = arr2.join('').toLowerCase();
 
   return (str1 == str2);
 
 }
 
 palindrome("A man, a plan, a canal. Panama");