// Iteration 1: Names and Input
let hacker1 = "Martin";
console.log(`The driver is ${hacker1}.`);
let hacker2 = "Amy";
console.log(`The navigator is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loop
// Print character's name in caps seperated by a space:
let styledName = "";
for (let i = 0; i <= hacker1.length -1; i++) {
    let uppercase = hacker1[i].toUpperCase() + " ";
    styledName += uppercase
}
console.log(`${styledName}`);

// Print name in reverse order:
function reverseName(hacker2) {
    let reversed = '';
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reversed += hacker2[i];
    }
    return reversed;
};
console.log(reverseName(hacker2));

// Lexivographic order:
if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1:
let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus tristique magna, nec molestie eros euismod vitae. Praesent odio purus, cursus eget consectetur sit amet, suscipit vitae massa. Cras malesuada dignissim turpis, eget pharetra velit hendrerit vel. Integer vel eros vel ligula laoreet condimentum. Praesent auctor urna id sem ornare finibus. Curabitur nec ligula iaculis, facilisis lorem laoreet, tempor urna. Suspendisse in tincidunt ex. Cras eget volutpat arcu, nec dapibus nibh. Morbi erat diam, tristique vitae fringilla non, mattis non purus. Morbi commodo enim at nisi efficitur porttitor. Maecenas sodales at urna at bibendum. Etiam et ligula at ex euismod aliquam ac eget arcu. Pellentesque tincidunt lobortis eros in molestie. Maecenas lacinia ultrices erat, eu vestibulum velit iaculis tincidunt. Vivamus lectus turpis, tristique sit amet scelerisque pellentesque, tristique lacinia sapien. Nullam efficitur consectetur mauris ut aliquam. \
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ultrices facilisis nisl ut rhoncus. Sed dignissim molestie massa blandit sollicitudin. Nullam vestibulum mollis ipsum, sed hendrerit risus rhoncus vitae. Aenean non neque mauris. Quisque ac eros a lacus pretium gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \
Donec posuere ut ligula id rutrum. In commodo nec nisi eget facilisis. Duis congue, purus eu vulputate porta, ante libero euismod nulla, eget ultricies erat odio vitae elit. Phasellus fringilla mauris non eros elementum maximus. Praesent sed dolor sit amet enim placerat tempor. Nunc commodo nisi non pharetra ornare. Mauris finibus vehicula libero, in pellentesque urna imperdiet in. In hac habitasse platea dictumst. Suspendisse euismod semper imperdiet. Morbi porttitor sapien eget arcu vehicula, sed viverra erat eleifend. Etiam diam diam, rhoncus et magna sit amet, efficitur scelerisque lorem. Mauris porttitor lacus in felis eleifend, nec ullamcorper odio mattis."
let wordCount = 1;
function wordCounter(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        wordCount++;
      }
    }
    console.log(`There are ${wordCount} words.`);
  }
wordCounter(string)


