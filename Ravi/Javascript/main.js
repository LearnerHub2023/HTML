// function defination and we can call it as calling function
function changeContentWithHello(){
    document.getElementById('output').innerHTML='hello';
}

// function defination and we can call it as calling function
function changeContentWithHi(){
    document.getElementById('output').innerHTML='hi';
}

document.querySelector('#blubon').addEventListener("click",function(){
    // blub on function code 
    document.querySelector('#blub').src='pic_bulbon.gif';
});

document.querySelector('#bluboff').addEventListener("click",function(){
    // blub on function code 
    document.querySelector('#blub').src='pic_bulboff.gif';
});

document
  .querySelector("#borderChangeBtn")
  .addEventListener("click", function () {
    document.querySelector("#square").style.border = "2px solid red";
    document.querySelector("#square").style.backgroundColor = "blue";
  });

  document
  .querySelector("#show")
  .addEventListener("click", function () {
    document.querySelector("#square").style.display = "block";
  });

  document
  .querySelector("#hide")
  .addEventListener("click", function () {
    document.querySelector("#square").style.display = "none";
    window.alert("hello");
    alert("hi");
    console.log("testing");
    document.write("testing");
  });

