// Iteration 1: Names and Input
let hacker1 = "ecem";

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "noelia";

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
 
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let capitalLettersName = ""; 

for (let i = 0; i < hacker1.length; i++) {
    capitalLettersName += " " + hacker1[i].toUpperCase(); 
}

console.log(capitalLettersName)
console.log(capitalLettersName.slice(1))


let reversedName = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    reversedName += hacker1[i];
}

console.log(reversedName);

const hackersArray = [ hacker1, hacker2];
const sortedhackersArray = hackersArray.sort();

if ( sortedhackersArray[0] === hacker1) {
    console.log(`The driver's name goes first.`);
} else if ( sortedhackersArray[0] === hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log('What?! You both have the same name?')
}


//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis varius placerat. Mauris dignissim rhoncus rutrum. Donec dignissim ultricies cursus. Maecenas in mauris odio. Proin id molestie ligula, ut dignissim erat. Sed in rhoncus elit. Aliquam volutpat massa et consectetur molestie. Duis ut arcu at mi tempor commodo. Nam sit amet ligula sed orci ornare bibendum. In tincidunt malesuada feugiat. Cras lacinia vulputate nunc, in pellentesque ex viverra vitae. Donec scelerisque elementum dui, luctus commodo felis fringilla id. Mauris condimentum tempus orci. Vestibulum quis molestie lacus. Morbi a nibh non ipsum tristique congue vitae vel est. Proin feugiat elementum ante, in lobortis sem condimentum nec. Cras varius vulputate lorem, vel sollicitudin sapien volutpat eget. Vivamus vel nisi pulvinar, tempus risus pulvinar, rutrum nisi. Duis bibendum feugiat metus. Aliquam dignissim quis libero eu pellentesque. Morbi dapibus elit at ligula facilisis iaculis. Cras ut condimentum arcu. Suspendisse sollicitudin pharetra urna, semper lobortis ex eleifend vel. Donec vitae sodales risus. Integer eget ligula non augue viverra tempus. Sed vel eros malesuada sem lobortis ultricies. Proin et euismod ipsum. Suspendisse pellentesque consectetur justo, in pretium lorem aliquet eget. Aenean laoreet ornare fermentum. In ultricies elementum nunc. Phasellus ultrices erat erat, vitae laoreet sapien vehicula sit amet. Maecenas gravida fermentum porttitor. Quisque purus eros, mollis a pellentesque ac, scelerisque non massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit."

function countWords() {
    let emptySpaceCount = 0;
    for (let i=0; i < longText.length; i++) {
        if (longText[i] === " ") {
            emptySpaceCount += 1
        }
    }

    return emptySpaceCount + 1
}

console.log(countWords())


function countEt() {
    let etCount = 0;
    for (let i=0; i < longText.length; i++) {
        if (longText[i] + longText[i+1] === "et") {
            etCount += 1
        }
    }

    return etCount
}

console.log(countEt())


//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!"
let reversedPhrase = ""


for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    reversedPhrase += phraseToCheck[i];
}

let cleanPhrase = reversedPhrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
let cleanReversedPhrase = reversedPhrase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

console.log(cleanPhrase);
console.log(cleanReversedPhrase);


function checkPalindrome() {
  
  if  ( phraseToCheck === reversedPhrase)   {
    return true
  } else {
    return false
  }
   
}


console.log(checkPalindrome())