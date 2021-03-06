You are given a string āsā.Your task is to print the maximum length of longest palindrome present in string.

Input Description:
You are given string āsā

Output Description:
Print length of longest palindrome in string

Sample Input :
abcb
Sample Output :
3

//----------------------------------

 function longestPalSubstr(str)
{
    // Length of given string
    var n = str.length;
 
    // Stores the maximum length
    var maxLength = 1, start = 0;
 
    // Iterate over the string
    for (var i = 0;i < str.length; i++) {
 
        // Iterate over the string
        for (var j = i;j < str.length; j++) {
            var flag = 1;
 
            // Check for palindrome
            for (var k = 0;k < (j - i + 1) / 2; k++)
                if (str[i + k]
                    != str[j - k])
                    flag = 0;
 
            // If string [i, j - i + 1]
            // is palindromic
            if (flag && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
 
    // Return length of LPS
    return maxLength;
}
 
// Driver Code
 
// Given string
var str = userInput[0].split('');
 
// Function Call
console.log( longestPalSubstr(str));

  //end-here
