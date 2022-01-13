/*Output Description:
Print whether odd or even

Sample Input :
3
5 7 4
Sample Output :
odd odd even*/

//----------------------
let data = userInput[1].split(" ");

let result = ""
for(let i = 0;i<data.length;i++){
    if(data[i]%2!==0){
        result+= "odd"+" "
        
    }else{
        result+="even"
    }
        

}
console.log(result)

//----------------------------
/*Testcase Status:
>>> success
Input:
3
5 7 4
Expected Output:
odd odd even
Actual Output:
odd odd even*/
