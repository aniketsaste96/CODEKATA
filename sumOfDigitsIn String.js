You are given a string ‘s’.Your task is to print the string in the order they are present and then sum of digits.

Input Description:
You are given a string ‘s’.

Output Description:
Print the string and then at last sum of all the digits

Sample Input :
AC30BD40
Sample Output :
ACBD7 



//--------------------------




var str = userInput[0].split("")
var result = str.map(item => item.replace(/[0-9]/gi, "")).join("")
var num = str.map(item => item.replace(/[A-z]/gi, "")).join("")
var number = 0;
for (var i = 0; i < num.length; i++) {
    number += +num[i]
}


console.log(result + number)

//----------------------------
ACBD7 
