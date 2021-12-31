1
12
123
1234
12345
//-----------------------------------
    let num = userInput[0]
  let result = ""
for(let row =1;row<=num;row++){
    //for every row run the col
    for(let col=1;col<=row;col++){
        result+=col
    }
    //when one row is printed we need new line
     result+="\n"
}
console.log(result.replace(/\s+$/gm, ""))
