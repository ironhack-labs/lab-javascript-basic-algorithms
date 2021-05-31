// Iteration 1: Names and Input


const hacker1 = "Pedro";
console.log(`The driver's name is: ${hacker1}`);

const hacker2 = "Margarida";
console.log(`The navigator's name is: ${hacker2}`);


// Iteration 2: Conditionals


if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
    spacedName = spacedName + hacker1[i].toUpperCase() + " ";
}

console.log(spacedName)


let invertedName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    invertedName = invertedName + hacker1[i];
}

console.log(invertedName);


if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);

} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1

const reallyBigText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada enim tellus, in feugiat nunc ultricies 
eget. Suspendisse sit amet vestibulum ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor faucibus 
semsed consequat. Suspendisse potenti. Praesent venenatis vulputate pharetra. Donec erat felis, volutpat et nulla et, commodo porta 
eros. Integer condimentum ante ipsum, id varius felis luctus venenatis. Orci varius natoque penatibus et magnis dis parturient montes, 
nascetur ridiculus mus. Phasellus vehicula nisi turpis, in vestibulum lacus efficitur et. Duis ultrices vestibulum arcu, sit amet 
aliquet orci sodales at. Quisque egestas euismod magna, id semper orci feugiat et. Vestibulum aliquet pulvinar interdum. 
Morbi at posuere tortor. Maecenas et ligula ex. Cras ullamcorper magna ullamcorper nibh vehicula, id maximus turpis accumsan. 
Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis mauris volutpat, semper ipsum ac, auctor turpis. 
Curabitur convallis eu lacus eu eleifend. Fusce consectetur est ipsum. Phasellus posuere felis et lorem interdum, 
quis vestibulum sem suscipit. Ut quis ullamcorper dui, eu posuere metus. Maecenas dignissim neque non porttitor congue. 
Nunc eu tincidunt libero. Mauris suscipit elementum urna. Ut vulputate sapien a enim blandit, quis iaculis diam ultrices. 
Mauris id rutrum metus, a porttitor magna. Curabitur accumsan nisi sodales, sagittis est a, elementum dui. Fusce fermentum 
ante orci, ac varius elit congue sodales. Aenean ultrices orci pretium interdum consequat. Donec sem dolor, 
pretium in tellus sit amet, fringilla sodales orci. Pellentesque habitant morbi tristique senectus et netus et malesuada 
fames ac turpis egestas. Nunc hendrerit commodo odio, quis congue mauris rutrum ac.`;


let numberOfEmptySpaces = 0;
let numberOfEt = 0;

// Checks to see if it starts with an et.
if (reallyBigText.startsWith('Et')) {
    numberOfEt++
}

for (let i = 0; i < reallyBigText.length; i++) {

    if (reallyBigText[i] === " ") {
        numberOfEmptySpaces++;
    }

    // it's looking for strings like: " et ", " et." and " et," 
    //not the pretties code, put it works, somewhat..
    if (reallyBigText[i] === " " && reallyBigText[i + 1] === "e" && reallyBigText[i + 2] === "t" && (reallyBigText[i + 3] === " " || reallyBigText[i + 3] === "." || reallyBigText[i + 3] === ",")) {
        numberOfEt++;
    }
}

// the number of words is just the number of empty spaces + 1
console.log(`The number of words is ${numberOfEmptySpaces + 1}.`);

console.log(`Et appears ${numberOfEt} times.`);


//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

// creating a string with only the letters of the original phrase
phraseToCheck = phraseToCheck.toLowerCase();
let tempWord = "";

for (let i = 0; i < phraseToCheck.length; i++) {

    // this will filter anything that isn't a lowercase letter
    if (phraseToCheck.charCodeAt(i) < 97 || phraseToCheck.charCodeAt(i) > 122) {
        continue;
    }

    tempWord = tempWord + phraseToCheck[i];

}

// Taking only the last half portion of the new string
const halfPoint = Math.ceil(tempWord.length / 2);

const subTempWord = tempWord.substring(halfPoint, tempWord.length);

// inverting the newly created string
let invertedSubTempWord = "";

for (let i = subTempWord.length - 1; i >= 0; i--) {
    invertedSubTempWord = invertedSubTempWord + subTempWord[i]
}
    
/* now comparing the inverted last half string with the first half of the
whole string, if it's a match, than it's a palindrome.
*/
if (tempWord.substring(0, tempWord.length / 2) === invertedSubTempWord) {
    console.log(`True, "${phraseToCheck}" is indeed a palindrome.`)
} else {
    console.log(`False, sadly "${phraseToCheck}" is not a palindrome.`);
}
