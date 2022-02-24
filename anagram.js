 Joseph was going through topic of strings. He learnt about anagrams. But due to some circumstances he forget ,now he hired you to help him in completing the work.Your task is to tell whether the two given strings are anagrams

Input Description:
The first line of the input is a string N, the second line of the input is a string M

Output Description:
Compare the two string input N and M. Print 1 if they are anagram else print 0.

Sample Input :
abcd
cdab
Sample Output :
1
//----------------


let data = userInput[0].split("");
let data1 = userInput[1].split("");

 if(data.sort().join("")===data1.sort().join("")){
     console.log("1")
 }else{
     console.log("0")
 }
