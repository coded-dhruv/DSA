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

var num = Math.floor((Math.random() * 100 + 1));


var userNum = Math.floor(Number(prompt("Guess the number between 1 to 100 ")));


do {
    if (userNum < 0 || userNum > 100 || userNum == NaN) {
        var userNum = Math.floor(Number(prompt("Enter a Valid number b/w 1 to 100")));
    }
    else if (userNum > num) {
        var userNum = Math.floor(Number(prompt("Too high, Try Again")));
    }
    else if (userNum < num) {
        var userNum = Math.floor(Number(prompt("Too Low, Try Again")));

    }
} while (userNum !== num)

console.log(`Correct! the number was ${num}`);

