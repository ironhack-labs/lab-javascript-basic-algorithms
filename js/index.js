// Iteration 1: Names and Input
const hacker1 = "Rumeli";
const hacker2 = "Thalita";
console.log(`The Driver's name is ${hacker1}`);
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

//3.1 
let driver = '';
for(let characters of hacker1){
    driver = driver + ' ' + characters
}

console.log(driver.toUpperCase());

//3.2
let navigator = '';
for(let characters of hacker2){
    navigator = characters + navigator
}

console.log(navigator);
//3.3
if(hacker1.localeCompare(hacker2) < 0){
    console.log("the driver's name goes first");
}
else if(hacker2.localeCompare(hacker1) > 0){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?");
}
   
