// Iteration 1: Names and Input
let hacker1 = 'Adrià'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Justyna'
console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Iteration 3: Loops
// SEPARATED UPPERCASE
let separatedUppercase = "";
for (let i = 0; i < hacker1.length; i++) {
    if (i > 0) {
        separatedUppercase += " ";
    }
    separatedUppercase += hacker1[i].toUpperCase();
}

console.log(separatedUppercase);


// BACKWARDS
let backwards = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    backwards += hacker1[i];
}

console.log(backwards);


// Bonus
// BONUS 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat leo id tellus mollis, nec ultricies sem pharetra. Etiam pellentesque mattis nulla a euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at mattis sem. Donec bibendum commodo mi, at molestie urna sagittis quis. Morbi euismod congue urna ac tincidunt. Nullam sit amet odio fermentum, pretium turpis lacinia, mattis libero. Quisque sollicitudin ligula ligula, eget lacinia risus ornare sit amet. Suspendisse cursus mi urna, ut pharetra justo malesuada vel. Ut interdum tristique lectus nec blandit. Donec viverra urna eu dictum aliquet. Curabitur luctus ultrices tortor. Praesent ut posuere dui, nec molestie nunc. Fusce at scelerisque lorem. Nulla mauris dolor, dictum posuere tincidunt eget, efficitur vitae enim. Phasellus venenatis, orci vel varius venenatis, lacus neque iaculis ligula, non tempus elit dolor vitae tellus.

Nam lacinia hendrerit ligula, vitae varius tellus. Sed congue laoreet nulla auctor malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce condimentum posuere vestibulum. Aenean auctor feugiat metus at porta. Proin sagittis arcu congue, aliquet mi ac, consequat nisi. Cras et vitae eleifend diam, sit amet convallis nisi. Vestibulum interdum rhoncus turpis a consectetur. Aliquam lacinia sapien ac sapien molestie rutrum. Nunc et turpis quis neque dignissim aliquet. Nunc sed sodales urna. Proin tincidunt consequat lacinia. Duis scelerisque dolor et at mauris placerat eleifend. Vestibulum nec elit aliquet, maximus nunc vel, consectetur magna. Mauris semper semper eleifend.

Pellentesque scelerisque at metus ut scelerisque. Class aptent taciti sociosqu et ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed ultrices mi. Donec a dignissim nulla. Sed dictum id arcu tempus facilisis. Nunc et ultricies augue, pulvinar fringilla mauris. Fusce mollis mollis urna, vitae porttitor ligula elementum sed. Nam sem risus, eleifend sed nulla in, tristique eleifend est.`

console.log(longText.length)


// WORD COUNTER
let wordCounter = 0
let inWord = false

for (let i = 0; i < longText.length; i++) {
    if (longText[i].match(/[a-zA-Z]/)) {
        if (!inWord) {
            wordCounter++;
            inWord = true;
        }
    } else {
        inWord = false;
    }
}

console.log(wordCounter)


// ET COUNTER
let etCounter = 0

for (let i = 0; i < longText.length; i++) {
    if(longText[i] === " ") {
        if(longText[i + 1] === "e") {
            if(longText[i + 2] === "t") {
                if(longText[i + 3] === " ") {
                    etCounter++
                }
            }
        }
    }
}

console.log(etCounter)



// BONUS 2
let phraseToCheck = "No 'x' in Nixon"
let cleanPalindrom = ""
let backwardsPalindrom = ""

// Clean the palindrom
for(let i = 0; i < phraseToCheck.length; i++) {
    if(phraseToCheck[i] !== "," && phraseToCheck[i] !== " " && phraseToCheck[i] !== "?"  && phraseToCheck[i] !== "'") {
        cleanPalindrom += phraseToCheck[i].toLowerCase();
    }   
}

// console.log(cleanPalindrom)

// Create backwards palindrom
for (let i = cleanPalindrom.length - 1; i >=0; i--) {
    backwardsPalindrom += cleanPalindrom[i].toLowerCase()    
}

// console.log(backwardsPalindrom)

if (cleanPalindrom === backwardsPalindrom) {
    console.log(phraseToCheck, 'is a palindrome')
} else {
    console.log(phraseToCheck, 'is NOT a palindrome')
}
