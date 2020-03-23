/*jshint esversion: 6 */
console.log('I’ m ready!');

// Iteration 1: Names and Input
let hacker1 = 'Armando';
let hacker2 = 'Francisco';
console.log(`The driver’s name is ${hacker1}`);
console.log(`The navigator’s name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
else if (hacker1.length < hacker2.length) console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);


// Iteration 3: Loops
console.log(hacker1.split('').join(' ').toUpperCase());
console.log(hacker2.split('').reverse().join(''));
if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver’s name goes first`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(` What?! You both have the same name?`);
}
/* option 2 to reverse a string 
 let reverse = [];
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverse.push(hacker2[i]);
}
console.log(reverse.join(''));*/

// Bonus 1
const paragraph = `Lorem ipsum dolor sit amet et , consectetur adipiscing elit. Duis sit amet odio ut nibh venenatis vestibulum. Duis faucibus lacus vitae bibendum blandit. Integer rhoncus maximus augue sit amet dictum. Praesent fringilla iaculis feugiat. Morbi a ornare massa. In scelerisque rhoncus dolor id convallis. In eget tincidunt sapien. Phasellus elementum porta commodo. Cras eros lorem, condimentum sed felis sit amet, vehicula dictum diam. Pellentesque efficitur ipsum ut nunc molestie maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Curabitur vel congue turpis. Pellentesque commodo urna sed pharetra rutrum. Suspendisse commodo dignissim tortor ac fermentum. Donec porttitor tempus tortor ut euismod. Nam ac quam vitae urna laoreet suscipit nec in magna. Curabitur at ultrices nisl. Aenean arcu tortor, aliquam sed elementum scelerisque, faucibus sit amet magna. Nullam enim elit, gravida vitae posuere tempor, vestibulum sit amet dolor.
Vivamus suscipit est in consectetur et pharetra. et Morbi viverra tellus sit amet turpis hendrerit, eget fermentum dui bibendum. Suspendisse finibus nulla lacus, ac porttitor lectus iaculis quis. Sed in ante nec elit hendrerit pharetra. Donec ut viverra lectus. Morbi ornare quis justo facilisis pulvinar. Nullam ut lobortis diam, et suscipit magna. Pellentesque tempus mauris tortor, ut laoreet arcu blandit sed. Nullam posuere lacinia ligula ac elementum. Aenean gravida lacinia lacus, eu congue nunc placerat sed. Aenean a massa tincidunt mi bibendum blandit. Proin ut justo sed sem vulputate auctor. Ut erat nisl, iaculis vel elit nec, interdum tincidunt purus. Nullam rutrum accumsan libero pharetra fermentum. Etiam lacinia risus ac tempor suscipit.`
let wordsCount = paragraph.split('').length;
console.log(wordsCount);

let etCount = 0;
for (let i = 0; i <= paragraph.split(' ').length - 1; i++){
    if (paragraph.split(' ')[i] === 'et')
        etCount++;
}
console.log(etCount);