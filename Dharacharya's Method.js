var data = userInput[0].split(" ");
var a=(data[0]);
var b=(data[1]);
var c=(data[2]);

let dd = b * b - 4 * a * c;

var root1 = (-b + Math.sqrt(dd)) / (2 * a);
var root2 = (-b - Math.sqrt(dd)) / (2 * a);
var num = parseFloat(root1).toFixed(2);
var num1 = parseFloat(root2).toFixed(2);
console.log(num);
console.log(num1);
