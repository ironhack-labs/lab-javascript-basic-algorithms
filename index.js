// Iteration 1: Names and Input
 const hacker1 = 'Ana';

 console.log(`The driver's name is ${hacker1}`);

 const hacker2 = 'John';

 console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if ( hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}



// Iteration 3: Loops

let driverName = ' ';

for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + ' ';
}
console.log(driverName.trim());

let navigatorName = ' ';

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorName += hacker2[i];
}
console.log(navigatorName.trim());

if (hacker1.charCodeAt(0) < hacker2.charCodeAt(0)) {
    console.log("The driver's name goes first.");
} else if (hacker1.charCodeAt(0) > hacker2.charCodeAt(0)) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nisi velit, ut tincidunt orci tincidunt nec. Aenean rhoncus, orci ac maximus lacinia, neque ligula egestas ante, sed hendrerit metus libero pulvinar est. Ut iaculis luctus magna et dapibus. Maecenas in sem consectetur nisi ultricies egestas sit amet vitae nisl. Mauris vitae dolor vel ante interdum euismod non nec ex. Nulla vel tempor augue. Phasellus leo mauris, volutpat a lacinia id, auctor at turpis. Nam venenatis, justo imperdiet bibendum faucibus, sapien orci rhoncus magna, sed consequat arcu velit in tellus. Aenean vitae ipsum ac diam ornare malesuada. Aliquam auctor pretium nibh, vel gravida ante euismod ut. Duis at luctus mi. Maecenas blandit urna ullamcorper sem aliquam, id pharetra ligula condimentum. Ut tempus lectus id metus laoreet condimentum. Nulla tristique ipsum tellus, eget ullamcorper sapien vehicula ac. Nulla facilisi. Sed volutpat lorem sed gravida lacinia. Aenean dignissim sollicitudin nibh, in dignissim tortor dapibus pellentesque. Curabitur vel porttitor massa. Nullam quis elit vitae nulla efficitur feugiat. Pellentesque sem justo, scelerisque et ante id, facilisis tempor odio. Nullam vitae augue scelerisque, lacinia odio eu, commodo turpis. Vestibulum sit amet aliquet risus, et accumsan ante. Duis in porta libero. Fusce vitae sodales tellus, fermentum luctus urna. Mauris quis placerat sem. Praesent efficitur dolor accumsan mauris interdum, at sodales odio iaculis. Proin quis hendrerit risus. Mauris accumsan feugiat feugiat. Fusce a sollicitudin purus. Morbi posuere tellus dui. Donec imperdiet urna ac lorem dapibus tempus.';

console.log(`There are ${longText.split(/\s+/).length} words`);

let count = 0;

for (let i = 0; i < longText.length ; i++) {
    const twoCharts = longText[i] + longText[i + 1];
    if ( twoCharts === 'et') {
        count++;
    }
}

console.log(`et appears ${count} of times`)

// Bonus 2

const phraseToCheck = 'Amor, Roma';
let phraseBackwards = '';

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    phraseBackwards += phraseToCheck[i];
}



if ( phraseToCheck.toLowerCase().replaceAll(' ', '') === phraseBackwards.toLowerCase().replaceAll(' ', '')) {
    console.log(`${phraseToCheck} is a palindrome`)
} else {
    console.log(`${phraseToCheck} is not a palindrome`)
}

