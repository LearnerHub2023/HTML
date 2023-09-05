// previous topic about data types
let variblee={};
console.log(typeof variblee);//undefined

let array = [1,5,6,8]; //collection values

console.log(array);
console.log(array[0]);
console.log(array[3]);

//for(initialization; condition checkking; increment){
//    
//}
console.log("for loop");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// let objecttest = {
//     key1: value1,
//     key2: value2,
//     ......
// }

let carObject = {
    mirrors: 6,
    wheels: 4,
    tanker:1,
    modal: "XUV300"
}

console.log(carObject.mirrors);
console.log(carObject.wheels);
console.log(carObject['tanker']);
console.log(carObject['modal']);

// for( key in Object ){

// }
console.log("for in loop");
for(key in carObject){
    console.log(carObject[key]);
    //console.log(carObject.key);
}