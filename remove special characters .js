Input Description:
Given a string

Output Description:
Print the string or -1

Sample Input :
Xyz-aBc-nMk
Sample Output :
XyzaBcnMk

//-----------------------
 let data = userInput[0];
let result = data.replace(/[^a-zA-Z ]/g, "");
 if(result===data){
     console.log("-1")
 }else{
     console.log(result)
 }
//----------------------------
Input:
Guvi Geek
Expected Output:
-1
Actual Output:
-1
Execution Time:
>>> 0.072s
Memory Used:
>>> 8328kb
