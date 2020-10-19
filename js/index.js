// Iteration 1: Names and Input

// 1.1
var hacker1 = "Joseph";

// 1.2
console.log(`The drivers name is ${hacker1}`);

//1.3
var hacker2 = "James";

//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops

//3.1
var driverCapitalised = [];
for (var i = 0; i < hacker1.length; i++) {
  driverCapitalised += hacker1[i].toUpperCase() + " ";
}

console.log(driverCapitalised);

//3.2

var driverReversed = [];
for (var i = hacker1.length - 1; i >= 0; i--) {
  driverReversed += hacker1[i];
}

console.log(driverReversed);

//3.3

if (hacker1 === hacker2) {
  console.log("What!? You both have the same name");
} else if (hacker1.length > hacker2.length) {
  for (var i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The drivers name goes first");
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first definitely");
      break;
    }
    else if(hacker2 === hacker1.slice(0, hacker1.length-1)){
        console.log("The drives name goes first")
        break;
    }
  }
} else {
  for (var i = 0; i < hacker2.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log("The drivers name goes first");
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first definitely");
      break;
    }
    else if(hacker1 === hacker2.slice(0, hacker2.length-1)){
        console.log("Yo, the navigator goes first definitely")
        break;
  }
}

//Bonus1:

var paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus efficitur placerat. Mauris dapibus sem nec odio tristique, sit amet pretium sem congue. Mauris nisl metus, egestas et arcu quis, efficitur scelerisque neque. Praesent erat nibh, sagittis at interdum ac, cursus eu purus. Maecenas condimentum luctus blandit. Morbi sodales elit vitae elit commodo, sed consectetur ex tempor. Aenean feugiat lobortis rhoncus. Sed facilisis, neque eget pretium venenatis, nisl massa sagittis eros, sed tempor orci dui vitae mi. Ut sollicitudin ipsum et arcu fringilla, vitae elementum lacus rutrum. Aliquam et tellus id turpis accumsan convallis.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse tincidunt sapien sit amet lorem gravida, sed rhoncus sem placerat. Nullam semper pharetra egestas. Donec elementum lacus sed nisi luctus imperdiet. Vivamus eu urna molestie, condimentum felis vel, vestibulum sapien. Donec est augue, luctus sit amet dapibus quis, laoreet quis lacus. Donec mattis velit vel commodo dignissim. Ut sollicitudin nulla nec volutpat semper. Maecenas non mollis lorem. Maecenas finibus at ipsum et sollicitudin. Suspendisse sagittis justo facilisis, elementum odio sit amet, fringilla erat. Duis vel arcu vitae quam convallis congue. Suspendisse mi mi, porta et velit fermentum, viverra ultricies lorem. Cras facilisis laoreet vestibulum. Etiam sed pretium lacus. Cras et eros eu ligula laoreet blandit sit amet non dolor. Sed at vulputate orci. Praesent id maximus erat. Phasellus eu porttitor magna. Etiam eu sem at eros laoreet iaculis. Duis mollis eget est consectetur congue.";

var count = 2; // set count equal to 2 has for first and last words
for (var i = 0; i < paragraphs.length; i++) {
  if (paragraphs[i] === " ") {
    count++;
  }
}

console.log(count);

var etCount = 0;
var etPlaceholder = [];
for (var i = 0; i < paragraphs.length; i++) {
  etPlaceholder = " " + paragraphs[i] + paragraphs[i + 1] + " "; // create string ' et '
  if (etPlaceholder === " et ") {
    etCount++;
  }
}
console.log(etCount);

// Bonus 2

var phraseToCheck = "Was it a car or a cat I saw?";
var phraseReverse = "";
var newPhrase = "";

for (var i = 0; i < phraseToCheck.length; i++) {
  // function to remove puncation
  if (
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === "?" ||
    phraseToCheck[i] === "!"
  ) {
    continue;
  } else {
    newPhrase += phraseToCheck[i].toUpperCase();
  }
}
for (var i = newPhrase.length - 1; i >= 0; i--) {
  // reverse phrase
  phraseReverse += newPhrase[i];
}

if (newPhrase === phraseReverse) {
  // compare phrases
  console.log("The phrase is a Palindrome");
}
