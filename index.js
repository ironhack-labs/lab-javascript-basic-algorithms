// Iteration 1: Names and Input
let hacker1="Toni";
let hacker2="Kelvin";
let fullName= hacker1[0];
let fullReverseName = hacker2.charAt(hacker2.length -1)

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters`)
}
// Iteration 3: Loops

for(i=1; i<hacker1.length;i++){
    fullName +=` ${hacker1[i].toUpperCase()}`
    
}
    for(x=hacker2.length -2; x>=0; x--){
    fullReverseName += `${hacker2[x]}`
    }
console.log(fullName)
console.log(fullReverseName)

