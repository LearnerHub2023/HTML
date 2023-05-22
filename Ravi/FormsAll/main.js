function genericSubmit(event) {
  event.preventDefault();
  let form = event.target;
  let payload = Object.fromEntries(new FormData(form).entries());
  const url = `${form.action}/${payload.id}`;
  const method = payload.method;
  const headers = {
    "Content-Type": "application/json",
  };  
  const body = JSON.stringify(payload);
  switch (method) {
    case "post":
      payload.id=undefined;
      body = JSON.stringify(payload);
      apiCall(form.action, { method, headers, body });
      break;
    case "put":
      apiCall(url, { method, headers, body });
      break;
    case "PATCH":
        apiCall(url, { method, headers, body });
        break;
    case "delete":
        apiCall(url, { method });
        break;  
  }  
}

function apiCall(url, options){
    fetch(url, options)
    .then(async (res) => {
      let data = await res.json();
      if (!res.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function postCall(event) {
  event.preventDefault();
  let form = event.target;
  let payload = Object.fromEntries(new FormData(form).entries());
  const url = "post";
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
    })
    .catch((error) => {
      console.log(error);
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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function patchCall(event) {
    event.preventDefault();
    let form = event.target;
    let payload = Object.fromEntries(new FormData(form).entries());
    const url = `${form.action}/${payload.id}`;
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
      })
      .catch((error) => {
        console.log(error);
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
      })
      .catch((error) => {
        console.log(error);
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