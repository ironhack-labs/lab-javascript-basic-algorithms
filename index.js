// Iteration 1: Names and Input
const pilotName = "Sébastien" ;
const navigatorName = "Daniel"

console.log(`The driver's name is ${pilotName}`);
console.log(`The navigator's name is ${navigatorName}`)
// Iteration 2: Conditionals
if (pilotName.length > navigatorName.length) {
    console.log(`The driver has the longest name, it has ${pilotName.length} characters.`);
} else if (pilotName.length < navigatorName.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`)
} else if (pilotName.length === navigatorName.length) {
    console.log(`Wow, you both have equally long names, ${pilotName.length} characters!`)
}

// Iteration 3: Loops
//3.1
let capitalPilotName = ""
for (let i = 0; i < pilotName.length; i++) {
    const letterPilot = pilotName[i].toUpperCase();
    capitalPilotName += letterPilot + " "
}
console.log(capitalPilotName);
//3.2
let reverseName =  " "
for (let i = navigatorName.length -1; i >= 0 ; i--) {
    reverseName += navigatorName[i];
}
console.log(reverseName);

//3.3
if (pilotName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (pilotName > navigatorName) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (pilotName = navigatorName) {
  console.log("What?! You both have the same name?");
}

//Bonus 1:

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies justo ac sapien fermentum auctor. Duis commodo mauris sed ligula ullamcorper pharetra. Curabitur luctus magna quis neque condimentum venenatis. Duis sed nisl at ex maximus posuere. Nunc nec sapien semper, venenatis et arcu quis, convallis nulla. Sed placerat magna dapibus enim rutrum, ut ornare augue imperdiet. Nunc nec augue maximus, suscipit odio eget, mollis leo. Donec a euismod mi, non iaculis tellus. Aenean sit amet malesuada tortor. Phasellus viverra velit non magna venenatis, at aliquet eros venenatis. Sed id dapibus enim, in facilisis ante. Pellentesque laoreet aliquet arcu at tristique et."

let wordCount = 0;
let spaceCount = 0;
for ( let i = 0 ; i < longText.length ; i++) {
    if (longText[i] === " ") {
        spaceCount ++;
    }
}
  wordCount = spaceCount +1;
  console.log(wordCount);

let etcount = 0
for (let j = 0 ; j < longText.length ; j++) {
    const fourChars = longText[j] + longText[j+1] + longText[j + 2] + longText[j + 3] 
    if(fourChars.toLowerCase() === " et " || fourChars.toLowerCase() === " et."){
        etcount++
    }

   
    // if (longText[j] === "e" && longText[j+1] === "t" && longText[j - 1] === " " && (longText [j + 2] === " " || longText [j + 2] === ".")) {
    //     etcount ++;
    // }
}
console.log(etcount);

//Bonus 2
