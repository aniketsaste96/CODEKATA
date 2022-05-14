Given a string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0).
Input Size : |s| <= 10000000(complexity O(n))
Sample Testcase :
INPUT
codekata
OUTPUT
ocedakat

//-----------------------
 let string = userInput[0];
let myArray = string.split('');
let outputArray = [];

for (i = 0; i < myArray.length; i = i + 2) {
    outputArray.push(myArray[i + 1]);
    outputArray.push(myArray[i]);
}

console.log(outputArray.join(''));
