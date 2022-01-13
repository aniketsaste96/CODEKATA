Input Description:
Given a string

Output Description:
Print the number of uppercase and lowercase

Sample Input :
Guvi Geek
Sample Output :
2 6

//-------------------------------------
   let input=  userInput[0].split("").join(" ").replace(/\s+/g, '')
 
 let data = input.split("")
  
 let result = data.map(letter => /[A-Z]/.test(letter))
 
   
  let capital  = [];
    let lower  = [];
    for(let i =0;i<result.length;i++){
          if(result[i]===true){
              capital.push(result[i])
          }else{
              lower.push(result[i])
          }
    }
   
console.log(capital.length,lower.length)


//------------------------------------------
Testcase Status:
>>> success
Input:
Guvi Geek
Expected Output:
2 6
Actual Output:
2 6
