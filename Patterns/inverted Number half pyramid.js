/* Sample Input :
5
Sample Output :
12345
1234
123
12
1
*/



let num = userInput[0]
  let result = ""
for(let row =1;row<=num;row++){
    //for every row run the col
    for(let col=1;col<=num-row+1;col++){
        result+=col
    }
    //when one row is printed we need new line
     result+="\n"
}
console.log(result.replace(/\s+$/gm, ""))

/*
Output :
12345
1234
123
12
1
*/
