// Iteration 1: Names and Input

let hacker1 = 'German'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Explorer'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops


let spaceHacker1 = ' '
let elm1 = ''
for (let i = 0; i < hacker1.length; i++) {
    hacker1 = hacker1.toUpperCase();
    hacker1[i];
    elm1 += hacker1[i] + spaceHacker1;
}

console.log(elm1)


let elm2 = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    elm2 += hacker2[i]
}
console.log(elm2)


let lorem1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
let elm3

console.log(lorem1.split(' ').length)

console.log(lorem1.split('et').length)


let phraseToCheck = 'put it up'

let elm4 = ''
let elm5 = ''
for (let i = 0; i <= phraseToCheck.length - 1; i++) {
    if (phraseToCheck[i] == ' ') {
        elm5 = elm5
    } else {
        elm5 += phraseToCheck[i]
    }
}
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i] == ' ') {
        elm4 = elm4
    } else {
        elm4 += phraseToCheck[i]
    }
}

if (elm4 === elm5) {
    console.log(`El string ${elm4} es el palíndromo de ${elm5}`)
} else {
    console.log(`El string ${elm4} NO es el palíndromo de ${elm5}`)
}