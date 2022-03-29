var tag = document.getElementById("demo");

   let data = []
   for(let i=1;i<=5;i++){
       data.push(i)
   }
   
 var result = tag.innerHTML = data.join(" ")
