
console.log("I'm ready!");

const hacker1 = "Edu";
const hacker2 = "Google";
let driverName = '';
let driverNameReverse = '';

// Iteration 1: Names and Input
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Itenoderation 3: Loops
for (char of hacker1) {
    if (driverName.length > 0) {
        driverName += " " + char.toUpperCase()
        continue;
    }
    driverName += char
}

console.log(driverName);

for (let charIndex = driverName.length - 1; charIndex >= 0; charIndex--) {
    driverNameReverse += driverName[charIndex]
}

console.log(driverNameReverse)

// Bonus 1:
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare augue et purus sollicitudin, non tempor ligula porttitor. Donec urna elit, pharetra id tellus sit amet, tincidunt tempus ante. Maecenas ac urna orci. Vestibulum ut velit et lacus dignissim fringilla. Suspendisse scelerisque mi eros, at luctus sapien pretium a. Cras euismod fringilla velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam gravida accumsan tincidunt. Praesent at molestie dolor. Suspendisse potenti. Nam iaculis sapien nec lectus aliquam fringilla. Aliquam quis tellus eget risus porttitor varius ac a mauris. Etiam placerat tellus non massa ultricies, et ornare dolor molestie. Etiam imperdiet lacus ac leo venenatis egestas. Nullam sed mollis lectus. Etiam rhoncus a lectus quis facilisis. Phasellus nunc velit, scelerisque ut tempor a, feugiat sed magna. Duis metus augue, ultricies sit amet ornare ut, luctus sed massa. Nam nunc augue, euismod vel commodo faucibus, facilisis et massa. Donec quis ornare orci. Curabitur pretium ante vitae pulvinar auctor. Pellentesque ac libero nec est pellentesque venenatis sed at lorem. Aliquam sit amet accumsan turpis. Duis accumsan neque enim, quis porttitor tortor consequat in. Donec condimentum cursus dapibus. Sed semper maximus nunc at malesuada. Donec sed ullamcorper tortor. Integer ut dolor eu mauris fermentum gravida.'

let countWords = 0;
let countWordsEt = 0;

for (char of loremIpsum) {
    if (char != " ") {
        countWords++
    }

    if (char === "et") {
        countWordsEt++
    }
}

console.log(`Bonus 1 >> Palabras totales: ${countWords}. Palabras "et": ${countWordsEt}`)

// Bonus 2:
let phraseToCheck = 'A man, a plan, a canal, Panama!';
let phraseToCheckNoSpaces = '';
let phraseToCheckReverse = '';

for (char of phraseToCheck.toLocaleLowerCase()) {
    if (char === " " || char === "," || char === "." || char === "!") {
        continue;
    }
    phraseToCheckNoSpaces += char
}

for (let charIndex = phraseToCheckNoSpaces.length - 1; charIndex >= 0; charIndex--) {
    phraseToCheckReverse += phraseToCheckNoSpaces[charIndex]
}

if (phraseToCheckNoSpaces === phraseToCheckReverse) {
    console.log(`La cadena de texto: "${phraseToCheck}" es un palíndromo.`)
} else {
    console.log(`La cadena de texto: "${phraseToCheck}" no es un palíndromo.`)
}