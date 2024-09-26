// Iteration 1: Names and Input
let hacker1 ="John";
console.log(`the driver's name is ${hacker1}`);
let hacker2 = "Raphael";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker2.length>hacker1.length){
    console.log(`It seems that he navigator has the longest name, it has ${hacker2.length} characters`);

}
else {
    console.log(`Wow, you both have equally long names,${hacker2.length} characters!`)
}
let hackerUppercase =''
for (let i = 0; i < hacker1.length; i++) {
    hackerUppercase += hacker1[i].toUpperCase()+" ";

}
console.log(`${hackerUppercase}`)

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}

console.log(reversed); 


 


// Iteration 3: Loops
if (hacker1 < hacker2){
console.log("The driver's name goes first.")
}
else if (hacker1===hacker2){
   console.log("What?! You both have the same name?") 
}
else{
    console.log("Yo, the navigator goes first, definitely.")
}