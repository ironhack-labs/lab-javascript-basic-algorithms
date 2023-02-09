// Iteration 1: Names and Input
let hacker1 = "Zusana";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Yo-Jia";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let string = "";

for(i = 0; i <= hacker1.length-1; i++){
    let letter = hacker1[i]
    string = string + `${letter} `   
};
 
console.log(string.toUpperCase());

let reversedName = "";
for(let j = hacker2.length -1 ; j >= 0; j--){
    reversedName = reversedName + `${hacker2[j]}`
}
console.log(reversedName)

if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}else if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.")
}else if(hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?")
}



