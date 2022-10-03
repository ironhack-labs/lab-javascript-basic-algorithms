// Iteration 1: Names and Input
let hacker1 = "Goncalo";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bruno";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length < hacker2.length){
    console.log(`ìt seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
    else{
        console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
    }

// Iteration 3: Loops

let driver = "";
for(i = 0; i < hacker1.length; i++){
    driver = driver + hacker1[i] + " ";}
    
    console.log(driver.toUpperCase());

let reverseNavigator = "";
for(i = (hacker2.length -1); i >= 0; i--){
reverseNavigator = reverseNavigator + hacker2[i];
}
console.log(reverseNavigator);

if((hacker2.localeCompare(hacker1)) === 1){
    console.log("The driver's name goes first.")
}
else if((hacker1.localeCompare(hacker2)) === 1){
    console.log("Yo, the navigator goes first definitely.")
}
else{
    console.log("What?! You both have the same name?")
}