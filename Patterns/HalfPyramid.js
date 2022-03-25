*
*  *
*  *  *
*  *  *  *
*  *  *  *  *
  
 // ---------------------------------//
  
    let num = userInput[0]
  let result = ""
for(let row =1;row<=5;row++){
    //for every row run the col
    for(let col=1;col<=row;col++){
        result+="*  "
    }
    //when one row is printed we need new line
     result+="\n"
}
console.log(result.replace(/\s+$/gm, ""))
