// Iteration 1: Names and Input
const hacker1 = "Xavier";
const hacker2 = "Leonardo";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let hacker1UpperCapitals = hacker1.toUpperCase();
///console.log(hacker1UpperCapitals);
let spaceNameArr = [];

for (const value of hacker1UpperCapitals) {
    //console.log(value);
    spaceNameArr.push(value);
}

console.log(spaceNameArr.join(' '));

let reverseNameArr = [];

for (let i=hacker2.length; i>=0; i--){
    reverseNameArr.push(hacker2[i]);
}

console.log(reverseNameArr.join(''));

let result = hacker1.localeCompare(hacker2);

if (result === -1) {
    console.log("The driver's name goes first.");
} else if (result === 1){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log('What?! You both have the same name?');
}

// Bonus 1
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis, neque at tempor pretium, dui ligula ultrices risus, a ultricies nisl neque nec nulla. Pellentesque sagittis felis vel mi fringilla, a pharetra lacus fringilla. Aliquam erat volutpat. Praesent efficitur arcu nunc, nec rhoncus orci tempor vitae. Phasellus sodales efficitur purus at suscipit. Maecenas volutpat neque quis porttitor tincidunt. Nullam vehicula venenatis quam, vitae blandit est pretium pellentesque. Donec efficitur eget quam ut elementum. Maecenas eget metus in mi porttitor faucibus quis ac eros. Aliquam erat volutpat. Etiam aliquet nisi eu urna pretium, ac suscipit nunc hendrerit. Vivamus ultrices enim massa, ut faucibus ipsum iaculis id. Quisque tempor blandit venenatis. Fusce nec ante placerat, tincidunt elit in, varius libero. Suspendisse a mattis tellus. Sed interdum sem odio, a gravida nunc lobortis eu. Aenean libero purus, tempor at tincidunt ut, suscipit ut massa. Mauris vitae bibendum sapien. Sed et lacinia arcu. Donec ante metus, congue vitae congue vitae, laoreet eget sapien. Maecenas euismod elit auctor consectetur aliquet. Vivamus arcu mi, euismod non maximus in, faucibus vitae lorem. Aliquam vestibulum lectus ut neque imperdiet tincidunt. Phasellus imperdiet sed quam eget pharetra. Etiam a rutrum diam. Morbi vitae mauris egestas, viverra augue et, condimentum neque. Curabitur fringilla convallis mi, fermentum scelerisque ligula ultricies sit amet. Aenean semper accumsan tellus, non lobortis purus aliquam a. Fusce pulvinar, purus eget sollicitudin tristique, nunc felis molestie urna, vitae imperdiet lectus diam a sem."

let wordCount = 1;
let etCount = 0;

for (let i=0; i<loremIpsum.length; i++){
    if (loremIpsum[i] === " ") {
        wordCount++;
    }

    if (loremIpsum[i] === "e" && loremIpsum[i+1] === "t") {
        etCount++;
    }
}

console.log(wordCount);
console.log(etCount);


//Bonus 2
