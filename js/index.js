// Iteration 1: Names and Input
let hacker1;
hacker1 = 'James' 

console.log(`The drivers name is ${hacker1}`)

let hacker2
hacker2 = 'Barry'
console.log(`The navigators name is ${hacker2}`)

var hacker1Length
hacker1Length = hacker1.length

var hacker2Length
hacker2Length = hacker2.length

console.log(hacker1Length)
console.log(hacker2Length)





// Iteration 2: Conditionals

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest nameit has ${hacker1Length} characters`);
   }
   else if (hacker1Length < hacker2Length) {
   console.log(`It seems that the navigator has the longest it has ${hacker2Length} characters`);
   }
   else { console.log(`Wow, you both have equally long names, ${hacker2Length} characters!`);
   }

// Iteration 3: Loops

// for(var i=0; i < hacker1.length; i++) {
//     console.log(hacker1[i])

   


// var s = "";
// for(var i=0; i < hacker1.length; i++) {
//     s += hacker1[i] + " "
//     console.log(s.toUpperCase())


// }





let s = "";
for (let i = 0; i <= hacker1Length-1; i++) {
  s += hacker1[i] + " "
}
console.log(s.toUpperCase());

var a = "";
for (let j = hacker2Length-1; j >= 0; j--) {
    a += hacker2[j]
}
console.log(a)



let compare
compare = (hacker1.localeCompare(hacker2))

console.log(compare)

if (compare < 0) {
    console.log('The drivers name goes first')
}
else if (compare > 0) {
    console.log("Yo, the navigator goes first definitely.")
}
else ("What?! You both have the same nme?")

//