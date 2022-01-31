Input Description:
Given a string

Output Description:
Print duplicate of the string or -1

Sample Input :
Guvi Geek
Sample Output :
Ge

//--------------------------

 let data = userInput[0].split("");
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)


console.log([...new Set(findDuplicates(data))].join(""))

//--------------------------
Output:
Ge
Execution Time:
0.072s
Memory Used:
8300kb
