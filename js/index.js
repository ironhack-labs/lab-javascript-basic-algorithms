// Iteration 1: Names and Input

let hacker1 = "Tami";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Diogo";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);

}   else if (hacker2.length>hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);

}   else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`);

}

// Iteration 3: Loops


let hacker1NewName = "";

for (let i=0; i<hacker1.length; i++) {
    hacker1NewName += `${hacker1[i].toUpperCase()} `;

}

console.log(hacker1NewName.trim())

let hacker2NewName = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2NewName += hacker2[i];    
    
}

console.log(hacker2NewName);

/*
if (hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first");

} else if (hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely");

} else {
    console.log("What? You both have the same name?");
}
*/

switch(hacker1.localeCompare(hacker2)) {
    case -1:
        console.log("The driver's name goes first");
        break;
    case 0:
        console.log("What?! You both have the same name?");
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely");
        break;
} 

//Bonus 1

const textLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum risus sem, eu ultricies nulla ullamcorper ut. Maecenas venenatis sit amet ligula quis semper. Sed non molestie ligula. Aenean ac gravida justo. Donec consequat tincidunt placerat. Integer sodales et arcu vulputate condimentum. Sed odio dui, laoreet eget turpis a, faucibus tincidunt risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vestibulum lectus risus, ac luctus leo maximus in. Cras malesuada elit eu interdum fringilla. Nullam varius id urna ut vulputate.

Nunc et lorem varius, rutrum metus vel, bibendum magna. Integer quis convallis nunc. Pellentesque tincidunt elit at gravida vehicula. Duis finibus turpis at orci ultrices pulvinar. Sed ac fringilla nisl, vitae efficitur mi. Maecenas viverra eleifend laoreet. Curabitur egestas nulla pretium, efficitur lectus ut, tristique nunc.

Ut in lacus at est porttitor mattis. Vestibulum accumsan vehicula massa sit amet tincidunt. Ut vitae faucibus ligula, vel ultrices nunc. Nunc pellentesque tempus urna, a pellentesque nibh dictum sit amet. Integer vitae sem ac dui venenatis sollicitudin ornare id elit. Vivamus lacinia semper leo, ut tempus nunc iaculis eu. Duis id justo et enim egestas varius. Mauris pharetra commodo fermentum. Praesent tristique vel ante sed bibendum. In at diam vel lorem vestibulum tincidunt ac a quam. Nam elementum, leo consequat scelerisque fringilla, neque urna iaculis nunc, ac dapibus arcu odio quis nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquet volutpat urna id consectetur.`;


const textWords = textLorem.split(` `);

console.log(textWords.length);

let countSubstring = (textLorem.match(/et/g) || []).length;
console.log(countSubstring);

//Bonus 2












