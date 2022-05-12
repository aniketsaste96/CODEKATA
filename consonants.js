You are given a string.Your task is to print only the consonants present in the string without affecting the sentence spacings if present. If no consonants are present print -1

Input Description:
You are given a string ‘s’.

Output Description:
Print only consonants.

Sample Input :
I am shrey 
Sample Output :
 m shry
 
 //---------------------- 
//    var str = userInput[0].split(" ")    / "I am shrey".split(" ")
var result = str.map(x => x.toLowerCase().replace(/[aeiou]/g, ''));

console.log(result.join(" "));
//---------------

m shry
