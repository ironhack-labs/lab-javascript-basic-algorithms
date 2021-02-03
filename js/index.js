console.log("I'm ready!");

//Iteration 1: Names and Input

let hacker1 = "Alexis";

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Aurélie";

console.log(`The navigator's name is ${hacker2}.`);

//Iteration 2: Conditionals

console.log(hacker1.length, hacker2.length)

if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);}
else if (hacker1.length<hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);}

//Iteration 3: Loops


let splitUpHacker = ""  
for (let i = 0; i<= hacker1.length-1; i++) {
splitUpHacker+= hacker1[i].toUpperCase() 
splitUpHacker+=" "
}
console.log("SPLIT HACKER =>",splitUpHacker)

let splitRevHacker = ""
for (let i = hacker2.length-1; i >= 0; i--) {
splitRevHacker += hacker2[i]
}
console.log("REVERSE HACKER =>",splitRevHacker)


// Other way to do iteration 3

// let splitHacker1 = hacker1.toUpperCase().split("").join(" ");

// console.log(splitHacker1)
// let splitHacker2 = hacker2.split("")
// let reverseHacker2 = splitHacker2.reverse()
// console.log(reverseHacker2)

if (hacker1.charAt(0)<hacker2.charAt(0)) {
  console.log(`The driver's name goes first.`);}
else if (hacker1.charAt(0)>hacker2.charAt(0)) {
  console.log(`Yo, the navigator goes first definitely.`);}
else {
  console.log(`What?! You both have the same name?`);}