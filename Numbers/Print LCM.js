Write a program to get a list of integers as input and find the LCM of the values without using GCD

Input Description:
First line contains an integer N, number of values. Second line contains N space separated values.

Output Description:
Print the LCM of the values.

Sample Input :
1 2 3 4 5
Sample Output :
60

//------------------

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
function LCM(arr, n)
{
	// Find the maximum value in arr[]
	var max_num = 0;
	for (var i = 0; i < n; i++)
		if (max_num < arr[i])
			max_num = arr[i];

	// Initialize result
	var res = 1;

	// Find all factors that are present in
	// two or more array elements.
	var x = 2; // Current factor.
	while (x <= max_num)
	{
		// To store indexes of all array
		// elements that are divisible by x.
		var indexes = [];
		for (var j = 0; j < n; j++)
			if (arr[j] % x == 0)
				indexes.push(j);

		// If there are 2 or more array elements
		// that are divisible by x.
		if (indexes.length >= 2)
		{
			// Reduce all array elements divisible
			// by x.
			for (var j = 0; j < indexes.length; j++)
				arr[indexes[j]] = arr[indexes[j]]/x;

			res = res * x;
		}
		else
			x++;
	}

	// Then multiply all reduced array elements
	for (var i = 0; i < n; i++)
		res = res*arr[i];

	return res;
}

// Driver code
var A= userInput[0];
var arr = userInput[1].split(' ');
var n = arr.length;
console.log( LCM(arr, n));
