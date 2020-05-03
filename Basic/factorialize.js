// factorialize a given number

function factorialize(num) {
   let uno = 1;
   if(num === 0){
     return 1;
   } else {
     for(let i = 1; i <= num; i ++) {
       uno = i * uno;
     }
   }
   return uno;
 }
 
 factorialize(5); 