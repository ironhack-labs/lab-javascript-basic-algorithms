// Iteration 1: Names and Input
hacker1 = "nelson";
console.log("The driver's name is " + hacker1);
hacker2 = "maria";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
    }else if(hacker2.length > hacker1.length){
            console.log("It seems that the navigator has the longest name, it has " +  hacker2.length + " characters");
        }else{
            console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
        }
    
// Iteration 3: Loops


let hacker1EnMayusculasConEspacios = "";

for (let i = 0; i < hacker1.length; i++) {
    // Verificamos si el carácter está en minúsculas (entre 'a' y 'z' en ASCII)
    if (hacker1.charCodeAt(i) >= 97 && hacker1.charCodeAt(i) <= 122) {
        // Convertimos el carácter a mayúsculas sumándole la diferencia entre las
        // posiciones de 'a' en ASCII (97) y 'A' en ASCII (65)
        hacker1EnMayusculasConEspacios += String.fromCharCode(hacker1.charCodeAt(i) - 32);
    } else {
        // Si el carácter no está en minúsculas, lo dejamos como está
        hacker1EnMayusculasConEspacios += hacker1[i];
    }

    // Agregamos un espacio en blanco después de cada carácter, excepto después del último
    if (i < hacker1.length - 1) {
        hacker1EnMayusculasConEspacios += " ";
    }
}

console.log(hacker1EnMayusculasConEspacios); // Esto imprimirá "P E D R O"
//console.log(hacker1Mayusculas); // Esto imprimirá la variable hacker1

let cadenaAlReves = "";

for (i = hacker2.length - 1; i >= 0; i--) {
    cadenaAlReves += hacker2[i];
}
console.log(cadenaAlReves); // Esto imprimirá el nombre al revez



if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's " + hacker1 + " goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log(hacker2 + " , the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name? " + hacker1); 
}










