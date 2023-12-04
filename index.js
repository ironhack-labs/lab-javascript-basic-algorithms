// Iteration 1: Names and Input
let hacker1 = "Jakob"
let hacker2 = "Bruno"

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length)
{
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length)
{
    console.log(`You both have equally long names with ${hacker1.length} characters.`)
}
// Iteration 3: Loops

//3.1
let hackerUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
    hackerUpperCase += `${hacker1[i].toUpperCase()} `;
};
console.log(hackerUpperCase);

//3.2
let hackerReverse = "";

for (let i= hacker2.length-1; i >= 0; i--) {
    hackerReverse += hacker2[i];
};

console.log(hackerReverse)

//3.3
if ((hacker1.localeCompare(hacker2)) === 1) {
    console.log("The driver's name goes first.")
}
else if ((hacker1.localeCompare(hacker2)) === -1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else if (hacker1 === hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}

//Bonus 1

let wordCount = 1;
let etCount = 0;
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas risus nec turpis viverra cursus sit amet sit amet nisl. Nulla mi augue, vehicula eget erat sit amet, hendrerit congue mauris. Etiam euismod, arcu sed commodo cursus, ipsum mauris auctor sem, ut consectetur neque ipsum non nisi. Praesent scelerisque euismod urna, eu commodo est viverra eget. Aliquam semper, neque sed eleifend tristique, nisi nunc interdum mauris, tincidunt volutpat lacus tortor et dui. Aliquam commodo lobortis lacus ac imperdiet. Aliquam in pulvinar orci. Vestibulum leo augue, pharetra non efficitur sed, maximus rutrum risus. Integer purus ante, molestie non rhoncus at, venenatis a libero. Curabitur lobortis leo in urna eleifend vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque tristique placerat risus. Morbi sed est dapibus, auctor neque a, gravida massa. Ut sed urna a sapien varius venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer molestie cursus augue eu blandit. Aliquam porttitor leo augue, tempus blandit dolor vestibulum ac. Morbi aliquet finibus neque sit amet euismod. Aenean semper arcu id vehicula blandit. Curabitur consectetur dolor sit amet scelerisque pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sed eros eu massa rhoncus vulputate. Etiam sit amet elementum mauris. Aliquam maximus erat sit amet aliquam molestie. Integer fringilla, quam a dictum ornare, ex nisl convallis ligula, non porttitor libero velit vel nisl. Phasellus tincidunt finibus consequat. Vivamus vitae nunc mattis, dignissim est nec, elementum magna. Ut rutrum enim eu felis ultrices tincidunt. Integer vehicula, nisi sed vestibulum lacinia, orci magna maximus neque, a hendrerit mi orci sit amet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ullamcorper ipsum non elit scelerisque, et luctus nisl pretium. Morbi tincidunt, dolor quis dictum feugiat, leo lorem euismod turpis, at vulputate sem felis non ex. Donec sit amet vulputate magna."

for (let j = 0; j < loremIpsum.length; j++) {
    if (loremIpsum[j] === " ") {
        wordCount += 1;
    }
}

for (let x = 0; x < loremIpsum.length; x++) {
    if (loremIpsum[x] === "e" && loremIpsum[x + 1] === "t") {
        etCount += 1;
    }
}

console.log(wordCount + 1)
console.log(etCount + 1)



// Bonus 2

let phraseToCheck = "Was it a car or a, cat I saw?";
let phraseReverse = '';
let phraseToCheckCleaned = '';

for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] !== ' ' && phraseToCheck[i] !== ',' && phraseToCheck[i] !== "!"  && phraseToCheck[i] !== "'" && phraseToCheck[i] !== "?") {
        phraseToCheckCleaned += phraseToCheck[i];
    }
}

console.log(phraseToCheckCleaned)

for (let y = phraseToCheckCleaned.length -1; y >= 0; y--) {
    phraseReverse += phraseToCheckCleaned[y];
}

if (phraseReverse.toLowerCase() === phraseToCheckCleaned.toLowerCase()) {
    console.log("It's a palindrome");
}

else {
    console.log(phraseReverse);
}
