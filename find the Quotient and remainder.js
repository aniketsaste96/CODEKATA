Output Description:
Need to print Quotient and remainder separated by a space

Sample Input :
6 3
Sample Output :
2 0
//-----------------------------------
 let data = userInput[0].split(" ");
 let A = data[0];
 let B = data[1];
 
 let result1 = A/B;
 let result2 = A%B;
 
 
 console.log(Math.floor(result1),Math.floor(result2));

//---------------------------------
Testcase Status:
>>> success
Input:
54 7
Expected Output:
7 5
Actual Output:
7 5
