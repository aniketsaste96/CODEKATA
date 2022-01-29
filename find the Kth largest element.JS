Given two numbers N,K(N>=K) and an array of N elements, write a program to find the Kth largest element.
Input Size : 1 <= K <= N <= 100000
Sample Testcases :
INPUT
6 2
1 2 3 4 5 6
OUTPUT
5

//---------------------------
 let data = userInput[0].split(" ");
let A = data[1];
let arr = userInput[1].split(" ");

let sorted_arr = arr.sort((a,b)=>b-a);


console.log(sorted_arr[A-1])
