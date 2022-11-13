// Iteration 1: Names and Input

const hacker1 = 'Sofía';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'David';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console,log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let upperName = "";
for (i = 0; i < hacker1.length; i++) {
    upperName = upperName + hacker1[i].toUpperCase() + " ";
}
console.log(upperName);

let reverseName = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}


//Bonus 1

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut elementum risus, porttitor venenatis turpis. Donec non est a ligula cursus interdum. Nulla porttitor lacus sit amet condimentum eleifend. Donec ligula augue, placerat ac purus eget, convallis viverra odio. Phasellus urna lorem, dictum a nisl et, luctus pellentesque justo. Vivamus at convallis urna. Aenean semper volutpat suscipit. Donec vitae nisl nec risus aliquam imperdiet at quis neque. Cras libero elit, scelerisque vitae nunc eget, suscipit vulputate ligula. \
Morbi faucibus tristique orci ut dapibus. Nunc mi diam, cursus et pellentesque in, tincidunt vitae leo. Integer mauris velit, tristique ac finibus tempus, vestibulum non ante. Sed tempor ante mi, vitae vestibulum ex bibendum non. Quisque scelerisque mi nisi, ut maximus purus iaculis in. Ut ut lorem nisi. Cras blandit maximus orci a convallis. Maecenas eu cursus odio. Duis vitae facilisis mauris, quis porta orci. Duis suscipit justo laoreet odio venenatis, eu dignissim diam tincidunt. Vestibulum nulla dui, condimentum eget tincidunt id, eleifend vel massa. Aliquam mollis suscipit semper. \
Integer at diam libero. Quisque eget lectus aliquet, pharetra elit laoreet, maximus risus. Duis vel diam elementum erat facilisis pharetra in eu libero. Nulla facilisi. Sed id sodales metus. Aliquam erat volutpat. Sed fermentum turpis eu nisl blandit dapibus. Mauris tortor erat, pharetra ac urna sit amet, congue hendrerit turpis. Mauris commodo cursus massa quis tempor. Curabitur in consequat quam. Donec placerat sollicitudin elit, ac venenatis erat tempus et. Etiam vestibulum rhoncus luctus. Aliquam fringilla rhoncus arcu, eget egestas lorem convallis et. Nunc et pretium arcu, vitae pulvinar mi. "

let wordCount = 0;

for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === ' ') {
        wordCount = wordCount + 1;
    }
}

console.log(wordCount);

let etCount = 0;

for (i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === 'e' && loremIpsum[i + 1] === 't' && 
    (loremIpsum[i + 2] === ' ' || loremIpsum[i + 2] === ',' || loremIpsum[i + 2] === '.') && 
    (loremIpsum[i - 1] === ' ' || loremIpsum[i - 1] === ',' || loremIpsum[i - 1] === '.')) {
        etCount = etCount + 1;
    }
}

console.log(etCount);


//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let phraseToCheckPlain = "";

for (i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] != ',' && phraseToCheck[i] != '!' && phraseToCheck[i] != '.' && phraseToCheck[i] != ' ') {
        phraseToCheckPlain = phraseToCheckPlain + phraseToCheck[i];
    }
}

let reversePhraseToCheck = "";
for (i = phraseToCheckPlain.length - 1; i >= 0; i--) {
    reversePhraseToCheck = reversePhraseToCheck + phraseToCheckPlain[i];
}

if (phraseToCheckPlain.toLowerCase() === reversePhraseToCheck.toLowerCase()) {
    console.log("It's a palindrome!");
} else {
    console.log("Not a palindrome.")
}