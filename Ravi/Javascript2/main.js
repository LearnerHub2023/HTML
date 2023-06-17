// how can we define variables
// const, let, var

// data types
/*
12.00, 12.23
"string", 'string'
true, false
{firstName:"ravi", lastname:"gunji"} 
["hello","world","india"] 
[1,2,8,9]
[{firstName:"ravi", lastname:"gunji"},{firstName:"ravi", lastname:"gunji"},{firstName:"ravi", lastname:"gunji"}]
["hello",12,true,{test:"testing"}]

number, string, boolean, object [array, object, function], null, undefined
*/
/*
function functionName(x, z, y){
let a;
let b;
    //here we are going to use x, z, y
    return 20;
    dfdsfsd;
    sdsdfsdf;
    dfgdfgd;
}(10, 20,50);
let a, b, c;

dfdsfgdfgdf;
dfdgdfg;
let result = functionName(10, 20, 30); //invoke or call
eterter;
trtgdfg;
dasdfsd;
let test1=10, test2=20;
let output = test1 + test2 + functionName(10, 20, 30); //30
*/


function interestCalc(/*parameters*/) {
  let p = 10000;
  let r = 2;
  let t = 12;

  let result = (p * t * r) / 100;
  console.log(result);
  //return
}
// method 1
document.querySelector("h1").addEventListener("mouseover", interestCalc);

// method 2
interestCalc();

// method 3
(function (){
    alert(1235)
})();

function interestCalc1(p, t, r) {
    return (p * t * r) / 100;
}

console.log("p = 1000000, r = 2, t = 2year", " ----- ", interestCalc1(1000000, 24, 2));

console.log("p = 2000000, r = 2, t = 3year", " ----- ", interestCalc1(2000000, 36, 2));

console.log("p = 3000000, r = 2, t = 1/year", " ----- ", interestCalc1(3000000, 36, 2));