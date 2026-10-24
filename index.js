let driverName = "Naruto";
console.log(`the driver's name is ${driverName}`);

let navigatorName = "Sasuke"
console.log("The navigator's name is " + navigatorName);

if (driverName.length === navigatorName.length) {
    console.log(`Wow, you both have equally long names, ${driverName.length} characters !`);
}
else if (driverName.length < navigatorName.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`);
}
else if (driverName.length > navigatorName.length) {
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`)
}

let toUpperCase = "";
console.log(driverName.toUpperCase()); 
let split = "";
console.log(driverName.split(""))

let textInverse = "";
for (let i = navigatorName.length - 1; i >= 0; i--) {
    textInverse += navigatorName[i];
}
console.log(textInverse);

if (driverName < navigatorName) {
    console.log("The driver's name goes first.");
}
else if (driverName > navigatorName) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

// let navigatortName = "";
// const texteInverse = navigatorName.split('').reverse().join('');
// console.log(texteInverse);

const longText = "Le Lorem Ipsum est un texte de remplissage utilisé dans le secteur de l'imprimerie et de la composition. Depuis 1966, il est devenu la norme pour les textes factices, lorsque des graphistes de Letraset et James Mosley, bibliothécaire à la St Bride Printing Library de Londres, ont utilisé une traduction de Cicéron de 1914 et l'ont modifiée pour créer un texte de remplissage pour les feuilles de texte Letraset. Il a traversé les décennies et l'avènement de la composition électronique sans subir de modifications majeures. Sa popularité a explosé grâce à ces feuilles, puis plus récemment avec les logiciels de PAO comme Aldus PageMaker et Microsoft Word, qui intègrent des versions de Lorem Ipsum.";

// nombre de mots
const wordsNumber = longText.split("");
console.log("Nombre de mots :", wordsNumber.length);



// Palindrome
let phraseToCheck ="A man, a plan, a canal, Panama!";
let cleaned = "";
for (let a = 0; a < phraseToCheck.length; a++) {
    let character = phraseToCheck[a].toLowerCase();
    if (character === " " || character === "'" || character === "!" || character === "," || character === ".") {
    continue;
}
cleaned += character;
}

let isPalindrome = true;
for (let a = 0; a < cleaned.length / 2; a++) {
    if (cleaned[a] !== cleaned[cleaned.length - 1 - a]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

