// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = `Escarlata`
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)
// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = `Paola`
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separatedName = " "
for (let index = 0; index < hacker1.length; index++) {
    separatedName += hacker1[index];
    separatedName += " "
} console.log(separatedName.toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reversedName = " "
for (let index = hacker2.length - 1; index >= 0; index--) {
    reversedName += hacker2[index];
} console.log(reversedName)


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

let index = 0;
while (index < alfabeto.length) {
    index++;
    if (hacker1[0] === alfabeto[index]) {
        console.log(`The driver's name goes first.`)
        console.log(`caso 1: la primera letra coincidente es ${alfabeto[index]}`)
        break
    }
    else if (hacker2[0] === alfabeto[index]) {
        console.log(`Yo, the navigator goes first definitely.`)
        console.log(`caso 2: la primera letra coincidente es ${alfabeto[index]}`)
        break
    }
    else if (hacker1[0] === hacker2[0]) {
        console.log(`What?! You both have the same name?`)
    }
    else {
        console.log(`Este ejercicio está un poco regulero.`)
    }
}