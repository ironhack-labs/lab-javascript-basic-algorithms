// Iteration 1: Names and Input
let hacker1 = prompt("Driver's name: ");
console.log(`The driver name is: ${hacker1}`);
let hacker2 = prompt("navegator's name: ");
console.log(`The navegator name is: ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker1.length < hacker2.length){
    console.log(`The navegator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`ow, you both have equally long names, ${hacker2.length} characters!`)
}
// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""));
if(hacker1.localeCompare(hacker2)===-1){
    console.log("The driver's name goes first.")
    }else if (hacker1.localeCompare(hacker2)===1){
        console.log("Yo, the navigator goes first definitely.")
    }else{
        console.log("What?! You both have the same name?")
    };

