Input Description:
First line represents the size of the linked list. Next line contains characters of a linked list(separated by space).Third line contains the node that has to be deleted.

Output Description:
Print the values of linked list after deleting the node(separated by space).

Sample Input :
6
1 2 3 4 5 6
3
Sample Output :
1 2 4 5 6

//------------------------------------------------
 let num = userInput[2]
  let data = userInput[1].split(" ");
  let result = data.filter((e)=>e!=num)
   
 console.log(result.join(" "))
