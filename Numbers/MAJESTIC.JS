You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.

Input Description:
You are given a number ‘n’,Next line contains ‘n’ space separated

Output Description:
Print 1 if array is majestic and 0 if it is not

Sample Input :
7
1 2 3 4 6 0 0
Sample Output :
1

//----------------------------
let A =userInput[0];
let data =userInput[1].split(' ');
let num1 = (+data[0])+(+data[1])+(+data[2]);
let rev = data.reverse();
let num2 = (+rev[0])+(+rev[1])+(+rev[2]);
if(num1===num2){
    console.log('1');
}else{
    console.log('0');
}
