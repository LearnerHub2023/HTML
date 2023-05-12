
fetch("http://localhost:3000/employees").then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data)
    })
})