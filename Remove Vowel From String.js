Given a string remove the vowels in the string

Input Description:
Given a string

Output Description:
Print the string

Sample Input :
guvi geek
Sample Output :
gv gk

//--------------------------
 let data = userInput[0].split(" ");
let string = data.map(x=>x.replace( /[aeiou]/g, '' ));
console.log(string.join(" "));




//---------------------------

Output:
gv gk
Execution Time:
0.072s
Memory Used:
8384kb
