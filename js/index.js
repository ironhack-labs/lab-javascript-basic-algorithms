// Iteration 1: Names and Input
let hacker1 = 'James'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Micheal'
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
let smallerName = 0;
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    smallerName=hacker1;
}else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    smallerName=hacker2;
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    smallerName=hacker1;
}
// Iteration 3: Loops
let spaceName = ""
for(let i=0; i < hacker1.length; i++){
    spaceName = spaceName + hacker1.charAt(i) + ` `;
}
console.log(spaceName.toUpperCase())
spaceName = ""
for(let i=hacker2.length; i >= 0; i--){
    spaceName = spaceName + hacker2.charAt(i);
}
console.log(spaceName)
// for(let i=0; i < smallerName; i++){
//     if(hacker1.charAt(i) === hacker2.charAt(i)){

//     }else if(hacker1.charAt(i) === hacker2.charAt(i))
// }
if(hacker1.localeCompare(hacker2) < 0){
    console.log(`The driver's name goes first.`)
}else if (hacker1.localeCompare(hacker2) > 0){
    console.log(`Yo, the navigator goes first definitely.`)
}else{
    console.log('What?! You both have the same name?')
}