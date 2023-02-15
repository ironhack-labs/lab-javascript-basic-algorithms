// Iteration 1: Names and Input
let hacker1 = "Wilmer";
console.log(`The drivers name is ${hacker1}`);
let hacker2 = "Chrisantemor";
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let characterName = ""
console.log(hacker1.length)
for (let i = 0; i < hacker1.length; i++) {
    characterName += hacker1[i]
    characterName += " "
}
console.log(characterName.toUpperCase())
// W I L M E R
let reversedName = ""

console.log(hacker2.length)

for (let i = hacker2.length - 1; i >= 0; i--) {
    characterName += hacker1[i]
    characterName += " "
}
console.log(reversedName)
