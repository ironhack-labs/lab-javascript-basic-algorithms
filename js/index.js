// Iteration 3: Loops

let driver = "jamie";
let navigator = "jamie";

// 1.
let i = 0;
while (i <= 30 - 1) {
	i++;
	console.log(i);
	if (i === 10) {
		console.log("ten");
	} else if (i === 20) {
		console.log("twenty");
	}
}

// 2.
driver = driver.toUpperCase();

let str = "";
for (const letter of driver) {
	str += letter + " ";
}
console.log(str);

let str2 = "";
for (let i = navigator.length - 1; i >= 0; i--) {
	str2 += navigator[i];
}
console.log(str2);

// 3.

const driver1 = "sam";
const navigator1 = "sam";

if (driver1.localeCompare(navigator1) < 0) {
	console.log(`The driver's name goes first.`);
} else if (driver1.localeCompare(navigator1) > 0) {
	console.log(`Yo, the navigator goes first definitely.`);
} else {
	console.log("What?! You both have the same name?");
}
