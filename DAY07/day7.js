/*

A
A B
A B C
A B C D
A B C D E

*/

// ASCII CODE


// for(i=0; i<=40000;i++){
//     process.stdout.write(String.fromCharCode(i));
// }

// A = 65

for (let i = 65; i <= 69; i++) {
  for (let j = 65; j <= i; j++) {
    process.stdout.write(String.fromCharCode(j) + ' ');
  }
  console.log(" ");
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5-i; j++) {
    process.stdout.write("* ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("  ");
  }
  process.stdout.write("\n");
}

/*
        *
      * * 
    * * * 
  * * * *
* * * * * 

*/


for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    process.stdout.write("  ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

console.log("");
/*

    *
   * * 
  * * * 
 * * * *
* * * * * 

*/

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    process.stdout.write(" ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

console.log("");

/*

* * * * *
  * * * *
    * * *
      * *
        *

*/

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6-i; j++) {
    process.stdout.write("* ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("  ");
  }
  process.stdout.write("\n");
}

console.log("");

for (let i = 0; i < 5; i++) {
  for (let s = 0; s < i; s++) {
    process.stdout.write("  ");
  }
  for (let j = i; j < 5; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
console.log("");

for (let i = 0; i < 5; i++) {
  for (let s = 0; s < i; s++) {
    process.stdout.write(" ");
  }
  for (let j = i; j < 5; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}