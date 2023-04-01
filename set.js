//set

var mySet = new Set();
mySet.add("A")
mySet.add("B")
mySet.add("C")
mySet.add("D")
mySet.add("E")
mySet.add("C")
mySet.add("F")
mySet.add("G")
mySet.add("A")

//console.log(mySet) // { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }

//console.log(mySet.size) //7

//mySet.clear()

mySet.delete("B")
//console.log(mySet) // output  { 'A', 'C', 'D', 'E', 'F', 'G' }

//console.log(mySet) //clear all values

//dublicate value does not count

var mySetPro = new Set(
    ["H" ,"I" , "j", "k", "L"]
)

console.log(mySetPro)// { 'H', 'I', 'j', 'k', 'L' }

console.log(mySetPro.has("o")) // false

console.log(!mySetPro.has("o")) // true

console.log(mySetPro.values()) //{ 'H', 'I', 'j', 'k', 'L' }

