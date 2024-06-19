// Iteration 1: Names and Input

let hacker1 = "Martin";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Mirko";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// first loop to capitalize the first variable

let capitalizedHacker = "";

for (let i = 0; i < hacker1.length; i++) {
    capitalizedHacker += hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
        capitalizedHacker += " ";
    }
}

console.log(capitalizedHacker);

let capitalizedDriver = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    capitalizedDriver += hacker2[i];

}

console.log(capitalizedDriver);

// Martin
if (hacker1.localeCompare(hacker2) == 1) {
    console.log("The driver's name goes first.");
    // Mirko
} else if (hacker1.localeCompare(hacker2) == -1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// first: The driver's name goes first.
// second: Yo, the navigator goes first, definitely.
// third: What?! You both have the same name?

// Bonus


let longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae turpis a lectus maximus sodales id et leo. Maecenas quis elit vitae lectus facilisis lobortis. Donec mi erat, rutrum non consectetur nec, posuere eget sem. Morbi tempus mattis leo, id dignissim felis rutrum a. Aenean quam lorem, vehicula non augue et, elementum varius turpis. Pellentesque euismod mi quis congue molestie. Donec dignissim, sapien vitae tempus venenatis, sem leo elementum augue, vel mollis est mi ut metus. Duis eu ornare ante. Nam eu lacinia dolor, nec malesuada mi. Nulla a lectus id turpis feugiat eleifend. Praesent nec varius eros. Duis mattis id erat ut venenatis.

Aliquam ut nunc fringilla, gravida metus eget, mattis nunc. Nullam eget tempor mauris. Nullam lacinia congue odio. Nunc facilisis eleifend cursus. Nunc imperdiet accumsan magna, eget ultricies nisi maximus at. Aenean commodo condimentum nibh, id semper nisl accumsan sit amet. Cras ultricies molestie blandit. Sed rutrum, ex eget sollicitudin laoreet, magna sem blandit dui, sed placerat sem odio in elit. Aliquam sit amet egestas risus, vitae consequat ligula. Cras eu orci purus. Duis at magna quis dolor rhoncus dictum laoreet ac risus.

Praesent non erat ipsum. Vivamus facilisis bibendum purus blandit vestibulum. In molestie aliquet metus eu porta. Fusce egestas et sem in facilisis. Sed imperdiet quam quis libero gravida, id rhoncus metus pellentesque. Fusce viverra ornare pharetra. Sed ligula lectus, tempus vitae eleifend sed, eleifend et eros.`;

console.log(longText.split(" ").length);

let count = 0;

for (let i = 0; i < longText.length; i++) {
    const twoChars = longText[i] + longText[i + 1];

    if (twoChars === "et") {
        count++;
    }
}

console.log(`In this paragraph there are: ${count} words`);

//-----------


const stringToCheck = "step on no pets";
let reversedString = "";
for (let i = stringToCheck.length - 1; i >= 0; i--) {
    reversedString += stringToCheck[i].toLowerCase();
}
console.log(reversedString);
if (stringToCheck === reversedString) {
    console.log("String is a palindrome");
} else {
    console.log("Not a palindrome");
}
