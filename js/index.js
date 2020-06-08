// Iteration 1: Names and Input
let hacker1 = 'John' 
console.log(`The Driver's name is ${hacker1}`)


let hacker2 = 'Dave'
console.log(`The Navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length){
    console.log(`The Navigator has the longest name. It has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow you both have long names ${hacker1.length}`)
}
// Iteration 3: Loopscode .
for(let i = 0; i <hacker1.length; i++){
    console.log(hacker1[i].toUpperCase() + " ")

}
for(let i = hacker2.length -1; i>= 0; i--){
    console.log(hacker2[i] + " ")
}
let same = 0
for(let i =0; i <hacker1.length; i++){
if (hacker1[i] > hacker2[i]){
    console.log("The driver's name goes first.");
    break;
}
else if(hacker1[i] < hacker2[i]){
    console.log("Yo, the navigator goes first definitely.");
    break;
}
else{
    same++;
    
}
if(same == hacker1.length){
    console.log('What?! You both have the same name?')
}
}