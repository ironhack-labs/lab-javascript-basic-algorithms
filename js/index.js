// Iteration 1: Names and Input
const hacker1 = "joao";
console.log(`the driver name is: ${hacker1}`)
const hacker2 = "joao";
console.log(`the driver name is: ${hacker2}`)


// Iteration 2: Conditionals
const hacker1tamanho = hacker1.length
const hacker2tamanho = hacker2.length

 if (hacker1tamanho < hacker2tamanho) {
     console.log(`hacker2 has longest name than hacker1`)
 } else if (hacker2tamanho < hacker1tamanho){
    console.log(`hacker1 has longest name than hacker2`) 
 } else {
     console.log(`hacker1 is equal hacker2`)
 }

// Iteration 3: Loops
let nome1 = ""
for (let i=0; i<hacker1tamanho; i++){
    nome1 = nome1 + hacker1[i].toUpperCase()+ " "
}
let nome2 = ""
for (let i= hacker2tamanho -1; i>=0; i--){
    nome2 = nome2 + hacker2[i]
}   
console.log(nome1);
console.log(nome2);

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first`)
}else if (hacker2 == hacker1) {
    console.log(`What?! You both have the same name`)
}
else {
    console.log(`Yo, the navigator goes first definitely.`)
} 

//bonus



