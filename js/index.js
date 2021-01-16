//Iteration 1: Names and Input
let hacker1 = "Brittney";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ola";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//Iteration 3: Loops
//Iteration 3.1
let nameInOneLine = "";
for (let i = 0; i < hacker1.length - 1; i++) {
  nameInOneLine += hacker1[i].toUpperCase()+" "
}
console.log(nameInOneLine + hacker1[hacker1.length-1].toUpperCase());

//Iteration 3.2
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

//Iteration 3.3
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim, lectus pharetra blandit commodo, sem nunc tincidunt velit, non mattis justo quam at nibh. Nam cursus neque felis, quis finibus orci ultricies non. Donec blandit arcu sit amet ante euismod, ac tincidunt nisl facilisis. Vivamus ac fermentum risus. Vestibulum lacinia blandit risus, sed gravida eros sagittis in. Praesent varius sodales enim at mattis. Cras sed justo odio. Aliquam rhoncus velit neque, et blandit urna scelerisque non. Aliquam erat volutpat. Morbi at libero luctus nulla iaculis sollicitudin. Nulla libero neque, efficitur in sodales in, pulvinar et nisi. Donec sollicitudin purus molestie vestibulum semper. Duis mattis non risus a maximus. Duis egestas tellus sapien, a tincidunt odio ornare vitae. Phasellus ac condimentum orci. Sed id massa hendrerit, vehicula odio vel, accumsan leo. Etiam pulvinar vitae orci a aliquet. Nam egestas efficitur eleifend. Proin commodo lacus a enim euismod, eget egestas nibh aliquet. Suspendisse ullamcorper faucibus quam, ut eleifend nulla venenatis vitae. Ut rutrum diam orci, non consectetur justo sagittis id. Integer tempus eros vitae enim commodo rhoncus. Cras sodales magna ac libero porttitor, vitae semper justo blandit. Ut tincidunt vitae justo vitae vehicula. Donec faucibus urna nibh, vitae bibendum elit suscipit vel. Cras turpis ipsum, consequat nec tincidunt vitae, fringilla et nibh. Sed sit amet libero condimentum dui tincidunt aliquam imperdiet efficitur ex. Phasellus in nisl rhoncus, convallis dolor sit amet, finibus felis. Cras at augue felis. Morbi nec tincidunt leo. Integer efficitur ipsum lacus, quis porttitor nisl tempor et.";

console.log(loremIpsum.split(" ").length);
console.log(loremIpsum.split(" et ").length);

//Bonus2 (doesn't work yet if a phrase has other characters than letters)
let phraseToCheck = "A man, a plan, a canal, Panama";

function checkPalindrome (phraseToCheck) {
    let length = phraseToCheck.length;
    for (let i = 0; i < length/2; i++) {
        if (phraseToCheck[1] === phraseToCheck[length - 1 - i]) {
            continue;
        } else {
            console.log("This is not a palindrome :(");
        }
    }
}

checkPalindrome(phraseToCheck);