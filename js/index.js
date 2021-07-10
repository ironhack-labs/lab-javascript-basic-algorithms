// Iteration 1: Names and Input
let hacker1 = 'Hina';
let hacker2 = 'Liao';

const name1 = `The driver's name is ${hacker1}`;
const name2 = `The navigator's name is ${hacker2}`;

console.log(name1);
console.log(name2);

// Iteration 2: Conditionals
const name1Length = hacker1.length;
const name2Length = hacker2.length;

if (name1Length > name2Length) {
    console.log(`The driver has the longest name, it has ${name1Length} characters.`)
} else if (name2Length > name1Length) {
    console.log(`It seems the navigator has the longest name, it has ${name2Length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${name1Length} characters!`)
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker1.split("").reverse().join(""));

let comparison = hacker1.localeCompare(hacker2);
switch (comparison){
    case -1:
        console.log("The driver's name goes first.");
        break;
    case 1: 
        console.log("Yo, the navigator goes first definitely.");
        break;
    case 0: 
        console.log("What?! You both have the same name?");
        break;
}

// Bonus 1
let phrase = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit blandit nisl eu molestie. Nam nibh quam, aliquam sed fermentum ac, placerat quis tortor. Integer et mi. Nullam nisl tellus, ullamcorper eleifend ipsum ut, mollis porttitor ligula. Maecenas in efficitur tellus, in rhoncus erat. Vestibulum arcu velit, bibendum eget mauris vitae, tristique facilisis arcu. Sed vestibulum rhoncus magna, sed congue ipsum luctus eget. Aliquam ullamcorper, elit at consequat congue, elit mauris rhoncus purus, non lacinia massa tellus eu neque. Curabitur turpis nisi, dictum et tortor ac, dapibus interdum turpis.
Aliquam vel metus porta, semper nulla vitae, ullamcorper dolor. Suspendisse erat diam, viverra ac felis in, ultricies sodales erat. Integer commodo rhoncus pretium. Morbi sollicitudin eget ipsum in ultricies. Fusce arcu dolor, vestibulum ut nunc eu, placerat dictum nunc. Vivamus consequat interdum iaculis. Suspendisse vitae arcu rhoncus, rutrum risus sit amet, tristique tellus. Sed eu sodales purus. Donec rhoncus, purus eget imperdiet pulvinar, nulla turpis accumsan est, sed facilisis sem lorem quis magna. Duis id imperdiet sapien.
Maecenas ipsum leo, consectetur ut risus et, iaculis ullamcorper tortor. Aliquam erat volutpat. Praesent vel lacinia nisl. Proin viverra congue lorem in laoreet. Quisque interdum, mauris vitae bibendum luctus, enim metus finibus est, vitae hendrerit ex ex ut nulla. Donec ultrices efficitur varius. Cras suscipit neque magna, ac ornare diam malesuada quis. Ut massa mauris, mollis a imperdiet et, consequat ut orci. Aenean purus turpis, varius nec interdum sit amet, iaculis ut tellus. Phasellus magna est, convallis ut tristique lacinia, convallis quis tortor. Sed vel vehicula urna. Vivamus augue dolor, efficitur ac nulla nec, aliquam porttitor massa.`;

let countWords = phrase.split(' ').length;
    console.log(`Number of words in the string is ${countWords}`);

// let countEt = 
//     console.log(`Number of times 'et' appeared in the string is ${countEt}`);


// Bonus 2
let phrasetoCheck = 'taco cat';
if (phrasetoCheck.split('').reverse().join('') === phrasetoCheck){
    console.log(`The sentence ${phrasetoCheck} is a palindrome!`);
} else {
    console.log(`The sentence ${phrasetoCheck} isn't a palindrome :/`);
}