// Iteration 1: Names and Input
const hacker1 = "Erian";
const hacker2 = "Kateryna";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    
}

// Iteration 3: Loops
let test = "";
for(i = 0; i < hacker1.length; i++) {
    test += hacker1[i] + " ";
}

console.log(test.toUpperCase());


let test2 = "";
for(i = hacker2.length -1; i >= 0; i--) {
    test2 += hacker2[i];
}

console.log(test2);


if (hacker1.localeCompare(hacker2) < 0) {
    console.log ("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log ("Yo, the navigator goes first, definitely.");
} else {
    console.log ("What?! You both have the same name?");
}


////////////BONUS/////////


let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis nisi, porta ut libero in, elementum tincidunt odio. Morbi egestas faucibus enim nec tempus. Duis quis nisl eu metus consequat consectetur. Vestibulum fringilla mi magna, non lacinia leo ornare in. Sed volutpat pharetra purus, non dignissim diam faucibus at. Vivamus posuere scelerisque eros, at placerat elit commodo nec. Nam sagittis tellus in elit convallis accumsan. Maecenas cursus imperdiet ultricies. Sed in ultrices velit. Donec a ex nisl. Nulla commodo odio purus, ac suscipit odio tincidunt et. Maecenas laoreet hendrerit mi sed fermentum. Mauris mauris mi, rutrum et neque et, tempor lacinia massa. Integer vestibulum ligula eget mollis mattis. Nam vel nunc turpis. Vivamus et tristique arcu, eget aliquet orci. Suspendisse potenti. Donec tempor lectus quis turpis viverra ullamcorper. Mauris finibus purus et aliquam porttitor. Ut consectetur ligula eu laoreet vulputate. Aenean vehicula at nibh eget laoreet. Phasellus feugiat eleifend quam in tincidunt. Mauris ultricies lacus non ante mollis porta. Praesent aliquet, mi in scelerisque vestibulum, massa ex dictum justo, efficitur lacinia augue metus eget sem. Sed accumsan mollis convallis. Etiam a mi placerat, pulvinar orci non, malesuada quam. Aenean malesuada velit sed sagittis pulvinar. Suspendisse a felis vitae neque sodales ornare quis quis justo."
console.log(longText.length);

let wordCounter = 1;
for(i = 0; i <= longText.length; i++) {
    if (longText[i] === " ") {
        wordCounter+= 1;
    }
}

console.log(wordCounter);



let etCounter = 0;
let wordToCount = "et"

let words = longText.split(' ');

for(i = 0; i <= words.length; i++) {
    if(words[i] === wordToCount) {
        etCounter++;
    }
}

console.log(etCounter);


//still working on last one
let phraseToCheck = "Was it a car or a cat I saw?";

let changedPhrase = "";

for(i = phraseToCheck.length -1; i >= 0; i--) {
    let char = phraseToCheck[i].toLowerCase();
    if(char >= "a" && char <= "z") {
        changedPhrase+= char;
    }
}
console.log(changedPhrase);

