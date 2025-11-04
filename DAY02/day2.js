// console.log(Math.floor(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.round(4.2));
// console.log(Math.trunc(2.9823798));
// console.log(Math.sqrt(9));
// console.log(Math.cbrt(27));
// console.log(Math.abs(-2));
// console.log(Math.max(2, 3));
// console.log(Math.min(2, 3, 1));
// console.log(Math.floor(Math.random()*900 + 100));
// console.log(Math.pow(2, 3))

// C.I =(P*(1  + R/100)^T) - P

var p = Number(prompt("Enter Principle"));
var r = Number(prompt("Enter Rate"));
var t = Number(prompt("Enter Time"));

var a = p* Math.pow(1 + r/100, t);

var CI = a - p;
console.log(CI);

