// Iteration 1: Names and Input
const hacker1 = "Jose";
console.log("The driver's name is " + hacker1);

const hacker2 = "Mael";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length<hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let capsDriver = "";
for (let i=0; i<hacker1.length; i++) {
    capsDriver += hacker1[i].toUpperCase() + " ";
    if (i<hacker1.length-1) {
        capsDriver += " "
    }
}
console.log(capsDriver);

let nameReversed = "";
for (let i=hacker2.length-1; i>=0; i--) {
    nameReversed += hacker1[i];
}
console.log(nameReversed);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}

// BONUS 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tortor ac turpis molestie laoreet. Maecenas sagittis varius erat. Sed feugiat tortor et suscipit venenatis. Proin luctus augue et purus sodales condimentum. Duis molestie a risus sed molestie. Integer malesuada a velit ac interdum. Nulla lacus risus, sagittis eu enim sit amet, interdum egestas augue. Praesent vitae malesuada ligula. Donec vel nibh eu felis laoreet aliquet eu ut est. In volutpat justo sit amet mauris ultrices, eu egestas dui pellentesque. Donec non quam posuere, posuere felis eu, mollis ex. Sed congue erat dui. Pellentesque sed bibendum purus. Phasellus neque metus, luctus sed neque a, lobortis convallis urna. In hac habitasse platea dictumst. In eget felis metus. Fusce mattis auctor iaculis. Quisque vitae sodales nunc, id ullamcorper quam. Donec odio odio, elementum vel enim laoreet, scelerisque volutpat nulla. Suspendisse non nisl quis tellus faucibus tincidunt. Aliquam eu orci at augue sollicitudin vestibulum. Quisque sollicitudin scelerisque dui eu elementum. Vestibulum nisi ipsum, interdum et leo in, gravida fringilla neque. Fusce venenatis cursus magna, non aliquet lacus volutpat ut. In hac habitasse platea dictumst. Integer nisi elit, imperdiet non fermentum sit amet, sagittis eu massa. Aenean eros odio, tempor eu odio ac, sodales hendrerit odio. Nullam ac sem euismod, consequat purus vitae, pharetra dui. Ut dapibus libero eget orci pretium, id accumsan massa rhoncus. Donec mollis libero vitae vulputate aliquam. Aliquam consequat elementum risus, non molestie libero congue et. Nunc sodales vestibulum elementum. Fusce ut elementum libero. Phasellus finibus bibendum dolor, vitae tempor risus fermentum et. Donec eu pretium ipsum, pharetra feugiat sapien. Donec auctor, neque in feugiat scelerisque, libero nulla ultrices nunc, sit amet porttitor diam lectus sed enim. Vestibulum faucibus massa volutpat malesuada sollicitudin. Pellentesque gravida justo quis orci porta gravida. Phasellus mattis ac lacus sit amet lobortis.";

let wordsNumber = 0;
for (let i=0; i<longText.length; i++) {
    if (longText[i] !== " " && (i === 0 || longText[i-1] === " ")) {
        wordsNumber++;
    }
}
console.log(wordsNumber);

let etNumber = 0;
for (let i=0; i<longText.length; i++) {
    if ((longText[i]+longText[i+1]) === "et" && longText[i-1] === " " && (longText[i+2] === " " || longText[i+2] === "." || longText[i+2] === ",")) {
        etNumber ++;
    }
}
console.log(etNumber);


// BONUS 2

let phraseToCheck = "";
let phraseLetters = ""; 
let phraseReversed = "";

for (let i=0; i<phraseToCheck.length; i++) {
    let lets = phraseToCheck[i];
    let letsLower = lets.toLowerCase();
    if (letsLower >= "a" && letsLower <= "z") {
        phraseLetters += letsLower;
    }
}

for (let y=phraseLetters.length-1; y>=0; y--) {
    phraseReversed += phraseLetters[y];
}

if (phraseReversed === phraseLetters) {
    console.log("'" + phraseToCheck + "' is a palindrome");
} else {
    console.log("'" + phraseToCheck + "' is not a palindrome"); 
}