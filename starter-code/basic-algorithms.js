// Names and Input
let hacker1 = "Guilherme";
console.log(`The drivers name ${hacker1}`)
let hacker2 = prompt ("Whats your name")
console.log(`The navigators name is ${hacker2}`)
//
//Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} chatacters`)
} else if (hacker1.length < hacker2.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} chatacters`)
} else console.log(`wow, you both got equally long names, ${hacker1.length}characters!!`)

let driver = hacker1.toUpperCase().split("")
let res = ""

for (let i = 0; i < driver.length; i++){
res += driver[i] + " "
}

console.log(res)

console.log(hacker2.split("").reverse().join(""))

console.log(hacker2.localeCompare(hacker1))

if(hacker2.localeCompare(hacker1) < 0){
    console.log("Yo, the navigator goes first definitely")
} else if ((hacker2.localeCompare(hacker1) > 0)){
    console.log("The driver's name goes first")
} else console.log("What?! You both got the same name?")

// Lorem ipsum generator

// Bonus 

let pali = "A man, a plan, a canal, Panama!"

console.log(pali.toLowerCase().split(" "))