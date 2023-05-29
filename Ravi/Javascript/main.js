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
