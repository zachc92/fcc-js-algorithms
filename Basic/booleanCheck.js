// have a function check if a value is classified as a boolean primitive

function booWho(bool) {
   if(bool === true || typeof(bool) == 'boolean'){
      // type coercion is important here in case the number 1 is provided, as 1 == true will return true
     return true;
   } else {
     return false;
   }
 }
 
booWho(null);

// alternatively, a much simpler solution is also available
// return typeof(bool) == 'boolean'