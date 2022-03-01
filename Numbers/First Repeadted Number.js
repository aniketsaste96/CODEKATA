Given a number N followed by N numbers. Out of these N numbers some of them are repeated. Write a program to find the first number which is repeated. If no numbers are repeated print 'unique'.
Input Size : 1 <= N <= 100000
Sample Testcases :
INPUT
7
1 2 3 2 3 4 3
OUTPUT
2
//----------------------------

var A = userInput[0]
 var data = userInput[1].split(" ");
 
 var i,j;
 var value = "";
 for(i=0;i<data.length;i++){
     for(j=i+1;j<data.length;j++){
          if(data[i]===data[j]){
              value+=(data[j])
               break;
          }
         
          
          
     }
    
 }

if(value===""){
    console.log("unique")
}else{console.log(value[0])}
