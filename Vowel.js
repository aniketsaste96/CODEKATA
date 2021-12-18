// Given a string print the vowels in the string

// Input Description:
// Given a string

// Output Description:
// Print the String

// Sample Input :
// guvi geek
// Sample Output :
// ui ee
// -----------------
let data =userInput[0].split("");
const vowel = ["a","e","i","o","u"," "];

let result =""
for(let i = 0;i<data.length;i++){
     for(let j =0 ;j<vowel.length;j++){
         if(data[i]===vowel[j]){
             result+=(data[i]+"")
         }
     }
}

console.log(result)

// Output:
// ui ee
// Execution Time:
// 0.073s
