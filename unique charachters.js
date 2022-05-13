You are given a string ‘s’. Your task is to find whether string is beautiful or not. A string is said to be beautiful whenever string is made up of only three characters. All the three characters must be distinct. Print true if string is beautiful and false when it is not beautiful

Input Description:
You are given a string

Output Description:
Print ‘1’ when string is beautiful and ‘0’ when it is not

Sample Input :
Aab
Sample Output :
1
//-------------------------------


var input = userInput[0]
var result = []
for (var i = 0; i < input.length; i++) {
    if (input[i] !== input[i + 1] && input.length === 3) {
        result.push("1")
    } else {
        result.push("0")
    }
}
console.log(result.pop())
