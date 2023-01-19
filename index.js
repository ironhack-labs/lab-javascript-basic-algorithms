//1.1
let hacker1 = `Pedro`

//1.2
console.log(`The driver's name is ${hacker1}`)

//1.3
let hacker2 = `Juan`

//1.4
console.log(`The navigator's name is ${hacker2}`)

//2.1
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, XX characters!`)
}

//3.1
let align = ""
for (let i = 0; i < hacker1.length; i++ ) {
  align += hacker1[i] + " ";
}
console.log(align.toUpperCase());

//3.2

let reversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reversed += hacker1[i];
}

console.log(reversed); 

//3.3
  let comparacion = ""
let result = hacker1.localeCompare(hacker2)

if (result == 1) {
console.log("Yo, the navigator goes first definitely.")}
else if (result == -1) {
 console.log("The driver's name goes first.")
}
else {
  console.log("What?! You both have the same name?")
}






/*
let lexicogrphic = ""
for (let i = 0; i < hacker1.length && hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.")
    break;
} 
  else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.")
   break;
  }
  else {
    console.log("What?! You both have the same name?")
    break;
  }
}

*/