Write a code to get a integer n as input and calculate the smallest perfect power of 2 greater than n.

Input Description:
A single line containing an integer,n.

Output Description:
Print the smallest perfect power of 2 greater than n.

Sample Input :
48
Sample Output :
64

//------------------

function perfectPowerOf2(n)
{
    // To store perfect power of 2
    let per_pow = 1;
 
    while (n > 0)
    {
        // bitwise left shift by 1
        per_pow = per_pow << 1;
 
        // bitwise right shift by 1
        n = n >> 1;
    }
 
    // Required perfect power of 2
    return per_pow;
}
 
// Driver program to test above
 
    let n = userInput[0];
    console.log(perfectPowerOf2(n));
