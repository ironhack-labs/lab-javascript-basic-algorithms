// Iteration 1: Names and Input
let hacker1 = "Anabella";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Anne";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
function checkNameLength (a, b) {
    if (a.length > b.length) {
        console.log(`The driver has the longest name, it has ${a.length} characters.`)
    } else if (a.length == b.length) {
        console.log(`Wow, you both have equally long names, ${b.length} characters!`)
    } else {
        console.log(`It seems the navigator has the longest name, it has ${b.length} characters.`)
    } 
}

checkNameLength(hacker1, hacker2);

// Iteration 3: Loops

// 3.1
let driversName = "";
for(let i = 0; i < hacker1.length; i++) {
    driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName.trim()); // trim takes spaces at the beginning and the end

// 3.2
let navigatorsNameReversed = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    navigatorsNameReversed += hacker2[i];
};
console.log(navigatorsNameReversed);

// 3.3

//with a loop 

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

let length = Math.max(hacker1.length, hacker2.length);
let output;
for (let i = 0; i < length; i++) {
  if (hacker1 === hacker2) {
    output = `What?! You both have the same name?`;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
    output = `The driver's name goes first.`;
    break;
  } else if (hacker1[i] > hacker2[i] || hacker2[i] === undefined) {
    output = `Yo, the navigator goes first definitely.`;
    break;
  } else if (hacker1[i] === hacker2[i]) {
    continue;
  }
}
console.log(output);

// without a loop:
let sortedArray = [hacker1, hacker2];
sortedArray.sort();

if (sortedArray[0] === hacker1) {
    console.log(`The driver's name goes first.`);
} else if (sortedArray[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}; 

// alternative (RENATO):
/*if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely");
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
};*/


// BONUS:

// BONUS 1
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur tristique nulla ut efficitur. Quisque hendrerit risus lorem, nec lacinia sem vulputate id. Maecenas ut nibh imperdiet, mattis ipsum at, malesuada quam. Ut tristique efficitur massa, in ornare lacus viverra at. Nullam aliquet est ut ligula accumsan feugiat. Curabitur sagittis urna quis diam tempus vestibulum. Quisque elementum odio erat, sed posuere est rutrum tincidunt. Ut eget suscipit arcu. Ut eu tempor sapien. Quisque vulputate aliquam justo sit amet finibus. Sed bibendum vitae urna a feugiat. Praesent aliquam lectus arcu, vel hendrerit purus aliquam vel. Aenean ac risus at leo sagittis aliquet ut a libero. Ut ultrices aliquam metus sit amet laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque volutpat in nisi id ultricies. Integer posuere ut dui a suscipit. Nam nec dolor scelerisque, laoreet odio et, aliquet nunc. Suspendisse non vulputate libero, sed eleifend ligula. Praesent consequat turpis ac sapien molestie egestas. Praesent eget purus diam. Etiam commodo risus commodo lacus scelerisque posuere. Mauris sed nibh vel ligula vehicula pellentesque. Curabitur ac eros eu sapien pharetra maximus a rhoncus nisl. Cras volutpat eros ac semper efficitur. Pellentesque semper odio et sem ornare auctor. Nullam eu porta nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat velit sit amet tortor iaculis, vitae tincidunt dui varius. Aliquam accumsan elit in gravida consequat. Praesent sed nisi ac ligula dapibus porta vel ut ex. Interdum et malesuada fames ac ante ipsum primis in faucibus."

function textLength(string) {
    console.log(`The text is ${string.split(" ").length} words long.`);
}
textLength(text);

function countsSpecificWord(string, word) {
    let count = 0;
    string.split(" ").forEach(element => {
        if (element === word) {
            count++;
        };
    });
    console.log(`The word appears ${count} time(s) inside the text.`);
}

countsSpecificWord(text, "et");

// Bonus 2 (unfinished...)

const phraseToCheck = "race car";

function checkPalindrome (string) {
    let palindrome = true;
    for (i = 0; i < string.length; i++) {
        if (string[i] !== string.split("").reverse()[i]) {
            palindrome = false;
        } else if (string[i] === " " || string.split("").reverse()[i] === " " ) {
            break;
        } else {
            continue;
        }
    };
    if (palindrome) {
        console.log(`The phrase is a palindrome.`)
    } else {
        console.log(`The phrase is NOT a palindrome.`)
    }
}

checkPalindrome(phraseToCheck);