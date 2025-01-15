// Iteration 1: Names and Input
let hacker1 = "Anjana";
console.log(hacker1);

let hacker2 = "Sergio";
console.log(hacker2);

// Iteration 2: Conditionals
let hacker1Name = hacker1.length;
let hacker2Name = hacker2.length;
if (hacker1Name > hacker2Name) {
    console.log(`The driver has the longest name, it has ${hacker1Name} characters.`);
} else if (hacker1Name < hacker2Name) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Name} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Name} characters!`);
}

// Iteration 3: Loops
let driverName = hacker1.toUpperCase();
console.log(driverName);

//Uppercased Driver name
let spacedDriverName;
spacedDriverName = driverName[0] + ' ';
for (i = 1; i < driverName.length - 1; i++) {
    spacedDriverName += driverName[i] + ' ';
}
spacedDriverName += driverName[driverName.length - 1];
console.log(spacedDriverName);

//Navigator name
let reversedHacker;
reversedHacker = hacker2[hacker2.length - 1];
for (i = hacker2.length - 2; i >= 0; i--) {
    reversedHacker += hacker2[i];
}

console.log(reversedHacker);

// Lexicographic order comparision
let firstCharOfDriver = hacker1[0];
let firstCharOfNavigator = hacker2[0];

console.log(firstCharOfDriver);
console.log(firstCharOfNavigator);

if (firstCharOfDriver < firstCharOfNavigator) {
    console.log("The driver's name goes first.");
} else if (firstCharOfDriver > firstCharOfNavigator) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus imperdiet nisi nec rhoncus. Maecenas eu euismod ligula, vitae elementum velit. Nunc pellentesque eget risus quis viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris tortor, varius id consequat quis, ullamcorper nec eros. Donec facilisis turpis arcu, tincidunt blandit velit euismod ut. Nulla scelerisque consectetur hendrerit. Praesent in dolor in velit mattis vestibulum eu et purus. Sed ut diam eros. In in iaculis dolor. Etiam blandit velit sapien, id commodo erat posuere in. Aliquam quis eros accumsan, pharetra eros ac, cursus nibh. Fusce venenatis dapibus urna nec ornare. In sed est nec massa laoreet pretium et at neque. Aliquam sodales faucibus quam, et blandit quam ornare eu. Duis pulvinar sit amet dui eu auctor. Donec et nisi a nisi interdum blandit. Integer sit amet sapien nunc. Suspendisse convallis ex ex, eu molestie ligula tincidunt commodo. Curabitur maximus venenatis vehicula. Integer tempor dui quis quam gravida, at rhoncus nisi eleifend. Suspendisse et rutrum nunc. Nunc finibus ac sapien quis posuere. Curabitur a ornare dolor. Fusce tincidunt ollicitudin leo et molestie. Vestibulum ut mauris at elit bibendum sagittis sit amet ut mauris. Pellentesque hendrerit ultricies turpis. Nulla facilisi. Etiam felis lacus, posuere non purus sed, blandit pellentesque velit. Mauris pharetra luctus purus, in porta felis commodo quis. Sed sodales pulvinar est, non facilisis neque fringilla eu. Ut molestie diam nec sodales aliquet. Donec porttitor sapien quis enim varius, at facilisis turpis laoreet. Pellentesque tristique justo odio, ut pretium quam consectetur eget. Sed urna nisi, aliquet volutpat neque congue, consectetur lacinia justo. Phasellus at leo vitae mauris sodales condimentum quis a massa. Mauris nec justo quis dui ornare pellentesque. Etiam a eros id urna luctus tristique nec et elit."


const words = longText.split(' ');
console.log(words.length);

let count = 0;
for (i = 0; i < words.length; i++) {
    if (words[i].includes("et")) {
        count++;
    }
}
console.log(count);

//Bonus2

function phraseToCheck(stringToCheck) {
    let firstString = '';
    for (j = 0; j < stringToCheck.length; j++) {
        if ((stringToCheck[j] >= 'A' && stringToCheck[j] <= 'Z') || (stringToCheck[j] >= 'a' && stringToCheck[j] <= 'z')) {
            firstString += stringToCheck[j];
        }

    }
    let newString = firstString.toLowerCase();
    let palindrome = 0;


    for (i = 0; i < newString.length; i++) {
        if (newString[i] !== newString[newString.length - 1 - i]) {

            palindrome = 1;
            break;
        }
    }
    if (palindrome === 0) {
        console.log(`${stringToCheck} - Is a Palindrome`);
    }
    else {
        console.log(`${stringToCheck} - Not a Palindrome`);
    }

}

phraseToCheck("A man, a plan, a canal, Panama!");
phraseToCheck("Amor, Roma");
phraseToCheck("race car");
phraseToCheck("Happy coding");
phraseToCheck("Was it a car or a cat I saw?");