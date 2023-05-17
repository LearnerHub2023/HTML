//this call is used to create new user at database
function post(){
    let url="http://localhost:3000/employees";
    let payload={
        "empname": document.getElementById("empname").value,
        "designation": document.getElementById("designation").value
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
    let empid=document.getElementById("id").value;
    let url=`http://localhost:3000/employees/${empid}`;
    let payload={
        "empname": document.getElementById("empname").value,
        "designation": document.getElementById("designation").value
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
    let empid=document.getElementById("id").value;
    let url=`http://localhost:3000/employees/${empid}`;
    let payload={
        "empname": document.getElementById("empname").value
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
    let empid=document.getElementById("id").value;
    let url=`http://localhost:3000/employees/${empid}`;
    let options={
        method:"delete"
    }
    fetch(url, options).then(res=> console.log(res));
}