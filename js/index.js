// Iteration 1: Names and Input
var hacker1 = "Adrian";
console.log(`The driver name is ${hacker1}`);

var hacker2 = "Pol";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
function nameLength() {
    if (hacker1.length > hacker2.length) {
        console.log("The driver has the longest name, " + hacker1 + " it has " + hacker1.length + " characters");
    } else if (hacker1.length < hacker2.length) {
        console.log("It seems that the navigator has the longest name," + hacker2 + "it has " + hacker2.length + " characters")
    } else {
        console.log("Wow, you both have equally long names," + hacker1.length + "characters!")
    }
}

nameLength();

// Iteration 3: Loops

//Exercise 3.1

var renameHacker1 = '';

for (let i = 0; i < hacker1.length; i++) {
    renameHacker1 += hacker1[i] + "";
}

console.log(renameHacker1.toUpperCase());
//Exercise 3.2

function reverse(hacker2) {
    var result = "";
    for (var i = hacker2.length - 1; i >= 0; i--)
        result += hacker2[i];
    console.log(result);
}
reverse(hacker2);


//Exercise 3.3
let hacker1 = "Adrian";
console.log(`The driver name is ${hacker1}`);

let hacker2 = "Pol";
console.log(`The navigator name is ${hacker2}`);

let hackers = [hacker1, hacker2];

function order(hackers) {
    for (let i = 0; i < hackers.sort(); i++) {}
    if (hacker1 < hacker2) {
        console.log(`he driver's ${hacker1} goes first.`);
    } else if (hacker1 > hacker2) {
        console.log(`Yo, the ${hacker2} goes first definitely.`)
    } else {
        console.log("What?! You both have the same name?")
    }
}
order(hackers);


//Bonus 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis mauris ante, eget tincidunt arcu facilisis vitae. Integer eu mauris eget nisl efficitur rutrum. Duis sollicitudin Praesent."

let text2 = text.split(" ");

let contador = 0;
for (i = 0; i < text2.length; i++) {
    contador++
}
console.log(contador);

function bonus1() {
    let palabraReplicada = "et";
    let i = 0,
        contador2 = 0;
    while (i !== -1) {
        i = text.indexOf(palabraReplicada, i);
        if (i !== -1) {
            i++
            contador2++
        }
    }

    return contador2;

}
bonus1();

// Bonus 2 - Solo he podido hacerlo de esta manera, solamente puede analizar una palabra de 5 letras, sabría hacerlo con reverse(). Nose que se me escapa para hacerlo de la manera correcta.

let palabra = "lotol";
let phraseToCheck = palabra.toLowerCase().reverse().split("");
let contador = 0

function bonus2() {
    for (i = 0; i < phraseToCheck.length; i++) {
        contador++
    }
    if ((phraseToCheck[0] == phraseToCheck[4]) && (phraseToCheck[1] == phraseToCheck[3])) {
        console.log("Es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
}