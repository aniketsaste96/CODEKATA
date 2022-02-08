const myArray = [1,2,3,4,5,6,1,2,3];
const unique = new Set(myArray)
unique.add(10)
unique.add("2")
unique.add({name:"Aniket"})
unique.add([1,2,3,4])
unique.delete(4)
// unique.clear()   //Set {}
// console.log(unique.has(3))
console.log(unique.size) //9
