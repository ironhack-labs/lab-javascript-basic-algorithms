// Iteration 1: Names and Input
hacker1 = "Marcus";
console.log(`The driver's name is ${hacker1}`);
hacker2 = "NotMarcus";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops


// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

function nameSpacedLettersGenerator (name) {
    nameUppercase = name.toUpperCase();
    nameSpacedLetters = "";
    for (i=0; i <nameUppercase.length; i++) {
        nameSpacedLetters+=nameUppercase[i]
        if (nameUppercase.length != i-1) {
            nameSpacedLetters +=" ";
        }
    }
    console.log(nameSpacedLetters)
}

nameSpacedLettersGenerator(hacker1);
nameSpacedLettersGenerator(hacker2);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

function nameReverseOrder (name) {
    nameArray = [];
    for (i=0; i<name.length; i++) {
        nameArray.push(name[i]);
    }
    nameArray.reverse()
    reversedString = "";
    for (i=0; i<nameArray.length; i++) {
        reversedString += nameArray[i]
    }
    console.log(reversedString);
}

nameReverseOrder(hacker1);
nameReverseOrder(hacker2);

//Depending on the lexicographic order of the strings, print:

switch (hacker1.localeCompare(hacker2)) {
    case -1: console.log("Yo, the navigator goes first, definitely.");
    case 0: console.log("What?! You both have the same name?");
    case 1: console.log("The driver's name goes first");
}

//Bonus 1: Go to the lorem ipsum generator website...
longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare volutpat neque sit amet vehicula. Duis mauris dolor, accumsan eu pulvinar nec, lobortis eu augue. Nullam eget porttitor dui. Vivamus imperdiet, ipsum a volutpat pretium, nibh odio eleifend ante, non commodo eros est eget lorem. Ut et sagittis ipsum. Nam ut elit eu massa finibus scelerisque. Donec euismod, arcu non interdum scelerisque, elit dui tempor diam, eu rutrum dui massa id felis. Nulla sit amet turpis est. Aliquam cursus gravida nibh, sed eleifend urna. Ut et enim ut ante tincidunt eleifend a eu ex. Integer vitae accumsan sapien, non dapibus risus. Integer dignissim rhoncus volutpat. Vivamus interdum vel tellus sed lacinia. Sed a lectus dapibus, finibus lectus non, gravida enim. Donec pellentesque iaculis arcu, et accumsan leo tristique non. Nunc eu scelerisque nisi. Ut dictum porta aliquam. Ut mollis vulputate ligula, at convallis mi tempor nec. In in sapien at orci euismod sagittis sit amet a eros. Nam facilisis, sem mollis mollis hendrerit, tortor quam porta odio, in fermentum velit erat id risus. Nullam ultrices mollis tempor. Aliquam erat volutpat. Donec interdum gravida porttitor. Nam vitae luctus lorem. Mauris viverra metus quis urna tempus pellentesque. Nunc id consequat enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sagittis ac diam vitae suscipit. Proin ac lacus vulputate lorem tincidunt dignissim. Vivamus quis massa ac metus pulvinar molestie. In hac habitasse platea dictumst. Donec egestas metus nec lorem tristique, et facilisis risus malesuada. Ut aliquam, nisl eleifend suscipit volutpat, neque tellus sodales nisi, sed tincidunt elit magna a turpis. Integer faucibus sem vitae ligula egestas vestibulum. Suspendisse efficitur lorem orci, nec porttitor turpis malesuada nec. Ut aliquam augue id erat iaculis, sed aliquet lorem tristique. Maecenas tellus turpis, rutrum malesuada mollis non, imperdiet at eros. Nullam dui mauris, tincidunt at orci sit amet, sodales ullamcorper dui. Morbi et sapien a tellus ornare mollis. Sed molestie libero in ullamcorper cursus."

// Bonus 1.2. Wordcount
wordCount = longText.split(" ").length;
console.log(wordCount);

//Bonus 1.3 et
allWordArray = longText.split(" ");
etCount = 0;

for (i=0;i< allWordArray.length;i++) {
    if(allWordArray[i] === "et" || allWordArray[i] === "Et" || allWordArray[i] === "et." || allWordArray[i] === "Et.") {
        etCount += 1;
    }
}
console.log(`Etcount: ${etCount}`)

//Bonus 2
phraseToCheck = "No 'x' in Nixon"
phraseToCheckCleaned = phraseToCheck.toLowerCase();
phraseToCheckCleaned = phraseToCheckCleaned.replace(/[,! ']/g,""); //RegEx Expression Pasted from Web
phraseToCheckCleanedReversed = "";
for (i=0; i<phraseToCheckCleaned.length; i++) {
    phraseToCheckCleanedReversed += phraseToCheckCleaned[phraseToCheckCleaned.length-i-1]
}

console.log(`Cleaned: ${phraseToCheckCleaned}; /nReversed: ${phraseToCheckCleanedReversed}`);

if (phraseToCheckCleaned === phraseToCheckCleanedReversed) {
    console.log(`The word ${phraseToCheck} is a Palindrome.`)
}
else {
    console.log(`The word ${phraseToCheck} is NOT a Palindrome`)
}