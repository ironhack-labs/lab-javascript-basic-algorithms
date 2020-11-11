var hacker1= "Nathan"
console.log("The driver's name is " + hacker1)

var hacker2 = "Edouard"
console.log("The navigator's name is  " + hacker2)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) }

if (hacker2.length > hacker1.length) {
  console.log(` It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) }

if (hacker1.length === hacker2.length) {
  console.log(` Wow, you both have equally long names, ${hacker2.length} characters.`) }


let str = '';
for (let i = 0; i < hacker1.length; i++) {
  str += hacker1[i].toUpperCase() + ' ';
}
console.log(str)

let str2 = '';
for (let j = hacker2.length - 1; j >= 0; j--) {
  str2 += hacker2[j];
}
console.log(str2)

console.log(hacker1.localeCompare(hacker2))
console.log(hacker2.localeCompare(hacker1))

if ((hacker1.localeCompare(hacker2)) === -1) {
  console.log("The driver's name goes first.")
}

if ((hacker1.localeCompare(hacker2)) === 1) {
  console.log("Yo, the navigator goes first definitely")
}

if ((hacker1.localeCompare(hacker2)) === 0) {
  console.log("What?! You both have the same name?")
}