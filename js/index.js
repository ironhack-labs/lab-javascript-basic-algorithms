// Iteration 1: Names and Input

console.log("I'm Ready");
let hacker1 ="John";
console.log(`The driver name is: ${hacker1}`);

let hacker2 ="Pedro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){

console.log(`The driver has the longest name, it has ${hacker1.length} characters`);

}
else if(hacker1.length<hacker2.length){
    
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops

for(let i=0;i<hacker1.length-1;i++){
    console.log(hacker1[i].toUpperCase() + " " );
}
console.log(hacker1[hacker1.length-1].toUpperCase());

for(let j=hacker1.length-1;i>=0;j--){
console.log(hacker1[j]);
}

if(hacker1<hacker2){
    console.log(`The driver's name goes first.`);
}
else if(hacker1>hacker2){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}


