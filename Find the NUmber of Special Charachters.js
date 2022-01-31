Given a string find the number of special characters if their no special characters print -1

Input Description:
Given a string

Output Description:
Print number of special characters or -1

Sample Input :
Guvi Geek
Sample Output :
-1

//-------------------------------
 let data = userInput[0];
let result = data.replace(/[^a-zA-Z ]/g, "");
 if(result===data){
     console.log("-1")
 }else{
    let A = data.length;
    let B = result.length;
    console.log(A-B)
 }

//--------------------------------
Output:
-1
Execution Time:
0.072s
Memory Used:
8312kb
