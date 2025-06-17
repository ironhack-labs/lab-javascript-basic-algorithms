// Iteration 1: Names and Input

let hacker1 = "Felix";
let hacker2 = "Aron";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length === hacker2.length){
    let lengthName= hacker1.length;
    console.log(`Wow, you both have equally long names, ${lengthName} characters!`);
} else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else{
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
}


// Iteration 3: Loops
console.log("the characters of the driver's name, separated by space, and in capital letters =>",hacker1.split("").join(" ").toLocaleUpperCase());
console.log("The characters of the navigator's name in reverse order =>",hacker2.split("").toReversed().join(" "));


const arrayNames = [hacker1,hacker2].toSorted();
const firstName = arrayNames[0];

if (firstName === hacker1 && firstName === hacker2) {
    console.log("What?! You both have the same name?");
}else if(firstName === hacker1) {
 console.log("The driver's name goes first.");
}else{
 console.log("Yo, the navigator goes first, definitely.");
}


// Bonus Time!

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt a nulla et finibus. Vestibulum id aliquet nisl, in dignissim est. Praesent tempus ipsum sit amet posuere euismod. Nullam mollis leo eu risus ullamcorper, nec tempor orci porta. Duis ultrices urna sed lorem tempus, non posuere lacus dapibus. Donec elementum ex odio, id volutpat leo eleifend ut. Sed finibus ullamcorper nisl, a volutpat ipsum sodales vel. Vivamus cursus egestas ultrices. Duis dictum erat eget elementum tristique.

Sed lacinia elit viverra sapien laoreet elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis rhoncus, mauris vitae lacinia euismod, est massa tempus velit, et vestibulum libero lectus eget diam. Cras in odio imperdiet, sodales neque a, porta est. Sed cursus quam ut massa elementum porta in eu ligula. Proin vel risus eu orci rhoncus porttitor. Aenean ornare porttitor magna ac egestas. Nulla ultricies faucibus bibendum. Nunc efficitur sodales tempus. Suspendisse sit amet sagittis diam. Sed vitae facilisis sapien. Etiam nec condimentum lorem. Donec efficitur nibh porta tellus luctus, at porttitor diam tempor. Nam tellus purus, maximus eu viverra a, mattis eget est. Integer iaculis magna dolor, sit amet hendrerit libero convallis at.

Integer pharetra eros ac mi mollis egestas. Curabitur vitae felis sed odio ultrices fringilla nec vel ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tortor risus, fermentum a vestibulum volutpat, ultrices non lectus. Nunc hendrerit orci sed imperdiet malesuada. Mauris eget lobortis lorem. Vivamus sodales, odio quis lacinia dictum, nibh libero porttitor orci, non volutpat tellus enim ac nibh. Aenean orci justo, imperdiet sed nisi a, fringilla varius orci. Vivamus dui dolor, consectetur sit amet nunc vitae, dapibus luctus augue. Nullam sed nibh varius, congue nisi eu, egestas enim. Quisque ut sem ornare, tincidunt sapien ut, efficitur sem. Morbi in lacus sit amet urna luctus gravida.`;


// Bonus 1
let countWords = longText.split(" ").length;

let contEtWordslow = longText.toLowerCase().split("et").length-1;
console.log(contEtWordslow);

console.log(`The variable longText contain exactly ${countWords}`);
console.log(`The variable longText contain exactly ${contEtWordslow} "et" words`);


// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

// Elimina todos los caracteres que no sean letras (mayúsculas o minúsculas)
let filteredPhrase = phraseToCheck.replace(/[^a-zA-Z]/g, "").toLowerCase();
const phraseArray = filteredPhrase.split("");
const reversedArray = phraseArray.toReversed();
const reversedString = reversedArray.join("");
console.log(reversedString);

if(filteredPhrase === reversedString){
    console.log("The phrase is a palindrom");
}else{
    console.log("The phrase is not a palindrom");
}


