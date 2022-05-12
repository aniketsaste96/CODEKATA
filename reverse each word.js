
Given a string S of length N, write a program that would reverse every word in the string.
Input Size : 1 <= N <= 100000
Sample Testcases :
INPUT
Hello World
OUTPUT
olleH dlroW



//--------------------------------------



var str = userInput[0].split(" ")
var result = str.map((item) => item.split("").reverse().join("")).join(" ")
console.log(result)

//-------------------------------------

OUTPUT
olleH dlroW
