// Iteration 1: Names and Input

let hacker1 = "Arianna";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Banana";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let shorterName = hacker1;
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    shorterName = hacker2;
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    shorterName = hacker1;
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let upperSpace = "";
for (let i = 0; i < hacker1.length; i++) {
	if (i != hacker1.length - 1) {
		upperSpace += `${hacker1[i].toUpperCase()} `;
	} else {
        upperSpace += `${hacker1[i].toUpperCase()}`;
    }
}
console.log(upperSpace);


let backwardsName = ""
for (let i = hacker2.length-1; i>=0; i--) {
   backwardsName += hacker2[i];
}
console.log(backwardsName);


hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
if (hacker1 === hacker2) {
	console.log("What?! You both have the same name?");
} else {
	for (let i = 0; i < shorterName.length; i++) {
		if (hacker1[i] > hacker2[i]) {
			console.log("Yo, the navigator goes first definitely.");
			break;
		} else if (hacker2[i] > hacker1[i] ) {
			console.log("The driver's name goes first.");
			break;
        } else if (hacker2[i] === hacker1[i] && i === shorterName.length-1) {
                console.log("The driver's name goes first.");
        }
    } 
}