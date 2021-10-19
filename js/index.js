/*
1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.
*/

const hacker1 = 'Josenildo'
const hacker2 = 'Marivalda'

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)

/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

const driverLongerName = hacker1.length > hacker2.length 
const navLongerName = hacker2.length > hacker1.length

if (driverLongerName) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (navLongerName) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let spaceName = ''
for (let counter = 0; counter < hacker1.length; counter++){
    spaceName += hacker1[counter] + ' '
}
console.log(spaceName.toUpperCase())

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = ''
for (let counter = hacker2.length - 1; counter >= 0; counter -= 1){
    reverseName += hacker2[counter]
}
console.log(reverseName)

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1:
// Generate 3 paragraphs. Store the text in a variable type of string.

let loren = `Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Quisque bibendum lacinia dui, eu pellentesque felis tristique et. Nam sollicitudin, sapien eu molestie feugiat, massa ipsum rutrum dolor, at lacinia libero quam vel arcu. Quisque eget mattis lectus. Phasellus id diam eros. In blandit hendrerit tellus, eu tincidunt enim fermentum sed. Nulla in felis vitae eros blandit vulputate sit amet at urna. Donec malesuada libero sapien, et auctor tellus volutpat vel. Vestibulum sed ultrices lorem. Nunc a tempus leo. Nullam pellentesque, nunc a viverra vestibulum, purus eros euismod lacus, a facilisis diam eros a ante. Morbi ullamcorper arcu pretium, luctus tortor vel, venenatis nisi. Etiam finibus rutrum ex, sed vestibulum tellus. Proin in turpis consequat enim rhoncus luctus. In placerat egestas ipsum, consequat posuere turpis efficitur in. Nullam in placerat justo, ac imperdiet lectus.

Fusce quis neque sed nisl imperdiet et accumsan in in arcu. Etiam vulputate nibh ut tincidunt aliquam. Nunc ac elementum eros. Cras euismod quis nibh quis cursus. Pellentesque pellentesque pellentesque metus vitae luctus. Quisque accumsan fringilla lectus, sed eleifend orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ultricies vel ligula non sodales. Praesent aliquet erat scelerisque arcu ullamcorper mattis.

Integer eu purus non elit gravida tempus sit amet magna. Duis posuere non nisl eu pretium. Mauris quis erat tortor. Donec lacinia dui augue, sed dapibus arcu auctor quis. Nulla ut leo metus. Nunc sollicitudin lacus sem, a fringilla felis malesuada in. Sed imperdiet ipsum nunc, sed gravida ex laoreet consequat. Pellentesque non nulla arcu.`

// Make your program count the number of words in the string.

let spaces = 0
for(let counter = 0; counter < loren.length; counter++) {
    if (loren[counter] === ' ') {
        spaces += 1
    }
}
let words = spaces + 1
console.log(words)

// Make your program count the number of times the Latin word et appears.

let sum = 0
for(let counter = 0; counter < loren.length; counter++) {
    if (loren[counter] === ' ' && loren[counter + 1] === 'e' && loren[counter + 2] === 't') {
        sum += 1
    }
}
console.log(sum)

// Create a new variable phraseToCheck and have it contain some string value. 
//Write a code that will check if the value we assigned to this variable is a Palindrome. 

let phraseToCheck = 'put it up'
