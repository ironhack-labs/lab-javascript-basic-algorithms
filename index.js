// Iteration 1: Names and Input
let hacker1 = "Antonio"
console.log(`El nombre del conductor es ${hacker1}`);
let hacker2 = "Juan"
console.log(`El nombre del navegador es ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`Parece que el navegador tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
} else {
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`);
}

// Iteration 3: Loops
//3.1
let driverNameUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        driverNameUpperCase += hacker1[i].toUpperCase();
    } else {
        driverNameUpperCase += hacker1[i].toUpperCase() + " ";
    }
}
console.log(driverNameUpperCase);

//3.2
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);
//3.3
let comparison = 0;

for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if (hacker1[i] < hacker2[i]) {
        comparison = -1;
        break;
    } else if (hacker1[i] > hacker2[i]) {
        comparison = 1;
        break;
    }
}
if (comparison === 0) {
    if (hacker1.length < hacker2.length) {
        comparison = -1;
    } else if (hacker1.length > hacker2.length) {
        comparison = 1;
    }
}
if (comparison === -1) {
    console.log("El nombre del conductor va primero.");
} else if (comparison === 1) {
    console.log("¡El navegador va primero, definitivamente!");
} else {
    console.log("¿Qué?! ¿Ambos tienen el mismo nombre?");
}