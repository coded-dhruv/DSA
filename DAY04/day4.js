//LOOPS

// For                  // Entry Point
// While                // Exit Point
// Do while
// Nested
// ForEach

//Q 17. Accept an integer and Print hello world n times.

// var number = Number(prompt("ENter the number"));
// //
// //
// for (i=1;i<=number;i++){
//     console.log("Hello world");
// }

////////

var num = Number(prompt("Enter the number"));

var isPrime = true;
for(i = 2; num%i == 0; i++){
    var isPrime = false;
    break;
}