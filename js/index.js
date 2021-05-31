// Iteration 1: Names and Input

const hacker1 = "Ben"
console.log(`The driver name is ${hacker1}`);
const hacker2 = "AGigi"
console.log(`The driver name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker2.length < hacker1.length) {
    console.log(`It seems that the navigator (Ben) has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator (Gigi) has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`It seems you both have equally long names of ${hacker2.length} characters!`);
}

// Iteration 3: Loops

for (let i = 0; i<= 0; i++) {
    console.log(...hacker1.toUpperCase());
}

for (let i = hacker2.length -1; i>=0; i--) {
    console.log(hacker2[i]);
}

let hackers = [hacker1, hacker2];
hackers.sort();
if (hackers[0] == hacker1) {
    console.log("Ben's name goes first");
} else if (hacker1 === hacker2) {
    console.log("Wait, you both have the same name!");
} else {
    console.log("No, Gigi' name goes first");
}

// Bonus stuff
const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
function WordCounter (str) {
	var words = str.split(" ").length;
	console.log(words);
}

WordCounter(loremIpsum);

//find specific word 'et'

const count = (loremIpsum.match(/et/g)).length;
console.log(count);