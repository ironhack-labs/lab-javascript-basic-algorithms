// Iteration 1: Names and Input


console.log("I'm ready!");

let hacker1 = "Zeta";
let navigator = "Zeta";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals

if(hacker1.length > navigator.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(navigator.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`);
}else{
    console.log(`Wow, you both have equalle long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops

//Exercise 1
let name = "";
for( char of hacker1){
    name += char + " ";
}

console.log(name.toUpperCase());

//Exercise 2
let backwardsName = "";
for(let i = (navigator.length - 1); i >= 0; i--){
    backwardsName += navigator[i];
    
};

console.log(backwardsName);

//Exercise 3


let arrNames = [ hacker1, navigator];
console.log(arrNames);


let sorted = arrNames.sort();
console.log(sorted);

if( sorted[0] === sorted[1]){
    console.log("What?! You both have the same name?")
}
else if( sorted[0] === hacker1){
    console.log("The driver's name goes first");
}else if(sorted[0] === navigator){
    console.log("Yo, the navigator goes first definitely.")
}
