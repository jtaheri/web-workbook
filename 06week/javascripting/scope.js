
// function fizzbuzz () {
//   for (var i=0; i<1000; i++){
//     if (i%3 ===0){
//       document.write("Fizz");
//     }
//     else if (i%5===0){
//       document.write("Buzz");
//       }
//     else if (i%5===0 && i%3===0) {
//       document.write("FizzBuzz");
//     }
//     else {
//       document.write (i);
//     }
//   }
// }
//
// function fizzbuzz ()

var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;
             console.log("a: "+a+", b: "+b+", c: "+c);
             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
         })();
     })();
