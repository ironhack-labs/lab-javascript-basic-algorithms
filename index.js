// Iteration 1: Names and Input
const hacker1 = "Dewaal";
const hacker2 = "Jorge";

console.log(`The driver's name is: ${hacker1}`);
console.log(`The navigator's name is: ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longer name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longer name; it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let resultString1 = "";

for (let i=0; i<hacker1.length; i++){
    resultString1 = resultString1 + hacker1[i].toUpperCase() +" ";
}
console.log(resultString1.trim());

let resultString2 = "";

for (let i=hacker2.length-1; i>=0; i--){
    resultString2 += hacker2[i];
}

console.log(resultString2);

let testString = hacker1.localeCompare(hacker2);

if (testString<0){
    console.log(`The driver's name goes first.`)
} else if (testString > 0) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else if(testString === 0){
    console.log(`What?! You both have the same name?`)
} else {
    console.log(`Something went wrong. Unable to compare the names.`)
}

//Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque ex placerat odio semper, vel laoreet ante posuere. Nullam porttitor velit a magna vehicula rhoncus. Proin feugiat nisl eleifend nunc semper, dictum luctus ligula dignissim. Fusce venenatis suscipit odio sit amet pretium. Proin dapibus nulla nunc, et tristique nibh volutpat non. Praesent lobortis condimentum nisi in facilisis. Morbi et urna id dui mattis viverra. Cras ligula massa, fermentum et enim viverra, scelerisque pharetra nisl. Praesent rhoncus velit vel mi bibendum elementum. Sed blandit vestibulum sem, id sagittis massa volutpat vel. Vestibulum tristique at urna non pretium. Ut mi risus, convallis efficitur mi sollicitudin, viverra pulvinar magna. Sed quis arcu ac dui pretium ultricies ut vel elit. Aenean sem nisi, condimentum vitae sapien eleifend, congue iaculis urna. Integer vel congue est, vel gravida mauris. Aliquam felis arcu, ullamcorper non accumsan sit amet, convallis in odio. Etiam dignissim est non sapien condimentum imperdiet. Proin feugiat laoreet risus. Mauris pharetra, felis eget bibendum accumsan, quam risus tincidunt sapien, at commodo tortor sem a quam. Etiam quis malesuada mi, sed rhoncus magna. Nullam eleifend fringilla sodales. Phasellus fringilla enim ut orci condimentum, vel molestie ipsum faucibus. Curabitur magna massa, vehicula at vehicula et, elementum auctor nisl. Suspendisse nec arcu at nunc molestie maximus. Aliquam tempus eros non elit viverra, sit amet porttitor arcu facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis lectus, eleifend in posuere et, viverra et libero. Nam lacinia id mauris ut elementum. In sed euismod lorem. Vestibulum cursus aliquet metus ac facilisis. Duis quis eros ut elit ultricies consectetur ut et massa. In tincidunt mollis sem, ac mollis metus. Aliquam sodales id eros a vestibulum. Morbi eget fringilla tortor, sit amet congue lorem. Mauris felis lectus, aliquet ac augue nec, condimentum scelerisque dolor. Vivamus pharetra erat vitae tellus congue pretium. Curabitur eleifend egestas fringilla.";

//console.log(longText);

const testArray = longText.split(" ");
console.log(`The number of words in the text is: ${testArray.length}`);

let wordNumber = 0;
let testWord;
for(let i=0; i<testArray.length; i++){
    testWord = testArray[i].replace (/[.,]/, "");
    if(testWord==="et"){
        wordNumber++;
    }
}

console.log(`The number of times the Latin word 'et' appears: ${wordNumber}`);

