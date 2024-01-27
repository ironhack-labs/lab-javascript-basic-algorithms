// Iteration 1: Names and Input
const hacker1 = "Jihn";
console.log(`The driver´s name is ${hacker1}` );

const hacker2 = "Jihn";
console.log(`The navigator´s name is ${hacker2}` );

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);  
}else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
const blankSpacing = "-";
let horizontalName = "";
for (let i = 0; i < hacker1.length; i++) {
    horizontalName += hacker1[i].toLocaleUpperCase();
    if (i !== hacker1.length -1) {
        horizontalName += blankSpacing;
    }
    // if (i !== hacker1.length -1) {
    //     horizontalName += hacker1[i].toLocaleUpperCase() + blankSpacing;
    // } else{
    //     horizontalName += hacker1[i].toLocaleUpperCase();
    // }
    
       
}
console.log(horizontalName);
let horizontalName2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
     horizontalName2 += hacker2[i];
       
}
console.log(horizontalName2);
console.log(hacker2.split("").reverse().join("")); 

let comparator = hacker1.localeCompare(hacker2);
switch (comparator) {
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 1:
        console.log("Yo, the navigator goes first, definitely.");
        break;
    default:
        console.log("What?! You both have the same name?");
}

//Bonus
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget velit enim. In magna libero, gravida in consectetur ac, facilisis at velit. Etiam ut lobortis augue. Duis et justo accumsan, aliquet ipsum vel, pulvinar nulla. In dictum elit nunc, a pulvinar diam posuere ac. In molestie hendrerit sem. Proin volutpat mi non ipsum tincidunt tristique. Suspendisse mattis ante ac commodo lobortis. Aenean porttitor dolor urna, sit amet commodo urna mollis ut. Nulla facilisi. Fusce et mollis lacus, at venenatis lacus.

In posuere fringilla lobortis. Proin porttitor quam eget magna consequat, sed pulvinar nibh ullamcorper. Pellentesque fermentum, turpis in bibendum faucibus, ligula velit pretium dui, a ornare quam odio sed dui. Sed et tincidunt augue. Phasellus commodo sollicitudin lacus, ac consequat ex tincidunt eu. Vestibulum cursus ligula sagittis, viverra sem eget, dignissim lacus. Nullam ac felis ipsum. Integer gravida justo sapien. Maecenas ornare vulputate blandit.

Sed scelerisque et nulla nec congue. scelerisque dui et nisl cursus condimentum sit amet nec odio. Nam id augue tincidunt erat porta aliquam interdum eu massa. Vestibulum faucibus ullamcorper ante in varius. Cras auctor nibh gravida, molestie nisi eu, eleifend tellus. Sed venenatis congue mattis. Sed fermentum erat eu ipsum aliquam, eget hendrerit ante mattis. Cras in nulla ut dolor facilisis tempor ac eu sapien. Nullam a metus nibh.`.split(" ");



let counter = 0;
let counterEt = 0;
const text = "Ho et la 3 et pap e el et".split(" ");
// let check = false;
// for (let i = 0; i < text.length; i++) {
    
//     if (text[i] !== " " && !check) {
//         counter++;
//         check = true;
//     }else if (text[i] === " ") {
//         check = false;
//     }

// }
for (let i = 0; i < longText.length; i++) {
    counter++;
    if (longText[i] === "et") {
       counterEt++; 
    }
}
console.log(counter);  
console.log(counterEt);

//Palíndromo

const phrase = "A man, a plan, acanal, Panama!";

let filteredPhrase = '';

for (let i = 0; i < phrase.length; i++) {
	const char = phrase[i].toLowerCase();

	if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
		filteredPhrase += char;
	}
}

if (filteredPhrase === filteredPhrase.split('').reverse().join('')) {
	console.log('Palindrome');
} else {
	console.log('Not a palindrome');
}

