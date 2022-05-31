//write a function that takes string and return no of char in it;

function char(str){
    //store the result
    var obj = {};

     //loop through each charachter
    for(let i=0;i<str.length;i++){
        var char= str[i].toLowerCase();
       //if char is present go inside
        if(/[a-z0-9]/.test(char)){
            if(obj[char]>0){
                 //increment if have more than 1
            obj[char]++;
            }
           
        else{
            //put 1 if it has repeated only one time;
            obj[char] =1;
        }
        }
    }
    return obj;
}

console.log(char("Helloh hi"))



//-----{h: 3, e: 1, l: 2, o: 1, i: 1}
