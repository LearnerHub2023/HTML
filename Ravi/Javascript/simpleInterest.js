document.querySelector("#sicalc").addEventListener("click", function () {
  //S.I. = (P × R × T)/100
  let si, P, R, T; //hoisting
  const percent = 100;


  P = document.querySelector("#P").value;
  R = document.querySelector("#R").value;
  T = document.querySelector("#T").value;

  //BODMAS
  //[],(),/,*,A,S 
  //S.I. = 10000 + 1000 * 2 * 6/100;

  si = (P * R * T) / 100;
  document.querySelector("#siResult").innerHTML = si;
});
