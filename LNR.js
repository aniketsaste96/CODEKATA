Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
Sample Testcase :
INPUT
3
2 6
OUTPUT
yes

----------------------------
let N = userInput[0];
let data = userInput[1].split(' ');

let L = parseInt(data[0]);
let R = parseInt(data[1]);

if(N>= L && N<=R){
    console.log('yes');
}else{
    console.log('no');
}
