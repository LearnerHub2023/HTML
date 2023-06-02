// before 2015 using with out var keyword
// 1. global scope

// before 2015 using var keyword
// 1. global scope
// 2. functional scope

// after 2015 using let, const keyword
// 1. global scope
// 2. functional scope
// 3. block scope

var x = 10;
console.log("global scope");
console.log(x);
console.log(window.x);
console.log("global scope");

function functionalScope() {
    var x = 2;
    console.log("fuctional scope");
    console.log(x);
    console.log("fuctional scope");
    {
       var x = 250;
        console.log("fuctional scope in change in block");
        console.log(x);
        console.log("fuctional scope in change in block");
    }
    console.log("fuctional scope after change in block");
    console.log(x);
    console.log("fuctional scope after change in block");

}

function localScope() {
    let x = 2;
    console.log("local scope");
    console.log(x);
    console.log("local scope");
    {
       let x = 250;
        console.log("local scope in change in block");
        console.log(x);
        console.log("local scope in change in block");
    }
    console.log("local scope after change in block");
    console.log(x);
    console.log("local scope after change in block");

}

functionalScope();
localScope();
console.log("global scope");
console.log(x);
console.log("global scope");
