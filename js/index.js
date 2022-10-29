// Iteration 1: Names and Input

var hacker1 = "Aaron";
var hacker2 = "Pau";
var counter = 0;


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`\nThe driver has the longest name, it has ${hacker1.length} characters`)
    counter = hacker1.length;
}else if(hacker1.length < hacker2.length){
    console.log(`\nIt seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    counter = hacker2.length;
}else{
    console.log(`\nWow, you both have equally long names, ${hacker1.length} characters!`)
    counter = hacker1.length;
}
// Iteration 3: Loops

var separate = "";
var reverse = "";

for (let i = 0; i < hacker1.length; i++) {
    separate += `${hacker1[i].toUpperCase()} `;
}
for (let i = hacker2.length; i > 0; i--) {
    reverse += hacker2[i-1];
}

console.log("\n" + separate);
console.log(reverse);

for (let i = 0; i < counter; i++) {
    if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()) {
        console.log("\nThe driver's name goes first.");
        break
    }else if(hacker1[i].toLowerCase() > hacker2[i].toLowerCase()){
        console.log("\nYo, the navigator goes first definitely.")
        break
    }else if(i == counter-1){
        console.log("\nWhat?! You both have the same name?");
        break
    }
}
