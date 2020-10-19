// Iteration 1: Names and Input
let hacker1 = 'ale';
console.log(`The driver´s name is ${hacker1}`);
let hacker2 = 'Iriel';
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
    } else {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters!`)
    }


// Iteration 3: Loops

//1st
let allTogether = ''
for (let i = 0; i < hacker1.length; i++) {
allTogether += hacker1[i].toUpperCase() + ' ';
}

console.log(allTogether);

//2nd
let allReversed = ''
for (i = 4; i >= 0; i--) {
allReversed += hacker2[i];
}
console.log(allReversed)

//3rd
const order = [hacker1, hacker2];
order.sort();
console.log(order)

if (hacker1 == order[0]) {
console.log(`The driver's name goes first`)
} else if (hacker2 == order[1]) {
console.log(`Yo, the navigator goes first definately`) 
} else {
console.log(`What?! You both have the same name?`)
}

// BONUS 1

let text = 'Nam vulputate quam id nisi pharetra, eget finibus justo posuere. Donec eu nulla ut felis semper sollicitudin non vel tortor. Pellentesque accumsan quis nulla et pellentesque. Ut pretium est varius nisi dictum tincidunt. In hac habitasse platea dictumst. Praesent pharetra ex in massa euismod suscipit. Vivamus fermentum rutrum placerat.Aliquam faucibus quam at tellus porttitor dignissim. Mauris velit libero, eleifend ac condimentum aliquet, ultrices id elit. Nulla placerat ante in mollis gravida. Morbi vehicula eros eget lectus posuere interdum nec molestie dolor. Vivamus a nunc tortor. Mauris sed elementum elit. Ut sodales suscipit neque sed interdum. Maecenas tempor mi lectus, at sagittis purus varius ac. Vivamus egestas finibus faucibus. Donec quis nulla nec mi dapibus gravida. Curabitur consectetur pulvinar quam eget varius. Phasellus mattis consequat fermentum. Aliquam turpis ligula, rutrum venenatis egestas non, faucibus eu lectus. Maecenas hendrerit venenatis lacus eget condimentum.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eleifend nisi vitae lacus suscipit aliquam. Donec ac nibh consectetur, pulvinar nisi sed, porta leo. Aenean ullamcorper hendrerit nisl, id tempor orci tempus eget. Etiam sit amet egestas ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae finibus nunc. Proin eget dolor sed augue fringilla tincidunt vitae nec erat.' ;

for (let i = 0; i < text.length ; i++) {
console.log(i)}

var searchText = text.search('et');
console.log(searchText) 

// BONUS 2

