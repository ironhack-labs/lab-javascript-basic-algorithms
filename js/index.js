// Iteration 1: Names and Input
let hacker1 = "Carlos", hacker2 = "Carlos2";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}

// Iteration 3: Loops

let str = "";

for(let value of hacker1){
    str += value.toUpperCase() + " ";
}
str = str.slice(0,str.length-1)
console.log(str);

let str2 = "";

for(let i = hacker2.length-1; i >= 0; i--){
    str2 += hacker2[i];
}
console.log(str2);

let comp = hacker1.localeCompare(hacker2);

if(comp === -1){
    console.log("The driver's name goes first.");
}else if(comp === 1){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}