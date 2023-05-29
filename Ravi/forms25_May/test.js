function postCall(event) {
  event.preventDefault();
  let form = event.target;
  let formData= new FormData(form);
  console.log(formData);

  formData.forEach(element => {
    console.log(element)
  });
console.log(new FormData(form).entries());
let payload = Object.fromEntries(new FormData(form).entries());
payload.fileupload=formData.getAll("fileupload");
console.log(payload);
//   let payload = Object.fromEntries(new FormData(form).entries());
//   const url = "http://localhost:3000/employees";
//   const options = {
//     method: form.method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   };
//   console.log("skdfksd");
//   fetch(url, options)
//     .then(async (res) => {
//       let data = await res.json();
//       if (!res.ok) {
//         // get error message from body or default to response status
//         const error = (data && data.message) || response.status;
//         return Promise.reject(error);
//       }
//       console.log(data);
//       alert("data is submitted successfully");
//     })
//     .catch((error) => {
//       console.log(error);
//       alert("there is an error pleas check logs");
//     });
}
