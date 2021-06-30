// Iteration 1: Names and Input

let hacker1 = "Johanna"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Florian"

console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals

let driver = hacker1.length;
let navigator2 = hacker2.length;

if (driver > navigator2) {
    console.log(`The driver has the longest name, it has ${driver} characters.`)
}
else if (navigator2 > driver) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator2} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${driver} characters!`)
}

// Iteration 3: Loops


hacker1 = hacker1.split('').join(' ').toUpperCase();
console.log(hacker1)


let reverseHacker2 = ""
for (let i = hacker2.length-1; i >= 0; i--) {
    reverseHacker2 += hacker2[i]
}
console.log(reverseHacker2)


function compare (hacker1,hacker2) {

    hacker1 = hacker1.toUpperCase()
    hacker2 = hacker2.toUpperCase()
    
    let longestName = hacker1.length > hacker2.length ? hacker1 : hacker2
    let shortestName = hacker1.length < hacker2.length ? hacker1 : hacker2
    
    for (let i = 0; i < longestName.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            return "The driver's name goes first.";
        }
        else if (hacker1[i] > hacker2[i]) {
            return "Yo, the navigator goes first definitely.";
        }
        else if (shortestName[i] === undefined) { 
            if (shortestName == hacker1) {
                return "The driver's name goes first.";
            }
            else {
                return "Yo, the navigator goes first definitely.";
            }
        }
    }
}

console.log(compare(hacker1,hacker2))

// Bonus 1

let lorem = `Lorem, ipsum dolor sit amet et consectetur et adipisicing elit. Rem qui eius voluptates, accusamus tempore dicta id, ipsum voluptatibus aut dolorem maxime cupiditate aliquid saepe, atque modi. Odit ratione tempora dignissimos?
Quisquam ratione hic ducimus possimus facere magni eaque, incidunt sequi ut reiciendis optio, molestias et distinctio natus iste sunt repellendus ab quasi. Perferendis, deleniti amet saepe quae deserunt officia nulla illo!
Commodi sit tempore modi, laborum ullam et voluptatibus repudiandae ipsum libero, earum nesciunt, saepe et debitis quia dolore? Animi, expedita. Soluta molestiae nisi eius dignissimos nihil maxime assumenda aut perspiciatis id facilis.`

let counter = 1
for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === ' '){
        counter += 1;
    }
    else if (lorem[i] == '\n') {
        counter += 1;
    }
}
console.log(counter)
let words = lorem.split(' ')
let etCounter = 0;
for (let i =0; i < words.length; i++) {
    if (words[i] === 'et') {
        etCounter += 1
    }
}
console.log(etCounter)

// PALINDROME



let phraseToCheck = "r!a!c!e c     ar";

let newPhrase = ""
// si l"infex en cours est un espace, on passe à l'itération suivante ==> continue 

for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) {
        newPhrase += phraseToCheck[i].toLowerCase()
    }
}

let counterPal = 0
let phraseLength = newPhrase.length - 1

for (let i = 0; i < newPhrase.length; i++) {
    if (newPhrase[i] === newPhrase[phraseLength - i]) {
        counterPal += 1
    }
    else {
        console.log("Pas un palindrome")
    }
}

if (counterPal === newPhrase.length) {
    console.log("C'est un palindrome")
}



