

//ITERATION 1
const hacker1 = prompt("Whats your name?")
console.log(`The driver's name is ${hacker1} `)
const hacker2 = "Daniel"
console.log(`The Navigator's name is ${hacker2}`)

//ITERATION 2

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

//ITERATION 3

function addSpace(hacker1) {
    return hacker1.split('').join(' ');
}
console.log(addSpace(hacker1).toUpperCase())

const hacker2Reverse = hacker2.split('').reverse().join('');
console.log(hacker2Reverse)


if (hacker2.localeCompare(hacker1)) {
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2)) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What? You both have the same name?")
}