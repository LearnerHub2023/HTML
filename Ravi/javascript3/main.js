/*
interest calc

si= p t r /100;

p principle
t time
r rate

100 per 
*/

function simpleInterest(p, t, r) {
  let si;
  const perHundred = 100; //here 1 memory locations are created in memory for perhundred;

//   p = 10000; // here one memory location created
//   t = 12; // here one memory location created
//   r = 2; // here one memory location created

  si = (p * t * r) / perHundred;

  console.log(si);
}

var simpleInterestWithFunExpresion = (p,t,r) =>{
    let si;
    const perHundred = 100; //here 1 memory locations are created in memory for perhundred;
  
  //   p = 10000; // here one memory location created
  //   t = 12; // here one memory location created
  //   r = 2; // here one memory location created
  
    si = (p * t * r) / perHundred;
  
    console.log(si);
}

