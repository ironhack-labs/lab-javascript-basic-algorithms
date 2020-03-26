// Iteration 1: Names and Input

let hacker1 = "Florian";
let hacker2 = "Hakim";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver's name goes first.");
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let result = "";
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i];    
    }
console.log(result.toUpperCase());

let inverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    inverse += hacker2[i];    
    }
console.log(inverse);

if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non imperdiet nibh. Suspendisse in dignissim ante, eget fermentum diam. In ante erat, auctor nec metus sit amet, rhoncus sodales ligula. Morbi semper dolor id tincidunt faucibus. Nunc aliquet sollicitudin ultrices. Aliquam id magna nunc. Donec sit amet dolor dolor. Quisque faucibus, nunc sed tristique hendrerit, eros sapien lobortis urna, ac fermentum lorem magna ut odio. Donec commodo a purus ut placerat. In tempus purus quis ex cursus, et dictum felis aliquet. Praesent ullamcorper risus massa, sed aliquam sem molestie porttitor. In non justo sapien. Nullam vel ante ut lorem malesuada mattis. Quisque at imperdiet dui, non feugiat nunc. Integer tincidunt vestibulum quam in auctor. Nunc vel velit nisl. Mauris gravida mauris ut fermentum imperdiet. Nunc ex lectus, semper eget lorem at, semper lacinia ligula. Praesent et odio congue, faucibus lorem suscipit, placerat nibh. Etiam dapibus, libero quis maximus faucibus, mauris justo suscipit tortor, et mattis elit justo id arcu. Proin tempus tortor eu lobortis convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ligula justo, finibus vitae hendrerit sed, pulvinar in dolor. Curabitur eu orci consequat, suscipit velit ut, efficitur sapien. Vivamus commodo orci in blandit lobortis. In hac habitasse platea dictumst. Vestibulum consectetur varius lorem, non sagittis dolor ullamcorper sit amet. Aliquam erat volutpat. Maecenas dictum ex sit amet dapibus efficitur. Proin ipsum ipsum, consectetur sit amet leo eget, pretium laoreet nisl.";

function numberOfWords(text) {
    return text.split("").length;
}

console.log(numberOfWords(lorem));

function countWord(text, word) {
    return text.split(`${word} `).length - 1;
}

console.log(countWord(lorem, "et"));

// Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
;

function isPalindrome(text) {
    let char = /[\W_]/g;
    text = text.toLowerCase().replace(char, '');
    for (i = 0; i <= text.length / 2; i++) {
        if (text[i] !== text[text.length -1 -i]) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(isPalindrome(phraseToCheck));