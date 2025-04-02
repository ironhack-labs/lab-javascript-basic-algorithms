// Iteration 1: Names and Input
const hacker1 = "Huey Newton";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Fred Hampton";
console.log(`The navigator's name is ${hacker2}`);





// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//3.1
const splitHacker1 = (hacker1.split('').join(" "));
console.log(splitHacker1.toUpperCase());

//3.2 REVERSED
const reversedHacker2 = hacker2.split('').reverse().join('');
console.log(reversedHacker2);

//3.3 LEXICOGRAPHICAL

if(`${hacker1}`.localeCompare(`${hacker2}`) == 1){
    console.log("The driver's name goes first.");
}
else if(`${hacker2}`.localeCompare(`${hacker1}`) == -1){
    console.log("Yo, the navigator goes first, definitely.");
}
else if(`${hacker2}`.localeCompare(`${hacker2}`) || `${hacker1}`.localeCompare('Huey Newton') === 0){
    console.log("What?! You both have the same name?");
}
