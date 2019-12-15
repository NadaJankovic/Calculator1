// Build a calculator from the scratch
class Calculator {
    static addNums(a,b){
   return a+b;
   }
       static subtractNums(a,b){
           return a-b;
       }
       static multiplyNums(a,b){
   return a* b;
       }
       static devideNums(a,b){
   try{
           if(a/b===Infinity){
               throw Error("Division by 0 is not possible.")
           } else {
               return a/b;
           }
       }
   catch(error){
        alert(error);
       }
   
       }
   }