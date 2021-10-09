Meaning - Each of several possible ways in which a set or number of things can be ordered or arranged.
/*
INPUT
123
OUTPUT
123
231
321
213
312
132
*/
//------------------------------------

 function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if(!rest.length) {
      ret.push([xs[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}

console.log(perm(userInput[0]).join("\n").replace(/,/g, '')); //remove Commas.
