// Iteration 1: Names and Input
let hacker1;
hacker1 = "Manolo";
console.log(`The driver's name is ${hacker1}`);
let hacker2;
hacker2 = "Pepi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length}  characters!`
  );
}
// Iteration 3: Loops
//for(let i=0;i<1000;i++)
//for(let i=0;i<6;i++){
//console.log(i)
//}

/*
var caracterProcesado = hacker1.charAt(0)
console.log(caracterProcesado);
caracterProcesado = hacker1.charAt(1)
console.log(caracterProcesado);
caracterProcesado = hacker1.charAt(2)
console.log(caracterProcesado);
caracterProcesado = hacker1.charAt(3)
console.log(caracterProcesado);
caracterProcesado = hacker1.charAt(4)
console.log(caracterProcesado);
caracterProcesado = hacker1.charAt(5)
console.log(caracterProcesado);


for
    (let i=0;i<6;i++){
        hacker1.charAt(i)
    console.log(i)
}*/
let i = 0;
let resultadoEjercicio = "";

while (i < hacker1.length) {
  let caracterMayuscula = hacker1.charAt(i).toUpperCase();
  resultadoEjercicio = resultadoEjercicio + caracterMayuscula;
  if (i != hacker1.length - 1) resultadoEjercicio = resultadoEjercicio + " ";
  //console.log(resultadoEjercicio);
  i++;
}

let resultadoEjercicioB = "";
for (let i = 0; i < hacker2.length; i++) {
  let caracter = hacker2.charAt(i);
  resultadoEjercicioB = caracter + resultadoEjercicioB;
  // console.log(resultadoEjercicioB);
}

let resultadoEjercicioC = "";
let longituddelacadenamascorta = 0;
if (hacker1.length > hacker2.length) {
  longituddelacadenamascorta = hacker2.length;
} else if (hacker1.length <= hacker2.length) {
  longituddelacadenamascorta = hacker1.length;
}

for (let i = 0; i < longituddelacadenamascorta; i++) {
  let caracterA = hacker1.charAt(i);
  let caracterB = hacker2.charAt(i);
  if (hacker1.charAt(i) < hacker2.charAt(i)) {
    resultadoEjercicioC = "drivers";
    break;
  } else if (hacker1.charAt(i) > hacker2.charAt(i)) {
    resultadoEjercicioC = "navigator";
    break;
  } else {
    resultadoEjercicioC = "same";
    if (i == longituddelacadenamascorta - 1) {
      //si hemos llegado al último caracter de la cadena más corta
      if (hacker1.length > hacker2.length) {
        resultadoEjercicioC = "navigator";
      } else if (hacker1.length < hacker2.length) {
        resultadoEjercicioC = "drivers";
      }
    }
  }
}

if (resultadoEjercicioC == "drivers") {
  console.log("The driver's name goes first.");
} else if (resultadoEjercicioC == "navigator") {
  console.log("Yo, the navigator goes first, definitely.");
} else if (resultadoEjercicioC == "same") {
  console.log("What?! You both have the same name?");
}

/*
switch (resultadoEjercicioC) {
  case "drivers":
    console.log("The driver's name goes first.");
    break;
  case "navigator":
    console.log("Yo, the navigator goes first, definitely.");
    break;
  case "same":
    console.log("What?! You both have the same name?");
    break;
}
*/
