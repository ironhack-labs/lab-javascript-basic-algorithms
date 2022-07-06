// Iteration 1: Names and Input
//

let hacker1 = 'Diana';
console.log("The driver's name is " + hacker1);
let hacker2 = 'Bogdi';
console.log("The navigator's name is " + hacker2);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let sepLetters = '';
for (i in hacker1) {
   sepLetters = sepLetters.concat(hacker1[i],' ');
}
console.log(sepLetters.toUpperCase());

//3.2 reverse a string

let tempArr = [];
// add every letter to an array
for (i in hacker2) {
    tempArr.push(hacker2[i]);
}

let reverse = '';
// iterate through the array backwards
for (i = tempArr.length - 1; i >=0; i--) { //length - 1, because arrays start at [0]
    reverse = reverse.concat(tempArr[i]);
}
console.log(reverse);

// 3.3 lexicographic order
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

//BONUS 1.1 WORDS in string

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper rhoncus finibus. Donec quis metus sed dui finibus sollicitudin. Phasellus vitae convallis sem, non sodales quam. Etiam tempor finibus velit in efficitur. Vestibulum ex erat, blandit nec facilisis eget, fringilla ut magna. Sed et tincidunt dolor. Proin non odio ut nunc egestas feugiat at et urna. Nullam neque quam, sagittis id metus nec, tincidunt iaculis metus. Praesent pharetra condimentum commodo. Proin mattis, arcu sed vulputate congue, nulla ligula iaculis mauris, ut dapibus enim eros in lectus. Mauris vitae lectus nec eros porta sagittis vitae sit amet eros. Vivamus non scelerisque orci. Nulla consequat enim nec lacus dignissim fringilla scelerisque nec tortor. Nullam dapibus purus quis efficitur finibus. Aliquam non lacus pellentesque, congue risus ac, molestie enim. Nunc et diam ultricies, ultrices arcu nec, scelerisque lacus. Sed placerat libero nec sodales consequat. Sed vehicula ac ipsum ut laoreet. Quisque a arcu est. Donec leo elit, semper ornare lobortis non, mollis a lacus. Sed eu turpis a felis hendrerit laoreet nec quis erat. Morbi eget auctor neque. Nunc sit amet efficitur odio. Ut vehicula lacus neque, nec elementum neque malesuada ac. Curabitur sagittis eu sapien ac gravida. Suspendisse finibus quam quis lacus imperdiet maximus. Vivamus tincidunt lacus purus. Mauris nulla ipsum, faucibus maximus ex ut, lobortis condimentum metus. Nulla eros est, molestie id neque eget, bibendum commodo magna. Fusce ut tincidunt felis. Integer elementum in odio sed auctor."

let words = 0;
//find & store the number of spaces, add 1 -> that is the number of words
for (i in loremIpsum) {
    if (loremIpsum[i] === ' ') {
        words++;
    }
}
console.log(words+1);

// BONUS 1.1 "et" count
let etCount = 0;

/*find the first occurence of "et", 
cut out the preceding part of the string + the occurence itself, 
store the # of the occurence, 
and keep going until you reach the end of the string */

while (loremIpsum.length > 0) { 
    if(loremIpsum.indexOf(" et ") > 0) {
    loremIpsum = loremIpsum.slice(loremIpsum.indexOf(" et ") + 2);
    etCount++;
    }
    else break;    
}
// in case of no occurences
if (etCount === 0) {
    console.log("'et' does not appear in the text.")
}
else {
    console.log(etCount);
}
