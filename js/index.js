console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Ramón';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nicolas';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.localeCompare(hacker2) === 1){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker1.localeCompare(hacker2) === -1 ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow you both have equally long names, ${hacker1.length}!`);
}
// Iteration 3: Loops
// Driver 
let driverCap = hacker1.split(''); 
driverCap = driverCap.join(" ");
console.log(driverCap.toUpperCase());
//Navigator 
let navigatorRev = hacker2.split(''); 
navigatorRev = navigatorRev.reverse();
console.log(navigatorRev.join(""));

//By lexicographic order

let names = [hacker1, hacker2];
// comparamos y ordenamos en el mismo array
let order = names.sort(function(a, b) {
    return a.localeCompare(b);
})

console.log(order[0]);
console.log(order);
if (order[0] === hacker1) {
    console.log(`The driver's name goes first.`);
} else if (order[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log(`What!? You both have the same name?`);
}
        
