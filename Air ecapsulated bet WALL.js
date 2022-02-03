/*You are given an array of non-negative integers representing height of walls at index i as Ai and the width of each block is 1. Compute how much air can be encapsulated between the walls of chamber.

 

Input Desc:
Each line contains an integer ‘N’ denoting the size of the array Next line contains N space separated numbers to be stored in array.

Output Description:
Output the total unit of Air encapsulated between the walls of chamber.

Sample Input :
3
7 4 9
Sample Output :
3

----------------------------------------------*/
const range = parseInt(userInput[0]);
const arra = userInput[1].split(" ");
let diff = 0;

if(+arra[1] === +arra[2]){
    console.log(diff);
}else if(+arra[0] === +arra[2] && +arra[1] > +arra[0]){
    console.log(diff)
}else if(+arra[0] === +arra[2] && +arra[1] < +arra[0]){
    diff = +arra[0] - +arra[1];
    console.log(diff)
}else if(+arra[0] !== +arra[2] && +arra[0] > +arra[2]){
    diff = +arra[2] - +arra[1];
    console.log(diff)
}else if(+arra[0] !== +arra[2] && +arra[0] <+arra[2]){
    diff = +arra[0] - +arra[1];
    console.log(diff)
}
