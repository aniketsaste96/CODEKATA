You are given with two arrays. Your task is to merge the array such that first array is in ascending order and second one in descending order.

Input Description:
First line contains two integer ‘n’ and ‘m’. ‘n’ denotes length of array 1 and ‘m’ of array 2.Next line contains n space separated numbers and third line contains ‘m’ space separated numbers

Output Description:
Print a single array in desired order

Sample Input :
3 3
23 15 16
357 65 10
Sample Output :
15 16 23 357 65 10


//------------------------------------------------------
    let arr = userInput[1].split(" ");
  let arr2 = userInput[2].split(" ");
  
  let sort1 = arr.sort((a,b)=>a-b);
  let sort2 = arr2.sort((a,b)=>b-a);
  let result = [...sort1,...sort2];
  console.log(result.join(" "))
