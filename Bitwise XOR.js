Given a number N and an array of N elements, find the Bitwise XOR of the array elements.
Input Size : N <= 100000
Sample Testcase :
INPUT
2
2 4
OUTPUT
6

//------------------------

var arr = userInput[1].split("")

var s = arr.reduce((a, b) => {
    return a ^ b
})
console.log(s);



//------------------------

Testcase Status:
>>> success
Input:
5 
1 7 6 5 2
Expected Output:
7
Actual Output:
7
Execution Time:
>>> 0.074s
Memory Used:
>>> 8420kb
