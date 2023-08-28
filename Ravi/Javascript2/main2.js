
let xuvcar;
xuvcar = {
  carName: "xuv300",
  petrol: 1000,
  travel: function (from, to) {
    if (from === "vja" && to === "hyd") {
        console.log("vja");
      this.petrol -= 300;
      console.log("hyd")
    }

    if (from === "hyd" && to === "che") {
        console.log("vja")
      this["petrol"] -= 500;
      console.log("che")
    }
  },
  petrolIndicator: function () {
    console.log(this.petrol);
  },
};

///////////////////////////////////////////////////////

let suzikicar;
suzikicar = {
  carName: "suzikicar",
  petrol: 1500,
  travel: function (from, to) {
    if (from === "vja" && to === "hyd") {
        console.log("vja");
      this.petrol -= 200;
      console.log("hyd")
    }

    if (from === "hyd" && to === "che") {
        console.log("vja")
      this["petrol"] -= 400;
      console.log("che")
    }
  },
  petrolIndicator: function () {
    console.log(this.petrol);
  },
};

console.log(xuvcar.carName)
console.log(xuvcar["carName"]);

xuvcar.travel("vja","hyd");
xuvcar.petrolIndicator();

xuvcar.travel("hyd","che");
xuvcar.petrolIndicator();

/////////////////////////////////////////////////

console.log(suzikicar.carName)
console.log(suzikicar["carName"]);

suzikicar.travel("vja","hyd");
suzikicar.petrolIndicator();

suzikicar.travel("hyd","che");
suzikicar.petrolIndicator();