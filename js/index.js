// Iteration 1: Names and Input
//
let hacker1 ='Jose'
console.log('The drivers name is ${hacker1}')

let hacker2 ='Susana'
console.log('The drivers name is ${hacker2}')

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
    }

if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    }
else (hacker1.length === hacker2.length) ;
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    
// Iteration 3: Loops

3.1

let mayus = hacker1.toUpperCase();

let myArray = " ";

for(let i = 0; i < hacker1.length; i++) {
    if(i === mayus.length - 1) {
        myArray = myArray + hacker1[i];
    }
    else{
        myArray = myArray + hacker1[i] + " ";
     }
}

console.log(myArray)

3.2

let reverse = " ";

for(let i = hacker1.length - 1; i >= 0; i--){
  reverse = reverse + hacker1[i];
}

console.log(reverse)

3.3

if(hacker1.length > hacker2.length){
    console.log("The driver's name goes first.")
}
if (hacker1.length < hacker2.length){
    console.log("Yo, the navigator goes first definitely")
}
else if (hacker1.length === hacker2.length) {
    console.log ("What?! You both got the same name?")
}