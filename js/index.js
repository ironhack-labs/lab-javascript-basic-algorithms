// Iteration 1: Names and Input
console.log("estamos ready");
let hacker1 = "dennis"
console.log(`el nombre del hacker es ${hacker1}`);
let navegador = "chrome"
console.log(`el nombre del hacker es ${navegador}`);




// Iteration 2: Conditionals
if (hacker1.length > navegador.length) {
    console.log(`${hacker1} tiene el nombre mas largo que ${navegador}`);
} else if (hacker1.length < navegador.length) {
    console.log(`${navegador} tiene el nombre mas largo que ${hacker1}`);
} else if (hacker1.length < navegador.length) {
    console.log(`${navegador} y ${hacker1}, su nombre es del mismo tama;o`);

}







// Iteration 3: Loops

//nombre con espacios
let nombre = '';
for (let index = 0; index < hacker1.length; index++) {
    nombre += hacker1[index].toUpperCase() + ' ';

    if (index === hacker1.length - 1) {
        console.log(nombre);

    }
}

//invertir cadena
let nombreInvertido = ''
for (let index = hacker1.length - 1; index >= 0; index--) {
    nombreInvertido += hacker1[index];

    if (index === 0) {
        console.log(nombreInvertido);

    }

}

// orden loexicografico
console.log(hacker1.localeCompare(navegador));
if (hacker1.localeCompare(navegador) > 0) {
    console.log("El nombre del conductor va primero");

} else if (hacker1.localeCompare(navegador) < 0) {
    console.log("El nombre del navegador va primero");

} else {
    console.log("¡¿Qué?! ¿Ambos tienen el mismo nombre?");

}


//bonus

let parrafo1 = "Lorem ipsum dolor sit amet,consectetur adipisicing elit.Consequuntur illo ab accusamus minima, doloribus maxime tenetur quis sequi officia eligendi expedita saepe sunt est voluptatum.Odit fugiat veritatis inventore reiciendis!"
let parrafo2 = "Lorem ipsum dolor sit amet,consectetur adipisicing elit.Consequuntur illo ab accusamus minima, doloribus maxime tenetur quis sequi officia eligendi expedita saepe sunt est voluptatum.Odit fugiat veritatis inventore reiciendis!"
let parrafo3 = "Lorem ipsum dolor sit amet,consectetur adipisicing elit.Consequuntur illo ab accusamus minima, doloribus maxime tenetur quis sequi officia eligendi expedita saepe sunt est voluptatum.Odit fugiat veritatis inventore reiciendis!"

let cadena = {
    parrafo1,
    parrafo2,
    parrafo3
}

console.log(parrafo1.length); //tama;o del texto
console.log(parrafo1.split(" ").length); //numero de palabras
console.log(parrafo1.indexOf("et")); //numero de veces que


console.log(cadena);
//invertir
let paraInvertir = 'Gato taco'
let invertir = ''

for (let index = paraInvertir.length - 1; index >= 0; index--) {
    invertir += paraInvertir[index];

    if (index === 0) {

        if (invertir.toLowerCase().replace(' ', '') === paraInvertir.toLowerCase().replace(' ', '')) {
            console.log("es una palabra polindrome");

        } else {
            console.log("No es una palabra polindrome");
        }

    }

}