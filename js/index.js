// Iteration 1: Names and Input

let hacker1 = "John"
console.log ("The driver name is " + hacker1)

let hacker2 = "Philip"
console.log ("The navigator name is " + hacker2)


// Iteration 2: Conditionals

console.log (typeof hacker1)
console.log (typeof hacker2)

console.log (hacker1.length)
console.log (hacker2.length)

let hacker1_length = 4
let hacker2_length = 6

if (hacker1_length > hacker2_length) {
  console.log ("The driver has the longest name, it has XX characters.")
}

else if (hacker1_length < hacker2_length) {
  console.log ("It seems that the navigator has the longest name, it has XX characters.")
}

else if (hacker1_length = hacker2_length) {
  console.log ("Wow, you both have equally long names, XX characters!")
}
// Iteration 3: Loops

//3.1 

let hacker1 = "John"

hacker1Capital = ""

for ( i = 0; i < hacker1.length; i++)

  hacker1Capital = hacker1Capital + hacker1[i].toUpperCase() + " "

  console.log (hacker1Capital)


//3.2

let hacker1 = "John"

hacker1Reverse = " "
for (i = 0; i < hacker1.length; i++)
  
  hacker1Reverse = hacker1[i]  + hacker1Reverse

  console.log (hacker1Capital)

  //hackerName.split().join(" ").toUperCase

//3.3 

let hacker1 = "John"

let hacker2 = "Philip"

for (i = 0; i < 1; i++) 
  if (hacker1[i] < hacker2[i]) {
  console.log ("The driver's name goes first.")
}
else if 
  (hacker1[i] > hacker2[i]) {
  console.log ("Yo, the navigator goes first definitely.")
}
else if 
  (hacker1[i] == hacker2[i]) {
  console.log ("What?! You both have the same name?")
}





