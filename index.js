// Iteration 1: Names and Input
let hacker1 = "marcos"
let hacker2 = "asier"
console.log(`the drivers name is ${hacker1} `)
console.log(`the navigators name is ${hacker2}`)

// Iteration 2: Conditionals
let largo1 = hacker1.length
let largo2 = hacker2.length

if (largo1 > largo2){
    console.log(`the driver has the longest name, it has ${largo1} characters.`)

}else if (largo2 > largo1){
    console.log(`it seems that the navigator has the longest name, it has ${largo2} characters`)

}else if (largo1 === largo2){
    console.log(`Wow, you both have equally long names, ${largo1} characters!.`)
} 


// Iteration 3: Loops
let driverUpp = ""
let reverseNav = ""
for (let i= 0; i < largo1; i++){
    driverUpp += hacker1[i].toUpperCase()+ " "
}
console.log(driverUpp.trim())


for (let j=largo2-1; j >= 0; j--){
    reverseNav = reverseNav + hacker2[j]


}
console.log(reverseNav)
    
if (hacker1[0] === hacker2[0]){
    console.log(`What?! You both have the same name?`)
}else if (hacker1[0] < hacker2[0]){
    console.log(`Yo, the navigator goes first, definitely.`)
}else if (hacker1[0] > hacker2[0]){
    console.log(`The driver's name goes first.`)
}