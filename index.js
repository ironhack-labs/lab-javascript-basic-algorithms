// Iteration 1: Names and Input (Alvaro)

const hacker1 = 'NisolMikel'
const hacker2 = 'Alvaro'

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals (Nisol)
/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest nameit has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names,${hacker1.length}  characters!`);
}

// Iteration 3: Loops (Mikel)
/* 3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

  3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.

  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

- `The driver's name goes first.` <br>
- `Yo, the navigator goes first, definitely.` <br>
- `What?! You both have the same name?` */
let newname = ""
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        newname += hacker1[i].toUpperCase()
    } else {
        newname += hacker1[i].toUpperCase() + " "
    }
}

let reversedName = ""
for (i = hacker1.length - 1; i >= 0; i--) {
    reversedName += hacker1[i]
}

console.log(newname);

console.log(reversedName);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

console.log(hacker1.localeCompare(hacker2))