// Iteration 1: Names and Input
let hacker1 = "Henrique";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Fabio";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let h1Length = hacker1.length;

let h2Length = hacker2.length;

if (h1Length > h2Length) {
    console.log(`The driver has the longest name, it has ${h1Length} characters.`);
} else if (h1Length < h2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${h1Length} characters!`);
}

// Iteration 3: Loops
let h1Capitals = "";
for (let i = 0 ; i < h1Length; i += 1) {
    h1Capitals += hacker1.charAt(i)+" ";
}

console.log(h1Capitals.toUpperCase());

let h2Rev="";
for (let i = h2Length; i >= 0; i-= 1) {
    h2Rev += hacker2.charAt(i);
}

console.log(h2Rev);

if (hacker1.localeCompare(hacker2) < 0) {
     console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2)>0){
    console.log("Yo, the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id pharetra leo, a auctor turpis. Suspendisse sed quam sem. Praesent in vulputate massa. Morbi finibus vitae quam vitae cursus. In cursus rhoncus neque, eget ultrices metus facilisis non. Suspendisse potenti. In et urna ante. Nunc vitae augue rhoncus, placerat mauris vel, ullamcorper velit. Etiam eu turpis luctus, blandit leo gravida, auctor turpis. Suspendisse nisl tellus, tincidunt ac libero nec, varius fermentum diam. Etiam facilisis nibh quis diam tincidunt, sed rhoncus nisl elementum. Nunc ullamcorper semper eros, vehicula congue risus eleifend sed. Sed eu porttitor lectus. Integer eleifend velit in risus tempus, sed laoreet libero mollis. Praesent accumsan auctor dolor. Donec feugiat id mi in placerat. Nam in dolor at leo elementum efficitur id ac justo. Mauris porta mi eu nibh tincidunt rhoncus. Ut non pharetra neque. Nulla facilisi. Etiam neque sapien, fringilla vel ultrices sed, blandit at ligula. Cras efficitur magna id dolor maximus tincidunt. Aliquam eget tincidunt velit, sed consectetur turpis. Fusce ultricies orci mollis lobortis varius. Donec dapibus placerat cursus. Duis bibendum dui ut justo tincidunt, et condimentum turpis auctor. Ut nec ligula cursus, vehicula turpis ut, scelerisque magna. Integer porta faucibus neque ut pulvinar. Nulla nec ex in dui varius gravida ut posuere orci. Vivamus venenatis ultricies posuere. Phasellus convallis erat id nibh cursus, et efficitur odio ultrices. Morbi non lorem at ipsum pulvinar congue. Phasellus ut neque elit. Praesent suscipit commodo lectus, ac auctor tellus. Etiam ut massa ultricies, efficitur justo eget, gravida purus. Fusce imperdiet tortor eget arcu porttitor ullamcorper."

let numberWords = 0;

let numberEts = 0;

for (let i = 0; i <= loremIpsum.length; i += 1) {
    if (loremIpsum.charAt(i) === " ") {
        numberWords += 1;
    }
    if (loremIpsum.slice(i,i+4) === " et ") {
        numberEts += 1;
    }
}
numberWords += 1; // adiciona a última palavra

console.log(`The number of words is ${numberWords}.`);
console.log(`The number of "et"s is ${numberEts}.`);

// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";

let phraseProcessed = "";

let phraseRev = "";

for (let i = 0; i < phraseToCheck.length; i += 1) {
    switch (phraseToCheck.charAt(i)) {
        case " ":
        case "?":
        case ".":
        case ",":
        case ";":
        case "!":
        case "'":
            continue;
        default:
            phraseProcessed += phraseToCheck.charAt(i).toUpperCase();
    }
}

for (let i = phraseProcessed.length; i >= 0; i -= 1) {
    phraseRev += phraseProcessed.charAt(i);
}

if (phraseProcessed === phraseRev) {
    console.log(`It is a palindrome!`);
} else {
    console.log(`It isn't a palindrome...`);
}
