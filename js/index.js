// Iteration 1: Names and Input

const hacker1 = "Pedro";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Gabriela";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops 

// no loops (3.1 and 3.2)
const capitalizeDriverName = hacker1.toUpperCase().split("").join(" ");
console.log(capitalizeDriverName);

const reverseNavName = hacker2.split("").reverse().join("");
console.log(reverseNavName);

// with loops (3.1 and 3.2)
let capitalizeDriverName_2 = ""
for (let i = 0; i < hacker1.length; i++){
   capitalizeDriverName_2 += hacker1[i].toUpperCase() + " ";
}
console.log(capitalizeDriverName_2);

let reverseNavName_2 = "";
for (let j = hacker2.length -1 ; j >= 0; j--){
    reverseNavName_2 += hacker2[j];
}
console.log(reverseNavName_2);

// 3.3 

    if (hacker1.localeCompare(hacker2) === -1){
        console.log("The driver's name goes first.");
    } else if (hacker1.localeCompare(hacker2) === 1) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }


//Bonus 1 

const loremGenerator = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit ligula, porttitor pharetra faucibus vel, aliquet a augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus commodo nibh et augue molestie mollis. In odio tellus, condimentum vitae sapien at, commodo rhoncus diam. Duis at augue orci. Suspendisse dignissim turpis et dui viverra sagittis. Integer pulvinar, libero ut consequat ullamcorper, velit nibh vehicula nisi, vel pellentesque massa orci vel sapien. Phasellus et turpis lectus. Etiam ornare urna lacus, scelerisque blandit nunc sodales vel. Quisque scelerisque dictum quam, in faucibus lorem rutrum nec. Suspendisse potenti. Mauris massa ligula, tincidunt in velit id, commodo imperdiet dolor. Duis eleifend orci nisl, at faucibus magna mollis eget. Curabitur faucibus hendrerit purus. Vestibulum semper vestibulum tortor faucibus ultricies. Mauris neque ex, hendrerit non blandit ut, pulvinar semper urna. Suspendisse accumsan quis magna mollis tempor. Sed faucibus efficitur malesuada. Ut commodo eleifend arcu, in iaculis massa dignissim non. Curabitur aliquam turpis a nisl tempus, non tincidunt augue gravida. Aenean faucibus eros ac eros rutrum, eget ullamcorper urna condimentum. Nullam ultricies blandit est, vel tempor ex efficitur eu. Phasellus in accumsan turpis. Fusce non sodales nulla, a efficitur mi. Nunc lacinia interdum justo eu rhoncus. Nulla vulputate euismod facilisis. Pellentesque lorem eros, rhoncus eu nunc et, sodales tincidunt nisi. Suspendisse potenti. Donec dui metus, pellentesque id felis at, volutpat scelerisque justo. Suspendisse nec dictum mauris. Nunc purus nisl, vestibulum in sapien eu, finibus ultrices erat. Pellentesque consequat libero eu suscipit porta. Curabitur sit amet mollis velit.";

let countWords = 1;
let countWordEt = 0;

for (let i = 0; i < loremGenerator.length; i++){
    if (loremGenerator[i] === " "){
        countWords += 1;
    } else if (loremGenerator[i] === "e" && loremGenerator[i+1] === "t" && loremGenerator[i-1] === " " && loremGenerator[i+2] === " ") {
        countWordEt += 1;
    } else if (loremGenerator[i] === "e" && loremGenerator[i+1] === "t" && loremGenerator[i-1] === " " && loremGenerator[i+2] === ",") {
        countWordEt += 1;
    } else if (loremGenerator[i] === "e" && loremGenerator[i+1] === "t" && loremGenerator[i-1] === "." && loremGenerator[i+2] === " ") {
        countWordEt += 1;
    } else if (loremGenerator[i] === "e" && loremGenerator[i+1] === "t" && loremGenerator[i-1] === "." && loremGenerator[i+2] === ",") {
        countWordEt += 1;
    }
}

console.log(countWords);
console.log(countWordEt);

// Bonus 2 

let phraseToCheck = (phrase) => {
    let correctedPhrase = "";
  for (let i = 0; i < phrase.length; i++){
    if (phrase[i] !== " " && phrase[i] !== "," && phrase[i] !== "." && phrase[i] !== "!" && phrase[i] !== "?" && phrase[i] !== "'") {
        correctedPhrase += phrase[i].toLowerCase();
    }
  }
  
   let reversedPhrase = "";
  for (let j = correctedPhrase.length-1 ; j >= 0; j--) {
   reversedPhrase += correctedPhrase[j];
  }

  if (reversedPhrase === correctedPhrase) {
    console.log(`IT'S A PALINDROME!! --> ${reversedPhrase} = ${correctedPhrase}`);
  } else {
    console.log("Nope, not a palindrome");
  }
}

let sentence = "No 'x' in Nixon";
phraseToCheck(sentence);
