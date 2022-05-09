console.log("I'm ready!");

// Iteration 1: Names and Input
let driver = "Arthur";
console.log(`The driver name is ${driver}`);

let navigator = "Sohayl";
console.log(`The navigator name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log(
        `'The driver has the longest name, it has ${driver.length} characters.'`
    );
} else if (driver.length < navigator.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${navigator.length} characters`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${driver.length} characters!`
    );
}

// Iteration 3: Loops
for (letter of driver) {
    process.stdout.write(letter.toUpperCase() + " ");
}
console.log();

for (i = navigator.length - 1; i >= 0; i -= 1) {
    process.stdout.write(navigator[i]);
}
console.log();

//Easy way
if (driver.localeCompare(navigator) < 0) {
    console.log("The driver's name goes first.");
} else if (driver.localeCompare(navigator) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//Hard Way
for (i = 0; i <= driver.length; i++) {
    if (!(navigator[i])) {
        console.log("Yo, the navigator goes first definitely.");
        break
    }
    if (i === driver.length) {
        if (driver.length === navigator.length) {
            console.log("What?! You both have the same name?");
            break
        }
        if (driver.length < navigator.length) {
            console.log("The driver's name goes first.");
            break
        }
        break
    }
    
    if (driver[i].toLowerCase() < navigator[i].toLowerCase()) {
        console.log(`The driver's name goes first.`)
        break
    }
    else if (driver[i].toLowerCase() > navigator[i].toLowerCase()) {
        console.log(`Yo, the navigator goes first definitely.`)
        break
    }
}


// Bonus1
let loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper consequat massa, ut pharetra mi 
bibendum nec. Cras placerat nunc nec tellus molestie aliquet. Phasellus elit ligula, suscipit sed dui pretium, porta lobortis elit. 
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam semper tempus tincidunt. 
Sed vel lacus vitae diam rhoncus egestas. Integer pharetra neque eu varius pulvinar. Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Fusce placerat sapien eu purus laoreet viverra. Pellentesque maximus commodo semper. Nunc magna odio, ullamcorper 
et aliquet ac, gravida nec quam. Duis tempor turpis sapien, eget blandit massa aliquam sed. Nulla facilisi. In pellentesque dolor 
tellus, sit amet pharetra risus auctor in. Phasellus nunc ante, egestas et tincidunt sit amet, pulvinar ut elit. Vestibulum eu 
laoreet dui. Integer vel dignissim ligula. Donec at dictum libero. Aenean egestas faucibus nulla, nec laoreet sapien tempus quis. 
Nunc eget venenatis eros, quis ornare velit. Vivamus ac diam et enim viverra aliquam vel nec dolor. Nullam in tempor leo, ac 
pretium tellus. Proin mattis rhoncus mauris at iaculis. Maecenas vehicula mollis lorem sit amet euismod. Pellentesque habitant 
morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac nibh nec velit tempus suscipit. In sapien nisl, 
sollicitudin ac turpis a, iaculis aliquet sapien. Aliquam viverra nulla arcu, id ornare arcu molestie vel. Aliquam vel augue nec 
nulla aliquet egestas. Morbi ornare nulla eget ex blandit, a rhoncus ex convallis. Nullam tincidunt orci quam, sed dapibus risus 
feugiat vitae. Aliquam quis convallis eros. Curabitur in nulla a felis ornare accumsan ut vitae mi. Curabitur mollis leo dolor, 
nec placerat sem semper vel. Praesent vitae porta risus. Sed convallis leo eros, in pulvinar urna rutrum et. Aliquam erat volutpat. 
Mauris tincidunt vulputate volutpat. Vivamus at lectus sollicitudin tellus rhoncus laoreet at ut leo. Aenean tempus iaculis aliquam. 
Etiam iaculis, est non mollis sagittis, risus elit aliquam diam, quis faucibus metus mi vitae nibh. Vestibulum ultrices nunc 
mauris, vitae molestie elit condimentum quis. Suspendisse potenti.`

let wordsCount = 1

for (let char of loremString) {
    if (char === " ") {
        wordsCount += 1
    }
}
console.log(`The text contains ${wordsCount} words`)

let etCount = 0
for (i = 0; i < loremString.length; i++) {
    if ((loremString[i] === 'e') && (loremString[i+1] === 't')) {
        etCount += 1
    }
}
console.log(`The word 'et' appears ${etCount} times`)


//Bonus2 - Not done ...
let phraseToCheck = 'A man, a plan, a canal, Panama'
phraseToCheck = phraseToCheck.toLowerCase()
let phraseToCheckNoSpaces = phraseToCheck.replace(/ /g|/,/g|/!/g, '')
// phraseToCheckNoSpaces = phraseToCheckNoSpaces.replace(, '')
// phraseToCheckNoSpaces = phraseToCheckNoSpaces.replace(/!/g, '')
// phraseToCheckNoSpaces = phraseToCheckNoSpaces.replace(/,/g, '')
console.log(phraseToCheckNoSpaces)

L = phraseToCheckNoSpaces.length
console.log(L)
LRound = Math.floor(phraseToCheckNoSpaces.length/2)
console.log(LRound)


if (phraseToCheckNoSpaces % 2 === 0) {
    for (i=0; i<=L/2; i++) {
        if (phraseToCheckNoSpaces[i] != phraseToCheckNoSpaces[L-i-1]) {
            console.log('Not a palindrome')
            break
        }
        if (i<=L/2) {
            console.log('It is a palindrome')
        }
    }
}
else {
    for (i=0; i<LRound; i++) {
        console.log(phraseToCheckNoSpaces[i])
        console.log(phraseToCheckNoSpaces[L-i-1])
        if (phraseToCheckNoSpaces[i] != phraseToCheckNoSpaces[L-i-1]) {
            console.log('Not a palindrome')
            break
        }
        console.log(LRound-1)
        if (i === LRound-1) {
            console.log('It is a palindrome')
        }
    }
}


