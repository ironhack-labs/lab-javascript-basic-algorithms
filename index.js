// Iteration 1: Names and Input

// First duo that came to my mind, man i miss those skits
const hacker1 = "JohnKnee";
const	hacker2 = "Ill"; 

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

	console.log(`The driver has the longest name, it has ${hacker1.length} characters`);

} 

else if (hacker1.lenght < hacker2.lenght) {

  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
}

else {

  console.log(`Wow, both names have the same number of characters!`);
}


// Iteration 3: Loops

// 3.1

let driverSpaced = "";

for (let i = 0; i < hacker1.length; i++) {

 	driverSpaced += hacker1[i].toUpperCase() + " ";
}

console.log(driverSpaced);

// 3.2

let driverReversed = "";

for (let i = hacker1.length - 1; i > -1; i--) {

  driverReversed += hacker1[i];
}

console.log(driverReversed);

// 3.3

if (hacker1 > hacker2) {

	console.log("The driver's name goes first");

}

else if (hacker1 < hacker2) {

  console.log("Yo, the navigator goes first, definitely.");
}

else {

  console.log("What?! You both have the same name?");
}

// Bonus 1

// 1.1

const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue, dui a aliquam ultrices, erat lacus scelerisque est, a bibendum ante libero sit amet ipsum. Donec vitae euismod metus. Fusce posuere nisi id enim blandit venenatis. Nullam ut vestibulum quam. Aenean magna nunc, varius et nisi ornare, auctor facilisis nisi. Suspendisse potenti. Ut maximus nibh ac sollicitudin mollis. In tincidunt nunc scelerisque augue dignissim, ut vestibulum augue sollicitudin. Suspendisse potenti. Mauris dictum feugiat finibus. Curabitur nec nibh posuere, euismod lectus vitae, viverra urna. Vivamus a velit mauris. Nulla convallis euismod ultricies. Phasellus quis vehicula tortor, sit amet rhoncus ligula. Etiam faucibus gravida urna, a eleifend urna dictum ac. Nullam volutpat urna id orci mollis, a luctus nunc interdum. Sed facilisis, mauris at commodo pretium, turpis dolor viverra velit, sed dictum dolor risus et nulla. Suspendisse viverra orci a interdum hendrerit. Aenean at arcu arcu. Curabitur maximus purus non ipsum euismod accumsan. Duis velit eros, tristique sit amet ligula quis, egestas varius dui. Nunc blandit massa sem, accumsan scelerisque elit faucibus eu. Ut ac pellentesque velit, vel dapibus nisi. Vivamus imperdiet iaculis sem sed rutrum. Pellentesque auctor, diam sed tincidunt sollicitudin, lacus ex congue mi, at blandit turpis orci vitae massa. Suspendisse potenti. Morbi dignissim malesuada enim id consectetur. Nunc vestibulum risus eget est faucibus, vel finibus elit placerat. Donec egestas, lorem vel lacinia aliquam, felis mi tempus nulla, vel varius enim leo at enim. Sed hendrerit, turpis sed pellentesque egestas, nibh arcu placerat ligula, tempus fringilla nisl lorem vel est. Aenean cursus nibh in suscipit ultricies. Nunc placerat faucibus odio, eu varius erat tincidunt vel. Pellentesque sodales ultrices est, sit amet lacinia urna volutpat eu. Nullam feugiat lectus nec ante molestie finibus. Vestibulum vitae purus elementum, tempor leo id, venenatis massa. Donec ac dolor sodales, condimentum leo id, suscipit odio. Integer eu nisl felis. Maecenas iaculis commodo dolor non condimentum. Aliquam erat volutpat. Ut cursus, purus vitae mattis elementum, diam lorem interdum purus, ac egestas justo sem eget ipsum. Mauris eu iaculis metus, eu scelerisque eros. Etiam eget enim auctor, rutrum nisi quis, laoreet ex.";

const wordSplitter = longString.split(" ");

const wordsFound = wordSplitter.length;

console.log(`There are ${wordsFound} words in the 3 paragraphs of "longString"`); 

// 1.2

const etsFinder = longString.indexOf("et");

let etsFound = 0;

for (let i = 0; i < wordsFound; i++) {

  if (wordSplitter[i] == "et") {

		etsFound += 1;
  }

}

console.log(`There are ${etsFound} instances of the word et in "longString"`);	

// Bonus 2

// 2.1 - This whole exercise took me so long to figure out im ngl - very fun tho!! :D

let phraseToCheck = "stack cats";

let isItPalindrome = true;

let obstacles = " ,.!?'";

let j = phraseToCheck.length - 1;

for (let i = 0; i < phraseToCheck.length * 0.5; i++, j--) {

	while (obstacles.includes(phraseToCheck[i])) {

		i++;
	}

	while (obstacles.includes(phraseToCheck[j])) {

  	j--;
	}

  if (phraseToCheck[i] !== phraseToCheck[j]) {

		isItPalindrome = false;

    break;
  }

}

if (isItPalindrome == true) {

	 console.log(`The phrase ${phraseToCheck} is a palindrome`);	
}

else {

  console.log(`The phrase ${phraseToCheck} is not a palindrome`);	
}
