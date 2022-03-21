// Iteration 1: Names and Input
const driver = 'Jonathan'
console.log(`The drivers name is ${driver}`)

const navigator = 'Lilly'

console.log(`The navigators name is ${navigator}`)


// Iteration 2: Conditionals

// Count name length
// Compare name length
// Print final sentences

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
} else if (driver.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
} else {
    console.log(`Wow you both have equally long names, ${navigator.length}.`)
}

// Iteration 3: Loops
// chose drivers name
// Take name and unse upperCase() function
// use loop function to go through every character of the name and add a space behind it as often as the total number of characters
// consol log it

let upperCasedDriver = driver.toUpperCase(); 
console.log(upperCasedDriver)

let spacedDriver = "" 

for (let i = 0; i < upperCasedDriver.length; i++) {
    spacedDriver += upperCasedDriver[i] + " "
}
console.log(spacedDriver)

// printing navigator name in reverse order:
let reversedNavigator = ""

for (let i = navigator.length-1; i >= 0; i--) {
    reversedNavigator += navigator[i]
}
console.log(reversedNavigator)

// lexicographic order

if (driver.localeCompare(navigator) === -1) {
    console.log(`The drivers name goes first`)
} else if (driver.localeCompare(navigator) === 1) {
    console.log("Yo the navigators name goes first definetly")
} else if (driver.localeCompare(navigator) === 0) {
    console.log("What?! You both have the same names")
}

// BONUS Time 1
let loremIpsumString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit sed ipsum et posuere. Ut vitae vehicula neque. Curabitur tincidunt posuere finibus. Donec luctus, orci a lobortis vestibulum, libero mauris lacinia purus, sit amet facilisis erat metus sed nisl. Vestibulum eu elit placerat, interdum nisi sed, cursus odio. Nulla nec semper ex, sit amet lobortis magna. Donec eu dictum justo. Nullam laoreet laoreet tristique. Etiam nec euismod orci. Morbi auctor pharetra nibh, eu blandit sapien placerat nec. Integer varius, sem vitae tristique auctor, tortor est porttitor odio, at consectetur lectus leo vitae sem. Proin laoreet nulla vitae ante ultrices tempus. Aliquam quis nulla lacinia, pellentesque mi pulvinar, tempor lectus. Donec non leo nulla. Aliquam auctor justo nec justo auctor vestibulum. Phasellus at quam enim. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent pharetra erat id ipsum imperdiet scelerisque. Nullam justo tellus, ultricies quis eros a, tempus sollicitudin risus. Morbi elementum leo vel purus ullamcorper, vel varius est porta. Sed ullamcorper consequat nulla in blandit. Ut at urna quis massa viverra feugiat ut at nibh. Duis ante tortor, finibus vestibulum sollicitudin non, iaculis in eros. Sed urna urna, pellentesque vel sem pharetra, porttitor varius nibh. Fusce suscipit massa eget semper blandit. Pellentesque scelerisque non nisl a rhoncus. Nullam volutpat arcu diam, non scelerisque ex viverra at. Etiam mattis diam nec velit vulputate, vel accumsan nibh efficitur. Quisque nec risus id dui accumsan rutrum. Nam et enim tempor, aliquam ex vel, luctus augue. Nullam et mollis magna, pharetra lacinia elit. Quisque quis tellus elementum, viverra velit at, vulputate mauris."

const splitString = loremIpsumString.split(" ");

let wordCount = splitString.length
console.log(wordCount);

function countET(paragraph) {
    let count = 0
    for (let i = 0; i < paragraph.length; i++) {
        const character1 = paragraph[i];
        const character2 = paragraph[i + 1];
        const character3 = paragraph[i + 2];
        const character4 = paragraph[i + 3];

        if (character1 === " " && character2 === "e" && character3 === "t" && character4 " ") {
            count ++;
        }
    }
    return count;
}

console.log(countET(loremIpsumString));

// Bonus 2
let phraseToCheck = "Erika feuert nur untreue Fakire"
let phraseToCheckNoSpace = ""

 for (let i = 0; i < phraseToCheck.length; i++) {
     if (phraseToCheck[i] !== " ") {
         phraseToCheckNoSpace += phraseToCheck[i]
     }
 }
 console.log(phraseToCheckNoSpace);

phraseToCheckNoSpaceLowerCase = phraseToCheckNoSpace.toLowerCase();

let phraseToCheckNoSpaceLowerCaseReversed = "";

for (let i = phraseToCheckNoSpaceLowerCase.length-1; i >= 0; i--) {
    phraseToCheckNoSpaceLowerCaseReversed += phraseToCheckNoSpaceLowerCase[i]
}

console.log(phraseToCheckNoSpaceLowerCaseReversed)

if (phraseToCheckNoSpaceLowerCaseReversed === phraseToCheckNoSpaceLowerCase) {
    console.log("yes it's a palindrom.")
} else {
    console.log("no it's not a palindom.")
}
