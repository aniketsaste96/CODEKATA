 You are provided with a number ’n’. Your task is to tell whether that number is saturated. A saturated number is a number which is made by exactly two digits.

Input Description:
You are given with a number n.

Output Description:
Print Saturated if it is saturated else it is Unsaturated

Sample Input :
121
Sample Output :
Saturated

//-------------------------------- code


let data = userInput[0].split('');
  
  let A = [...new Set(data)]
  
  if(A.length ===2){
      console.log("Saturated")
  }else{
      console.log("Unsaturated")
  }
  
//----------------------------------
Output:
Saturated
Execution Time:
0.072s
Memory Used:
8316kb
