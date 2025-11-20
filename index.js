// Iteration 1: Names and Input
const hacker1 = "Alexandra";
const hacker2 = "Erica";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
//3.1
let capitalized = ''
let spaceBetween = ''
for(let i=0; i < hacker1.length; i++) {
    capitalized += hacker1[i].toUpperCase();
    spaceBetween = capitalized.split('').join(' ');
}

console.log(spaceBetween);

//3.2
let reversedWord = ''
for(let i=hacker2.length - 1; i >= 0; i--) {
    reversedWord += hacker2[i];
}

console.log(reversedWord);

3.3
const driver = hacker1.toLowerCase();
const navigator = hacker2.toLowerCase();

if(navigator.localeCompare(driver) === 1) {
    console.log("The driver's name goes first.");
} else if (navigator.localeCompare(driver) === -1) {
    console.log("Yo, the navigator goes first, definitely.");
} else if (navigator.localeCompare(driver) === 0) {
    console.log("What?! You both have the same name?");
} 


//Bonus 1: 
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ac tortor in faucibus. Cras euismod urna ac purus convallis porttitor. Nam dapibus arcu nulla, vel faucibus est viverra vel. Vivamus eget porttitor arcu. Duis dolor ex, tempus convallis euismod a, consectetur scelerisque sem. Ut vulputate ipsum condimentum nunc eleifend, ut sollicitudin ligula egestas. Quisque cursus mauris augue, in pulvinar diam finibus ac. Nunc aliquam tincidunt lacus, non pellentesque est hendrerit sit amet. Duis ut arcu sapien. Nullam porttitor rutrum tortor sit amet euismod. Quisque nunc nisl, condimentum in tellus eu, feugiat fringilla enim. Vestibulum est eros, ornare eu diam nec, dapibus vehicula diam. Fusce gravida ante eget lectus posuere, at hendrerit erat sodales. Morbi rhoncus efficitur nunc, in euismod sapien malesuada ut. Phasellus eu porta nisl, a lacinia neque. Ut aliquet lectus eget purus tincidunt placerat vel et ipsum. Fusce lacus ante, sollicitudin vitae ultricies in, dignissim sed sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tincidunt libero eu eleifend semper. Vivamus blandit mauris quis diam dapibus, sed scelerisque tellus tincidunt. Donec molestie vestibulum fermentum. Praesent ipsum turpis, faucibus ut pulvinar nec, posuere et nulla. Fusce molestie at metus eu suscipit. Cras at dapibus purus. Duis nec eleifend purus. Duis nec quam elit. Nulla facilisi. Nunc sit amet ligula pharetra, euismod arcu id, porta dolor. Integer id tempor eros. Aenean semper, elit vel cursus tempus, erat justo faucibus odio, id posuere erat nibh eget mauris. Aenean non dolor nunc. Pellentesque risus nisl, maximus vitae mi a, congue consequat dolor. Vestibulum dui eros, congue quis sapien eu, tristique lacinia nisi. Curabitur augue purus, lacinia eu placerat at, auctor nec neque. Aenean ac accumsan purus. Aliquam odio tellus, vulputate et erat eu, consectetur maximus sapien. Proin ac suscipit ipsum. Maecenas euismod, lectus eget aliquet accumsan, nunc arcu porttitor justo, et feugiat dui massa quis neque. Morbi eget tempus dui. Quisque at velit nibh. Ut dolor nisi, dapibus sit amet diam vel, lobortis consequat lectus."

let countStrings = 0;
let countEt = 0

for(let i=0; i < longText.length; i++) {
    if(longText[i] === " "){
        countStrings += 1;
    }
    else if(longText[i] + longText[i + 1] === "et") {
        countEt++;
    }
}

console.log(countStrings);
console.log(countEt);

//Bonus 2
const phraseToCheck = "race car"; // "stack cats" ,
let phrase = phraseToCheck.toLowerCase();
let reverseString = "";

for(let i=phrase.length -1 ; i >= 0 ; i--) {
    reverseString += phrase[i];
}

if(phrase === reverseString) {
    console.log(`${phrase}, it's a Palindrome.`)
} else {
    console.log(`${phrase}, it's not a Poliandrome.`)
}