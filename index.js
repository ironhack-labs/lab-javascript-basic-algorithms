// Iteration 1: Names and Input
const person1 = "Emma";
console.log("User Name is", person1)
const person2 = "Polina";
console.log("User Name is", person2)

// Iteration 2: Conditionals
if(person1.length > person2.length){
    console.log("person 1 name is longer")
}
else if(person1.length < person2.length){
    console.log("person 2 name is longer")
} else {
    console.log("ERROR")
}

// Iteration 3: Loops
let uppercaseName = ""
for(let i = 0; i < person1.length; i++){
    uppercaseName += person1[i].toUpperCase() + " ";
}

console.log(uppercaseName)