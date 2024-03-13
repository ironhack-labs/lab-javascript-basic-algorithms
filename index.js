// Iteration 1: Names and Input
const hacker1 = "Rickangelodan";
const hacker2 = "Diego";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
let hacker1length = hacker1.length
let hacker2length = hacker2.length

if (hacker1length > hacker2length) {
 console.log(`The driver has the longest name, it has ${hacker1length} characters.`);
}
 else if (hacker1length < hacker2length) {
 console.log(`It seems that the navigator has the longest name, it has ${hacker2length} characters.`);

 }
 else if (hacker1length === hacker2length) { 
    console.log(`Wow, youth both have equal names, ${hacker1length} characters!`);
 }




// Iteration 3: Loops
let driverNameSeperated = "";

for (let i = 0; i < hacker1.length; i++) {
driverNameSeperated += hacker1.slice(i, i + 1).toUpperCase() + " ";
};
console.log(driverNameSeperated);

let reverseName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1.slice(i, i + 1);

};
 console.log(reverseName);

 if (hacker1 > hacker2) {

 console.log(`The driver's name goes first.`)
 } 
 else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first, definitely.`)
 }
 else {
    console.log(`What?! You both have the same name?`)
 }

 // Sample text generated from Lorem Ipsum generator
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit efficitur quam, non vehicula libero venenatis vel. Sed in dapibus arcu. Etiam tempus lacinia ipsum, ac consequat orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi efficitur neque ac aliquet vulputate. Nulla facilisi. Integer tristique vestibulum ipsum id faucibus. Sed eu bibendum nulla. Cras tristique justo eu ante dignissim commodo. Etiam id elit eget lorem commodo egestas.

Pellentesque consequat velit et varius luctus. Suspendisse et lorem sed libero rutrum mattis. Etiam in felis est. Cras quis neque at arcu vehicula sodales. Nunc facilisis nunc ut nisi dictum, ac vehicula elit suscipit. Aliquam malesuada urna nec tortor finibus, sed varius neque gravida. Sed sed fermentum ligula, nec vestibulum sem. Vestibulum vulputate, libero a gravida ultrices, libero purus sodales turpis, ac mattis mauris ipsum vel est. Etiam euismod euismod nulla, vel tincidunt libero feugiat et. Mauris id laoreet odio. Donec nec odio vel tellus vehicula volutpat. Vivamus in ipsum at mauris accumsan cursus. Nullam rhoncus magna a mi sollicitudin, eget varius est tempus.

Fusce vitae purus dapibus, congue elit eget, sollicitudin metus. Cras eu velit vitae augue mattis eleifend id sit amet risus. Etiam mattis mauris a lectus tincidunt, eu lobortis quam congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam lacinia lobortis nibh, ac tincidunt metus facilisis eget. Fusce consectetur id odio et iaculis. Etiam fringilla, nulla nec venenatis euismod, mi neque fringilla odio, sit amet egestas leo libero sed turpis. Sed eget arcu nec justo finibus mattis.`;

// Counting the number of words
const numberOfWords = longText.split(/\b\w+\b/g).length;

// Counting the number of times the Latin word "et" appears
const etCount = (longText.match(/\bet\b/g) || []).length;

console.log("Number of words:", numberOfWords);
console.log("Number of times 'et' appears:", etCount);

 
// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}

// Test cases
const phrasesToCheck = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
];

// Iterate through each phrase and check if it's a palindrome
phrasesToCheck.forEach(phrase => {
    if (isPalindrome(phrase)) {
        console.log(`"${phrase}" is a palindrome.`);
    } else {
        console.log(`"${phrase}" is not a palindrome.`);
    }
});
