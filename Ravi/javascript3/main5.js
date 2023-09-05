//scopes
// 1. functinal scope ( var keyword)
// 2. block scope (const let keyword)
console.log("scope testing");
function testScope() { 
  var condition = true;
  if (condition) {
    var x = 100;
    let y =200;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  console.log(y);
}

testScope();