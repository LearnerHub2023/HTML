//this call is used to create new user at database
function post(){
    let url="http://localhost:3000/memberEnrollment";
    let payload={
        "FirstName": document.getElementById("FirstName").value,
        "LastName": document.getElementById("LastName").value,
        "Country/Territary Residence": document.getElementById("country").value,
        "Date of Birth": document.getElementById("dateofbirth").value,
        "Mobile Number": document.getElementById("mobileNumber").value,
        "Email ID": document.getElementById("emailId").value
       
    };
    let options={
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    }
    fetch(url, options).then(res=> console.log(res));
}

function put(){
    let emailId =document.getElementById("emailId").value
    let url="http://localhost:3000/memberEnrollment";
    let payload={
        "FirstName": document.getElementById("FirstName").value,
        "LastName": document.getElementById("LastName").value,
        "Country/Territary Residence": document.getElementById("country").value,
        "Date of Birth": document.getElementById("dateofbirth").value,
        "Mobile Number": document.getElementById("mobileNumber").value,
        "Email ID": document.getElementById("emailId").value
    };
    let options={
        method:"put",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    }
    fetch(url, options).then(res=> console.log(res));
}

function patch(){
    let emailId=document.getElementById("emailId").value
    let url="http://localhost:3000/memberEnrollment";
    let payload={
        "FirstName": document.getElementById("FirstName").value,
        "LastName": document.getElementById("LastName").value,
        "Country/Territary Residence": document.getElementById("country").value,
        "Date of Birth": document.getElementById("dateofbirth").value,
        "Mobile Number": document.getElementById("mobileNumber").value,
        "Email ID": document.getElementById("emailId").value
    };
    let options={
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    }
    fetch(url, options).then(res=> console.log(res));
}

function deleteMethod(){
    let emailId=document.getElementById("emailId").value
    let url=`http://localhost:3000/memberEnrollment/${empid}`;
    let options={
        method:"delete"
    }
    fetch(url, options).then(res=> console.log(res));
}

function newPost(event){
event.preventDefault();
alert(1111111);
let form = document.querySelector("form");

console.log(form)
let url="http://localhost:3000/memberEnrollment";
let formData=new FormData(form);

//console.log(formData.get(slt));
let res=Object.fromEntries(formData.entries());
res.slt=formData.getAll('slt');
res.hello=formData.getAll('hello');


let payload={
    "FirstName": document.getElementById("FirstName").value,
    "LastName": document.getElementById("LastName").value,
    "Country/Territary Residence": document.getElementById("country").value,
    "Date of Birth": document.getElementById("dateofbirth").value,
    "Mobile Number": document.getElementById("mobileNumber").value,
    "Email ID": document.getElementById("emailId").value
};
let options={
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(res)
}
fetch(url, options).then(res=> res.json()).then(res=>console.log(res));
}