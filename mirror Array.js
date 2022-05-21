vGiven 2 arrays print 'yes' if they are mirror images of each other,otherwise 'no'.
Input Size : N <= 1000000
Sample Testcase :
INPUT
4
1 2 3 4
4 3 2 1
OUTPUT
yes

//------------------------------
let data1 = userInput[1];

let data2 = userInput[2].split(' ');
let rev = data2.reverse().join(' ');


if(data1 == rev){
    console.log("yes")
}else{
    console.log("no");
}
