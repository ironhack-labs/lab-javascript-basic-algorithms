// Iteration 1: Names and Input

let hacker1 = "Aabrams";
console.log("The driver's name is: " + hacker1);

let hacker2 = "Williams";
console.log("The navigator's name is: " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(
		`The driver has the longest name, it has ${hacker1.length} characters`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${hacker2.length} characters`
	);
} else {
	console.log(
		`Wow, you both have equally long names, ${hacker1.length}  ${hacker2.length} characters!`
	);
}

// Iteration 3: Loops
// 3.1
let newHackerName1 = "";
for (let i = 0; i < hacker1.length; i++) {
	if (hacker1.length - 1 === i) {
		console.log(i);
	}
	newHackerName1 += hacker1[i].toUpperCase() + " ";
}
console.log(newHackerName1);
// 3.2
let newHackerName2 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
	newHackerName2 += hacker1[i];
}
console.log(newHackerName2);
 // 3.3
let newArray = [hacker1, hacker2];
let sortedArray = newArray.sort((a, b) => a.localeCompare(b));
if (sortedArray[0] === newArray[0]) {
	console.log("The driver's name goes first.");
} else if (sortedArray[1] === newArray[1]) {
	console.log("Yo, the navigator goes first, definitely");
} else if (newArray[0] === newArray[1]) {
	console.log("What?! You both have the same name?");
}
