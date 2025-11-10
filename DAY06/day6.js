//Do- While

// do{
//     console.log("hello");
//     var a = prompt("yes/no").toLowerCase;
// } while(a === yes);

// Guess the number 

// Set a random number between 1 - 100
// Ask user to guess the number
// If usernum > number == too high, try again
// If usernum < number == too low, try again
// If user num == number == Correct!, the number was {number}

// var num = Math.floor((Math.random() * 100 + 1));


// var userNum = Math.floor(Number(prompt("Guess the number between 1 to 100 ")));


// do {
//     if (userNum < 0 || userNum > 100 || userNum == NaN) {
//         var userNum = Math.floor(Number(prompt("Enter a Valid number b/w 1 to 100")));
//     }
//     else if (userNum > num) {
//         var userNum = Math.floor(Number(prompt("Too high, Try Again")));
//     }
//     else if (userNum < num) {
//         var userNum = Math.floor(Number(prompt("Too Low, Try Again")));

//     }
// } while (userNum !== num)

// console.log(`Correct! the number was ${num}`);

// SASTA CALCULATOR

// Ask user for first number
// Ask user for second number
// Ask user for operator like +, -, *, /
// Print the result

// Use do while and switch case.


// How many types of loops are there in JS ??

// Entry Control
// Exit Control


// Nested


// for(i = 0; i<=5; i++){   
//     var a = 1;
//     console.log(a);
//     a++;
// 

/*

******
******
******
******

*/

// for (i = 1; i<=4; i++){
//     for(j=1; j<=6; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// for(i=1; i<=5; i++){
//     for(j=1; j<=i;j++){
//         process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
// }

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  process.stdout.write("\n");
}

