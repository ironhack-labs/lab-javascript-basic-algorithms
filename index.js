// Iteration 1: Names and Input
let hacker1 = "Zefi";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Kateryna";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let capitalizedName = "";
for (let i = 0; i < hacker1.length; i += 1) {
    capitalizedName += hacker1[i].toUpperCase() + " "
}
console.log(capitalizedName);

let reversedName = "";
for (let i = hacker2.length -1; i >= 0; i -= 1) {
    reversedName += hacker2[i];
}
console.log(reversedName);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
}
else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// BONUS //
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique nisi at magna suscipit euismod. Fusce vitae varius metus. Pellentesque congue pharetra erat, quis rutrum sapien porta quis. Morbi sed lectus in ligula hendrerit cursus congue quis mi. Duis porta lectus eget rutrum condimentum. Cras mauris libero, ultrices vel quam at, maximus congue quam. Nunc mattis dolor tortor, sit amet tincidunt enim hendrerit sit amet. Nulla tincidunt pulvinar sem sit amet tincidunt. Donec in arcu eu purus vulputate placerat eu id tellus. Mauris nec turpis quam. Vivamus tempor mauris vel nisl aliquet placerat. Nulla fringilla mauris tempor libero mollis, vitae tincidunt lacus faucibus. Sed ultricies sit amet nulla eget faucibus. Maecenas vehicula mattis massa, eget fringilla odio. Sed aliquam nec mi eget facilisis. Suspendisse in justo at erat rhoncus congue a ut nunc. Sed egestas nisi diam, in suscipit risus suscipit eget. Etiam eleifend interdum nisi mollis porta. Aliquam et dolor ante. Maecenas vestibulum mi quis nunc facilisis dapibus. Fusce suscipit neque ligula. In hac habitasse platea dictumst. Proin quis sem nunc. Integer quis congue dui. Pellentesque nec turpis vehicula, vulputate est ut, finibus ipsum. Nam eleifend luctus mauris, ut sodales metus fringilla in. Nam ullamcorper bibendum enim sed auctor. In et accumsan arcu, quis faucibus lectus. Praesent tristique, tellus et ultrices commodo, metus urna rutrum tellus, ut euismod quam felis a lorem. Mauris id pellentesque sapien. Maecenas molestie vulputate justo vitae semper. Proin ultrices odio nec nisi sodales viverra. Sed gravida vel diam eget finibus."

let countWords = longText.split(" ");
console.log(countWords.length);

let countEt = 0;
for (let i = 0; i < longText.length; i += 1) {
    if (longText[i] === "e" && longText[i+1] === "t") {
        countEt += 1;
    }
}
console.log(countEt);

///////////////////////////////////////////////////
let palindromeString = "taco cat";
let isPalindrome = true;
let palindromeNoSpace = "";

for (let i = 0; i < palindromeString.length; i += 1) {
    if (palindromeString[i] !== " ") {
        palindromeNoSpace += palindromeString[i];
    }
}

for (let i = 0; i < palindromeNoSpace.length; i += 1) {
    if (palindromeNoSpace[i] === palindromeNoSpace[palindromeNoSpace.length - 1 - i]) {
        isPalindrome;
    }
    else {
        isPalindrome = false;
    }
}
console.log(isPalindrome);