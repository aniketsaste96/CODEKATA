function palindrome(str){
const len = data.length;
  
  for(let i =0;i<len/2;i++){
      if(data[i]!==data[len-1-i]){
          return 'no';
      }
  }
return 'yes';
}
const data = userInput[0].split('');

const value = palindrome(data);
console.log(value);
