// IF ELSE

// Print Greatest Number

// var a = Number(prompt("Enter first Number"));
// var b = Number(prompt("Enter second Number"));

// if (a>b){
//     console.log(a);
// } if(a<b){
//     console.log(b);
// } if(a == b){
//     console.log("Both are equal");
// }

// Shop Discount
// 0 - 100 = 0%
// 100 - 500 = 20%
// 500 - 1000 = 40%
// more than 1000 = 50%

var total = Number(prompt("Enter total bill"));
if(total <= 100 && total >= 0){
    var finalPrice = total;
    var dc = "-0%";
} if(total>100 && total <= 500){
    var finalPrice = total * 0.8;
    var dc = "-20%"
} if(total > 500 && total <= 1000){
    var finalPrice = total * 0.6;
    var dc = "-40%"
} if(total > 1000){
    var finalPrice = total*0.5;
    var dc = "-50%"
}

var Price = document.getElementById('Price');
var final = document.getElementById('final');
var discount = document.getElementById('discount');

Price.innerHTML = total;
final.innerHTML = finalPrice;
discount.innerHTML = dc;
