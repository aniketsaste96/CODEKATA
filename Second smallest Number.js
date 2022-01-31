Input Description:
0<n<100 Given a number n Followed by n number in next line

Output Description:
Print the 2nd smallest number in an array

Sample Input :
6
5 7 4 4 6 8
Sample Output :
5

//----------------------------------
 let data = userInput[0].split(" ");
let removeDup = [...new Set(data)]
const min = Math.min(...removeDup)
let filters = data.filter((x)=>x!=min)
let secondMin = Math.min(...filters)
console.log(secondMin)

//---------------------------------

Output:
5
Execution Time:
0.072s
Memory Used:
8328kb
