// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
// Iteration 1: Names and Input
/*1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".*/

let hacker1 = "Hanna"
console.log (`The driver's name is ${hacker1}`)

let hacker2 = "Utku"
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */
if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters`) 
} else if (hacker1.length < hacker2.length) {
   console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`) 
} 
else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
  
// Iteration 3: Loops
/*3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?*/

let capitalDriverName = ""
for(let i=0; i<hacker1.length; i++) {
 const char = hacker1[i].toUpperCase()
  capitalDriverName += char + " "
}
console.log(capitalDriverName)

let reverceOrder = ""
for (let i = hacker2.length -1; i>=0; i--) {
  //length starts from 1
  //index starts from 0
  const char = hacker2[i]
  reverceOrder += char 
}
console.log(reverceOrder)

if (hacker1.localeCompare(hacker2) === -1) {
 console.log(`${hacker1} goes first.`) 
} else if(hacker2.localeCompare(hacker1) === -1) { 
  console.log(`${hacker2} goes first.`)
}
else {
  console.log ("What?! You both have the same name?")
}

//string1.localeCompare(string2) 

function noName (a, b){
  return a+b
}
console.log(noName(5,9))