Given a number N print the right-angled triangle with the top level having N 1's followed by each level with is one 1 lesser.
Input Size : N <= 1000
Sample Testcase :
INPUT
3
OUTPUT
1 1 1
1 1
1

//--------------------------
ar inp = userInput[0];
var result = ""
for (let i = 0; i <= inp; i++) {
    for (let j = 1; j <= inp - i; j++) {
        result += "1 "
    }
    result += "\n"
}

console.log(result.replace(/\s+$/gm, ""));
