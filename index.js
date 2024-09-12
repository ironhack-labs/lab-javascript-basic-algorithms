// Iteration 1: Names and Input
let hacker1 = "Ese";
let hacker2 = "Gabriela";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
	console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
};

// Iteration 3: Loops

let weirdName = '';

for (let i = 0; i <= hacker2.length - 1; i++) {

	weirdName += hacker2[i].toUpperCase() + " ";
}

  console.log(weirdName);


let wordReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
	const char = hacker2[i];
	wordReversed += char;
  }

  console.log(wordReversed);


  if (hacker1.localeCompare(hacker2) === 1){
	console.log(`The driver's name goes first`);
} else if (hacker1.localeCompare(hacker2) === -1){
	console.log(`Yo, the navigator's goes first, definitely`);
} else {
	console.log(`What?! You both have the same name?`);
};

//bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et neque ac dolor posuere consequat commodo a diam. Donec non vestibulum tellus. Nullam non sapien mi. Curabitur at lorem commodo eros fermentum varius in ut dolor. Pellentesque placerat nunc in ipsum fringilla eleifend. Vivamus aliquet eu nisi ut egestas. Aenean dignissim malesuada mattis. Integer efficitur eu nunc sit amet commodo. Ut nec eros gravida, fermentum lectus ut, maximus dui. Integer ut sem urna.

Vestibulum placerat augue in volutpat elementum. Aenean suscipit ullamcorper urna, eu tincidunt quam consectetur et. Vestibulum sit amet luctus elit. Integer mattis a nibh ac ultricies. In ullamcorper imperdiet sapien, non consectetur mauris bibendum sed. Integer sagittis tortor dolor, in ullamcorper erat semper volutpat. Integer elementum, lacus vel consectetur pulvinar, ante mi malesuada purus, vel fermentum nunc enim vitae augue.

Fusce vitae condimentum mi. Cras ac luctus nunc. In hac habitasse platea dictumst. Sed volutpat ipsum id enim finibus, a varius metus pulvinar. Integer sed cursus ante. Mauris lacinia risus bibendum erat maximus tincidunt. Praesent auctor mollis bibendum. Donec et magna accumsan, maximus leo at, molestie elit. Suspendisse vel neque volutpat, pharetra nibh at, scelerisque ipsum. Phasellus non sapien in justo porta condimentum nec quis nunc. Nunc pellentesque libero tortor, ac euismod risus lobortis et. Aenean a ipsum sit amet est malesuada finibus. Vivamus a lobortis diam, et maximus dui. Cras ac vulputate nibh, eget consequat purus. Proin lobortis imperdiet ultrices. Nullam vehicula nisl in neque maximus pretium.`;

countWords = longText.split(' ').length;

console.log(countWords);

let count = 0;
 
for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  
  if ( twoChars === "et" ) {
    count++;
  }
}

console.log(count);

//bonus 2

const phraseToCheck = "tacocat";

let wordMirror = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
	wordMirror += phraseToCheck[i];
  }

  
  if (phraseToCheck === wordMirror) {
    console.log("Palindrome")
  } else {
	console.log("Normal sentence")
  }
