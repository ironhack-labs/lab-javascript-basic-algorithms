// Iteration 1: Names and Input
// create a variable hacker 1 with the driver's name//
let hacker1 = "Diego";
console.log("the driver name is " + hacker1)
let hacker2 = "Daniela";
console.log(`The Navigator's name is ${hacker2}`)

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length ){
    let charNum = hacker1.length;
    console.log("The driver has the longest name, it has " + charNum + " characters.")
} else if (hacker1.length < hacker2.length){
    let charNum = hacker2.length
    console.log(`It seems that the navigator has the longest name, it has ${charNum} characters.`)
} else{
    let charNum = hacker1.length;
    console.log(`Wow, you both have equally long names, ${charNum} characters!`)
}
// Iteration 3: Loops //


let name = ""
for (let i = 0; i < hacker1.length; i++){
    name += hacker1[i].toUpperCase() + " " 
} 
console.log(name)

let name2 = ""
for (let i = hacker2.length -1; i >=0; i--) {
    name2 += hacker2[i].toUpperCase() + " "
    
}
console.log(name2)

const names = [hacker1, hacker2];


const newArray = names.sort();

if (newArray[0] == hacker1){
    console.log("The driver's name goes first");
} else if (newArray[0] == hacker2){
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}
