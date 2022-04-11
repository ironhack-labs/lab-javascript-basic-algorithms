// Iteration 1: Names and Input
var hacker1 = "Duarte";
console.log(`The driver name is ${hacker1}` );
var hacker2 = "Alexandre";
console.log(`The navigator name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length >= hacker2.length){
    console.log(`The driver's as a longest name, it has ${driver1.length} characters.`)
}else if( hacker1.length <= hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
    console.log(`Wow, you both have equaly long names, ${hacker1.length, hacker2.length} characters.`)
}

// Iteration 3: Loops

let driverName= ""

for(let i = 0; i < hacker1.length; i++){
    driverName += hacker1[i].toUpperCase() + " "
}
console.log(driverName);

let revName= "";
for(let i = hacker2.length -1; i >= 0 ; i --){
    revName += hacker2[i]
}
console.log(revName);

hacker1 = hacker1.toLowerCase;
hacker2= hacker2.toLowerCase;

if("Duarte".localeCompare("Alexandre") === -1 ){
    console.log("The driver's name goes first.")
}else if( "Duarte".localeCompare("Alexandre") === 1){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What?! You both have the same name?")
}
