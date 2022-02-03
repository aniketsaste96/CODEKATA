var N =userInput[0];
  var data = userInput[1].split(' ');

// iterate over the array element and filter out
var res = data.filter(function(v) {
  // filter out only elements where both last 
  // index and first index are the same.
  return data.indexOf(v) == data.lastIndexOf(v);
});

console.log(res.join(' '));
