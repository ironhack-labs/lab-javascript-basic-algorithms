// Iteration 1: Names and Input

let hacker1 = "Juan"; // Driver

let hacker2 = "Samuel"; // Navigator

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);





// Iteration 2: Conditionals

if(hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let driverCapital = "";
let navigatorReverse = "";

for (let i=0; i<hacker1.length; i++) {
    driverCapital += hacker1[i].toUpperCase() + " ";
}

console.log(driverCapital);

for (let i=hacker2.length-1; i>=0; i--) {
    navigatorReverse += hacker2[i]
}

console.log(navigatorReverse);


let message = "";

for (let i=0; i<hacker1.length || i<hacker2.length; i++ ) {
        if(hacker1===hacker2) {
            message = "What?! You both have the same name?";
        }
        else if(hacker1[i]<hacker2[i]) {
            message = "The driver's name goes first.";
        }
        else if(hacker1[i]>hacker2[i]) {
            message = "Yo, the navigator goes first, definitely.";
        }
}

console.log(message);


// Bonus Time


let contadorPalabras = 0;
let contadorPalabrasLatin = 0;

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin ligula libero, tincidunt varius leo molestie in. Ut at arcu ac leo placerat porta sit amet aliquam ex. Cras sit amet tristique velit. Cras odio orci, commodo quis sem a, interdum imperdiet mi. Suspendisse ante dolor, condimentum eget velit a, imperdiet imperdiet purus. Nam tristique sed magna a luctus. Donec pharetra fermentum justo a tristique. Proin sit amet ultrices libero. Praesent quis tincidunt quam, eu fringilla ipsum. Integer pellentesque viverra libero porttitor pellentesque. Nam accumsan nulla vitae diam commodo semper. Donec iaculis massa est, ac tristique tellus cursus ut. Etiam venenatis non orci ac rhoncus. Etiam tempor urna ante, sit amet imperdiet diam placerat sit amet. Nam in ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin ligula libero, tincidunt varius leo molestie in. Ut at arcu ac leo placerat porta sit amet aliquam ex. Cras sit amet tristique velit. Cras odio orci, commodo quis sem a, interdum imperdiet mi. Suspendisse ante dolor, condimentum eget velit a, imperdiet imperdiet purus. Nam tristique sed magna a luctus. Donec pharetra fermentum justo a tristique. Proin sit amet ultrices libero. Praesent quis tincidunt quam, eu fringilla ipsum. Integer pellentesque viverra libero porttitor pellentesque. Nam accumsan nulla vitae diam commodo semper. Donec iaculis massa est, ac tristique tellus cursus ut. Etiam venenatis non orci ac rhoncus. Etiam tempor urna ante, sit amet imperdiet diam placerat sit amet. Nam in ullamcorper massa Maecenas dignissim facilisis vestibulum. Vestibulum ac elementum est, sit amet pretium ante. Nunc at lobortis orci. Duis vulputate vitae diam id iaculis. Mauris luctus metus leo, non eleifend ante ultrices vel. Aliquam bibendum venenatis sem at cursus. Praesent orci augue, volutpat et bibendum vel, viverra a mi.";


for (let i=0; i<longText.length; i++) {
    if (longText[i] === " ") {
        contadorPalabras++;
    }
}

console.log(contadorPalabras+1);

for (let i=0; i<longText.length; i++) {
    let twoChar = longText[i] + longText[i+1];
    
    if (twoChar === "et") {
        contadorPalabrasLatin++;
    }
}

console.log(contadorPalabrasLatin);


let phraseToCheck = "stEp on no Pets";
let reconvertirFrase = "";
let fraseInversa = "";

for (let i=0; i<phraseToCheck.length; i++) {
    
    let letraMinuscula = "";
/*
    if (phraseToCheck[i] === phraseToCheck[i].toUpperCase()) {
        letraMinuscula = phraseToCheck[i].toLowerCase();
        reconvertirFrase += letraMinuscula;
        console.log(reconvertirFrase, letraMinuscula);
    }  
    else if (phraseToCheck[i] !== phraseToCheck[i].toLowerCase()) {
        continue;
    }
    else {
        reconvertirFrase += phraseToCheck[i];
    }
    */
   

    
    if (phraseToCheck[i] === " ") {
        continue;
    }
    else if (phraseToCheck[i] === phraseToCheck[i].toUpperCase()) {
        letraMinuscula = phraseToCheck[i].toLowerCase();
        reconvertirFrase += letraMinuscula;
        //console.log(reconvertirFrase, letraMinuscula);
    }
    else {
        reconvertirFrase += phraseToCheck[i];
    }
        
}

 // console.log(reconvertirFrase);

for (let i=reconvertirFrase.length-1; i>=0; i--) {
    fraseInversa += reconvertirFrase[i];
}

// console.log(fraseInversa);



if(reconvertirFrase === fraseInversa) {
    console.log("Es un Palíndromo!!");
}
else if (reconvertirFrase !== fraseInversa) {
    console.log("No son iguales");
}



