Sample Testcase :
INPUT
codekata
OUTPUT
a-t-a-k-e-d-o-c
-----------------------------------
const str = userInput[0].split('');
sum = "";
let A = str.reverse();
for(let i =0;i<A.length;i++){
    sum += A[i] + "-"; //sum =sum + A[i]+"-";
    
}
console.log(sum.slice(0, -1));
