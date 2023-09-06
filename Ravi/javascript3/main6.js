// array.forEach(element => {
    
// });

// object.forEach(element => {
    
// });

let strArray = ['ravi', 'kumar', 'siva', 'shreya'];
let numArray = [100, 500, 1000, 8000];
let obj={
    name:"ravi",
    city:"hyd",
    Phno:"99999999"
}

let callbackfn= function(value, index, mainvar){
    console.log(value, index, mainvar);
}

let callbackArrowfn = (value, index, mainvar) =>
  console.log(value, index, mainvar);

//strArray.forEach(callbackfn);
strArray.forEach(callbackfn);
numArray.forEach(callbackArrowfn)
//obj.forEach(callbackArrowfn);

console.log("for in");
for(let k in strArray){
    console.log(strArray[k]);
}
for(let k in obj){
    console.log(obj[k]);
}

console.log("for of");
for(let v of strArray){
    console.log(v);
}

// for(let v of obj){
//     console.log(v);
// }