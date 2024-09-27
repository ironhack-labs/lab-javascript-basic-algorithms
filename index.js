// Iteration 1: Names and Input

// Driver
let hacker1 = "Tushar"
console.log(`The driver's name is ${hacker1}`);

// Navigator
let hacker2 = "Miguel"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals



if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ` + hacker1.length + ` characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops

// 3.1
let driverUpper = "";

for (let i = 0; i < hacker1.length; i++) {
  
    driverUpper += hacker1[i].toUpperCase() + " ";
}

console.log(driverUpper.trim())

// 3.2

let navReverse = "";

for (let j = hacker2.length -1; j >= 0 ; j--) {

    navReverse += hacker2[j]
}

console.log(navReverse)

// 3.3

if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else if (hacker2.localeCompare(hacker1) === 1) {
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus dolor sit amet tincidunt condimentum. Etiam vulputate dignissim nisi in sagittis. Sed luctus mi eget elit viverra, vitae aliquet libero cursus. Sed a varius libero. Proin sagittis, nulla eu sagittis tristique, dolor risus volutpat magna, lacinia venenatis velit nibh in quam. Pellentesque convallis condimentum magna, vel varius est mattis ut. Aliquam eu tempor orci. Ut pharetra gravida dui, sed commodo dui finibus id. Sed tristique libero dui, vitae consectetur est tempus vel. Fusce luctus risus mi, a mollis ex porttitor id. Phasellus vel iaculis ligula. Curabitur libero lorem, congue eu tristique in, porta sit amet nisi. Nullam sit amet massa odio. Nunc neque diam, gravida eget nunc sit amet, fermentum posuere ligula.

Donec auctor, dolor et vulputate maximus, nisl neque convallis elit, in rutrum dolor mi ut massa. Pellentesque eget augue ut diam lobortis tempus id a elit. Quisque suscipit rhoncus dolor, sit amet consectetur urna interdum nec. Integer nec justo non dolor ornare dignissim at semper sem. Donec laoreet rhoncus semper. Maecenas risus turpis, sollicitudin venenatis erat vitae, faucibus varius libero. Vivamus congue nulla ac purus cursus iaculis.

Pellentesque eget tortor metus. Morbi vel consectetur nulla. Nunc ex magna, convallis non luctus eget, pellentesque sit amet quam. In sed libero vel massa imperdiet efficitur et ut neque. Nulla facilisis nulla quis laoreet sollicitudin. Nulla pulvinar ac enim quis porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam commodo lectus et ultricies dapibus. Vivamus efficitur porta massa eget mattis. Donec vehicula ut metus a tincidunt. Nunc congue congue nulla, ac laoreet libero porttitor vitae. Maecenas iaculis sagittis nibh, sed tempus eros semper a.`

let wordCount = 3

for (let k = 0; k < longText.length; k++) {
    if (longText[k] === " ") {
        wordCount++
    }
}

console.log(wordCount)


let etCount = 0

for (let u = 0; u < longText.length; u++) {
    if (longText[u] + longText[u + 1] + longText[u+2]=== " et") {
        etCount++
    }
}

console.log(etCount)

// Bonus 2

let phraseToCheck = "taco cat"
let cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
let isPalindrome = true
let length = cleanPhrase.length

for (let q = 0; q < length / 2; q++) {
    if (cleanPhrase[q] !== cleanPhrase[length -1 - q]) {
        isPalindrome = false;
        break
    }
}

console.log(isPalindrome)


