// Iteration 1: Names and Input
const hacker1 = "Martin";
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Mary";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const charsHacker1 = hacker1.length;
const charsHacker2 = hacker2.length;

if (charsHacker1 > charsHacker2) {
    console.log(`The driver has the longest name, it has ${charsHacker1} characters.`)
} else if (charsHacker1 < charsHacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${charsHacker2} characters.`)
} else if (charsHacker1 === charsHacker2) {
    console.log(`Wow, you both have equally long names, ${charsHacker1} characters!`)
}

// Iteration 3: Loops
let capitalLetters = "";
capitalLetters += hacker1[0];
for (let i = 1; i < hacker1.length; i++) {

    capitalLetters += ` ${hacker1[i].toUpperCase()}`; 
}

console.log(capitalLetters);

let nameReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    nameReverse += hacker1[i];
}

console.log(nameReverse);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}



// Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate nibh in nisi malesuada imperdiet. Vestibulum sit amet mi eu ex malesuada ultricies sed id arcu. Nunc suscipit est nunc, at pharetra erat ultrices eu. Sed fringilla sollicitudin augue, vitae lacinia erat ullamcorper id. Maecenas sed odio urna. Aliquam vel eros augue. Aenean pulvinar arcu metus, non sagittis nunc sodales et. Integer porta magna dolor, a eleifend ante fringilla et. Suspendisse rutrum ante varius justo consectetur, non blandit elit euismod. Pellentesque dapibus, odio sit amet suscipit dignissim, nisi leo posuere nisi, sit amet sagittis urna augue a tellus. Cras tincidunt vel sapien in tincidunt.

Nam viverra tempus venenatis. Suspendisse sit amet convallis orci, sit amet ornare magna. Etiam dictum tincidunt metus, vel varius lacus lobortis congue. Nam varius lectus eu placerat dignissim. Nulla facilisi. Sed eu lacus non massa dictum imperdiet ut sit amet odio. Proin tempus eu purus in pharetra. Pellentesque eget orci nec sem pellentesque euismod. Ut mollis, arcu et facilisis dictum, urna lectus rhoncus enim, a fringilla mi felis vitae ligula. Proin et ligula rutrum, placerat metus vitae, ornare dui. Suspendisse auctor venenatis risus, commodo elementum diam placerat ac.

Nulla est massa, egestas non ullamcorper a, ullamcorper laoreet ipsum. Proin facilisis pretium erat, quis vulputate tellus convallis quis. Ut nulla risus, pretium quis sapien sed, elementum feugiat dolor. Aenean ullamcorper pretium sollicitudin. Proin imperdiet congue fringilla. Nam felis urna, egestas sed pellentesque et, hendrerit in mi. Praesent elit erat, condimentum non leo sed, tempor volutpat mi.`

let counter = 1;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        counter++;
    }
}

console.log(counter);




let counterLatin = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] === " et ") {
        counterLatin++;
    }
}
console.log(counterLatin);



