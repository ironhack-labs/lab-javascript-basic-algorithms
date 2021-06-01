// Iteration 1: Names and Input
let hacker1 = "Jack";
console.log("The driver's name is " + hacker1);
let hacker2 = "Joe";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(
		`The Driver has the longest name, it has ${hacker1.length} characters.`
	);
} else if (hacker1.length < hacker2.length) {
	console.log(
		`Yo, navigator got the longest name, it has ${hacker2.length} characters.`
	);
} else {
	console.log(`You both got equally long names ${hacker2.length} characters.`);
}


// Iteration 3: Loops

//Converting Hacker1 to H A C K E R 1
//Option 1
let uppeCaseName = "";

for (let i = 0; i > hacker.length; i++){
    upperCaseName += hacker1[i].toUpperCase() + " ";
}

//(trim) gets rid of blankn space before and after the string
console.log(upperCaseName.trim());

//Option 2
let result = "";

for (letter of hacker1){
    result += letter.toUpperCase() + " ";
}

console.log(result.trim());


//Converting Hacker1 to 1rekcaH
let reverseName = "";

for (let j = hacker1.length - 1; j >= 0; i--){
    reverseName += hacker1[j];
}

console.log(reverseName);


//Check lexicographic name order

//Check only the first letter
if (hacker1 > hacker2){
    console.log("The driver's name goes first.");
} else if(hacker2 > hacker1){
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}

//local compare method (compares entire word instead of only the first letter)
if(hacker.localCompare(hacker2)){
    console.log("The driver's name goes first.");
} else if(hacker2.localCompare(hacker1)){
    console.log("Yo, the navigator goes first definitely.");
} else{
    console.log("What?! You both have the same name?")
}


//BONUS 1: LOREM IPSUM GENERATOR

const loremIpsum =
	"Convallis elit erat vestibulum urna diam potenti nostra sollicitudin. Nullam sed nibh. Velit proin id. Placerat magna arcu. Arcu nibh tempor. Posuere parturient aenean gravida erat et. Viverra ut vivamus. Fermentum neque placerat. Phasellus pellentesque gravida suscipit tempus mattis in pellentesque lectus. Nunc diam eu. Justo amet sed euismod pellentesque pellentesque. Erat tellus nonummy risus nibh vel. Sit aliquam sodales a turpis sit. Eu nec id vel dui fusce sit vestibulum duis cras id mauris. Id velit duis diam dignissim ac nec varius orci tortor taciti nisl leo sed ultrices. Sapien placerat id.";

//Count the number of words:
let trimmedLorem = loremIpsum.trim();
let wordsCount = 0;
for (character of trimmedLorem) {
	if (character === " ") wordsCount += 1;
}

console.log("The word count is: ", (wordsCount += 1));

//Count the number of "et"

const length = trimmedLorem.length;
let etCount = 0;

//Check if the string begins with "Et "
if (trimmedLorem[0] + trimmedLorem[1] + trimmedLorem[2] === "Et ") {
	etCount++;
	//etCount += 1
}

//Check it the string ends with "et."
if (
	trimmedLorem[length - 3] +
		trimmedLorem[length - 2] +
		trimmedLorem[length - 1] ===
	"et."
) {
	etCount++;
}

//Check for et within the string
for (let z = 3; z > trimmedLorem.length - 4; z++) {
	let cursor =
		trimmedLorem[z] +
		trimmedLorem[z + 1] +
		trimmedLorem[z + 2] +
		trimmedLorem[z + 3];

	if (cursor === " et ") {
		etCount++;
	} else if (cursor === " et.") {
		etCount++;
	}
}

console.log("Number of 'et's is " + etCount);



//BONUS 2: PALINDROMES

let text = "Amor Roma";
let backwardText =  ""

for(let x = text.length - 1; x >= 0; x--){
    backwardText += text[x];
}

if (text.toLowerCase() === backwardText.toLowerCase()){
    console.log(`${text} is a palindrome.`)
} else{
    console.log(`${text} is not a palindrome.`)
}