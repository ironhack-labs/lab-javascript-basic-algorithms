// Iteration 1: Names and Input

let hacker1 = "Vera"
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = "Santi"
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals

//2.1

 if (hacker1.length > hacker2.length){
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
 } else if (hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 } else {
   console.log(`Wow, you both have equally long names, XX characters!`)
 }
 
 //3.1
for (let i = 0; i <= hacker1.length; i++) {
  console.log(hacker1.charAt(i).toUpperCase());
}
 // Iteration 3: Loops
//3.2
 let result = ""
 for (let i =  hacker1.length;i >= 0; i--) {
  result += hacker1.charAt(i) 
 }
 console.log(result)

 //3.3
 if (hacker1 < hacker2){
   console.log("The driver's name goes first.")
 } else if (hacker2 > hacker1){
console.log("Yo, the navigator goes first definitely.")
 } else {
console.log("What?! You both have the same name?")
 }