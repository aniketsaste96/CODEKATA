/*Sample Input :
5
Sample Output :
1
22
333
4444
55555*/

  let num = userInput[0]
  let result = ""
for(let row =1;row<=num;row++){
    //for every row run the col
    for(let col=1;col<=row;col++){
        result+=row   //printing row num 
    }
    //when one row is printed we need new line
     result+="\n"
}
console.log(result.replace(/\s+$/gm, ""))

/*
Output:
1
22
333
4444
55555*/
