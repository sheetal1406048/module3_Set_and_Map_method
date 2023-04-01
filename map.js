//map and set

//var variableName = new Map()
//variableName.set("keys", "values")
//keys must be different but values may be same

var myMap = new Map();
myMap.set("key1","A");
myMap.set("key2","B");
myMap.set("key3","C");
myMap.set("key4","D");
myMap.set("key5","E");
myMap.set("key6","F");
myMap.set("key7","G");

//console.log(myMap.keys()); {"key1", "key2", "key3", "key4", "key5", "key6" , "key7"}
//console.log(typeof (myMap.keys())) ||object
//console.log(myMap.values()); {"A","B","C","D","E","F","G"}
//console.log(typeof (myMap.values())) ||object

for(var items of myMap.keys()){
    //console.log(items)
    
    //output
    // key1
    // key2
    // key3
    // key4
    // key5
    // key6
    // key7
}

for(var items of myMap.values()){
    //console.log(items)

    //output
    // A
    // B
    // C
    // D
    // E
    // F
    // G
}




var myMapPro = new Map();
myMapPro.set("key11","A1");
myMapPro.set("key12","B1");
myMapPro.set("key13","C1");
myMapPro.set("key14","D1");
myMapPro.set("key15","E1");
myMapPro.set("key16","F1");
myMapPro.set("key17","G1");


//myMapPro.delete("key14")
//myMapPro.delete("key16")
//myMapPro.clear() delete all the data of the map
//console.log(myMapPro.values())

for(var items of myMapPro.values()){
  //  console.log(items) || output : A1 B1 C1  E1  G1
}


//get()

//console.log(myMapPro.get("key17")) ||output  G1

//has("key")

if(myMapPro.has("key12")){
    console.log("yes")
}
else{
    console.log("no")
}

//output yes


console.log(myMapPro.has("key12")) //output true



// var person ={
//     fName : "A",
//     lName : "B", 
//     age :30
// }

// for(var items in person){
//     console.log(items,person[items])
// }

//multiply all numbers in array

var array = [2,3,4,5,6]

var result = array.map(function(num){
    return num*10;
})

console.log(result) // output [ 20, 30, 40, 50, 60 ]