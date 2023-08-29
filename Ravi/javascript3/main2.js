/**
 * string type
 * number type
 * boolean type
 * 
 */
// value types
let num1;  //memory loc not created, so when access it before assigning value will get undefined
num1 = 200; //now memory loc has been created and 200 is stored into that location

let str1;
str1 = 'ravikumar';

let booleanvar1 = true;

// reference types
// Object
// Array
// function

let car = {
  petrol: 25,
  color: "red",
  travel: function(from, to) {
    console.log(from, to);
    this.petrol -= 5;
  },
  showPetrol:function(){
    console.log(this.petrol);
  }
};

let driver={
    name:'ravi',
    wage: 1000,
    drive:(from, to)=>{
        console.log(from, to);
    }
}

let company={

}

let customer={

}
