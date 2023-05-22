function postCall(event) {
     event.preventDefault();
     let form = event.target;
    let payload = Object.fromEntries(new FormData(form).entries());
    const url = "http://localhost:3000/employees";
    const options = {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    fetch(url, options)
      .then(async (res) => {
        let data = await res.json();
        if (!res.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
        alert("data is submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error pleas check logs");
      });
  }

  function putCall(event) {
    event.preventDefault();
    let form = event.target;
    let payload = Object.fromEntries(new FormData(form).entries());
    const url = `${form.action}/${payload.id}`;
    const options = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    fetch(url, options)
      .then(async (res) => {
        let data = await res.json();
        if (!res.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
        alert("employee details update successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error plz check logs");
        postCall(event);
      });
  }

  function patchCall(event) {
    event.preventDefault();
    let form = event.target;
    let payload = Object.fromEntries(new FormData(form).entries());
    const url = `${form.action}/${payload.id}`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    fetch(url, options)
      .then(async (res) => {
        let data = await res.json();
        if (!res.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
        alert("employee details update successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error plz check logs");
      });
  }

  function deleteCall(event) {
    event.preventDefault();
    let form = event.target;
    let payload = Object.fromEntries(new FormData(form).entries());
    const url = `${form.action}/${payload.id}`;
    const options = {
      method: "delete"
    };
    fetch(url, options)
      .then(async (res) => {
        let data = await res.json();
        if (!res.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
        alert("employee details delete successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("there is an error plz check logs");
      });
  }

  function getCall(event) {
    event.preventDefault();
    let form = event.target;
    let payload = Object.fromEntries(new FormData(form).entries());
    const url = `${form.action}/${payload.id}`;
    const options = {
      method: "get"
    };
    fetch(url, options)
      .then(async (res) => {
        let data = await res.json();
        if (!res.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
        document.querySelector("#output").innerHTML=JSON.stringify(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }