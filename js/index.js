// Iteration 3: Loops

let driver = "jamie";
let navigator = "samantha";

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
const compare = driver.localeCompare(navigator);

if (driver.localeCompare(navigator) > 0) {
	console.log("The drivers name goes first.");
} else if (driver.localeCompare(navigator) < 0) {
	console.log("Yo, the navigator goes first definitely.");
} else {
	console.log("What!? You both have the same name?");
}
