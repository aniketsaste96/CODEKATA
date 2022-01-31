Given a number n and m followed by n numbers remove the number m in the n number and print the remaining n number if m is not found print -1

Input Description:
0<n<100 Given a number n Followed by n number in next line

Output Description:
Print the remaining numbers or -1

Sample Input :
6 43
5 7 4 4 6 8
Sample Output :
-1

//----------------------------

let data = userInput[0].split(" ");
let A = data[1]
let data1 = userInput[1].split(" ")
let result = data1.filter((x)=>x!=A)
if(data1.length===result.length){
    console.log("-1")
}else{
    console.log(result.join(" "))
}


//---------------------------
Output:
45 5 11 0
Execution Time:
0.072s
Memory Used:
8340kb
