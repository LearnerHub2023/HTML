// control structures
// 1. if
// 2. if else
// 3. elseif ladder
// 4. swith

let booleanVar= true ;

if(booleanVar)
 {   
    console.log(booleanVar);
    console.log(booleanVar);
    console.log(booleanVar);
    console.log(booleanVar);
}
else{
    console.log(booleanVar);
    console.log(booleanVar);
}
let qualification='10th';

if ((qualification === "degree")) {
  console.log("teacher");
} else if ((qualification === "BTech")) {
  console.log("software engeeneer");
} else if ((qualification === "BTech Civil")) {
  console.log("civil engeeneer");
} else if ((qualification === "MBBS")) {
  console.log("doctor");
} else {
  console.log("politician");
}

switch(qualification){
    case 'degree':
        console.log("teacher");
        break;
    case 'BTech':
        console.log("software engeeneer");
        break;
    case 'BTech Civil':
        console.log("civil engeeneer");
        break;
    case 'MBBS':
        console.log("doctor");
        break;
    default:
        console.log("politician");
        break;
}

