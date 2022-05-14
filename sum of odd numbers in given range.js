Given a range[L,R], print the sum of all the odd numbers within the range(inclusive of L and R).
Sample Testcase:
INPUT
5 10
OUTPUT
21

//-------------------------------


var input = userInput[0].split(" ");
var A = parseInt(input[0]);
var B = parseInt(input[1]);
  var num = []
for (let i = A; i <= B; i++) {
    if (i % 2 === 1) {
        num.push(i)
    }

}

var result = num.reduce((a, b) => {
    return a + b
})
console.log(result);

//----------------------------
