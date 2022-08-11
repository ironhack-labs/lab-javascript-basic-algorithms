// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops


console.log("i`m ready");
let hacker1 = "Gustavo";
let hacker2 = "Marijo"

console.log(`The driver´s name is:${hacker1}`);
console.log(`The navigator"s name is:${hacker2}`);

console.log("----------------IT 2-----------------")

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

console.log("----------------IT 3-----------------");

let name = "";
for(let i=0; i < hacker1.length;i++){
    name += hacker1[i].toUpperCase() + " ";
}
console.log(name);

let name2 = "";
for(let j = hacker2.length -1 ;j >= 0; j--){
    name2 += hacker2[j];
}

console.log(name2);


let result = hacker1.localeCompare(hacker2);

if (result == -1){
    console.log("The driver's name goes first.");
} else if (result == 1){
    console.log("Yo, the navigator goes first definitely.");
}else {
    console.log("What?! You both have the same name?");
}
