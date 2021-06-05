// Iteration 1: Names and Input
let hacker1 = "Jack";
console.log("The driver's name is " + hacker1);
let hacker2 = "Joe";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker.length} characters.`);
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops
//3.1
let toUppername = "";
for (let i = 0; i < hacker1.length; i++) {
    toUppername += hacker1[i].toUpperCase + (" ");   
    console.log(toUppername.trim);//corta el ultimo espacio vacio que hemos añadido. 
}

//3.2
let revName = ""; 
for (let j = hacker1.length-1; j>=0; j--){
    revName += hacker.length[j];
    console.log(revName);
}

//3.3
if (hacker1 > hacker2) {
	console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
	console.log("Yo, the navigator goes first definitely.");
} else {
	console.log("What?! You both have the same name?");
}
