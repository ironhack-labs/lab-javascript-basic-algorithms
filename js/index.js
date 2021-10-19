// Iteration 1: Names and Input

const hacker1 = prompt("Insert driver's name:", 'Julio');
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = prompt("Insert navigator's name", 'Sergio');
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let driverUpper = '';
for (let i = 0; i < hacker1.length; i++) {
  driverUpper += hacker1[i].toUpperCase() + ' ';
}
console.log(driverUpper);

let navigatorReverse = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverse += hacker2[i];
}
console.log(navigatorReverse)

if (hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) > hacker1.localeCompare(hacker2)) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?');
}

// Bonus 1:

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ante pellentesque, luctus tortor eget, viverra mauris. Mauris rhoncus lorem eu justo pharetra porta. Cras ornare pharetra tellus, eget scelerisque enim efficitur quis. Nullam dictum fringilla ex quis elementum. Nam venenatis et dui sit amet aliquet. Nulla rutrum consequat nibh vitae mattis. Aliquam varius elementum neque, at sollicitudin libero pulvinar a. Quisque sem dui, scelerisque ac enim sit amet, porttitor mollis quam. Nulla luctus sapien sit amet ipsum ultricies, nec pulvinar augue tincidunt. Phasellus facilisis magna consequat turpis molestie volutpat. Donec pellentesque venenatis neque eu vehicula. Vestibulum dictum convallis velit et pellentesque. Donec in vulputate libero.'

Nunc vel ullamcorper tellus. Phasellus accumsan risus et orci aliquet cursus. Donec tristique mi quis magna dictum, nec fringilla lectus dapibus. Duis non nibh sit amet tellus dictum consequat sed ac turpis. Sed feugiat tellus ac auctor tincidunt. Aliquam auctor diam aliquet porta bibendum. Vivamus tempus urna ipsum. Cras varius lobortis leo, eget suscipit est mattis in. Duis quis mauris nisi. Proin at ex sit amet felis pretium porttitor sed elementum quam.'

Nullam fermentum lobortis turpis, a tincidunt augue ullamcorper vitae. Proin auctor porta consectetur. Duis hendrerit mi at nulla volutpat vehicula. Praesent sagittis dapibus hendrerit. Phasellus nec sem nulla. Pellentesque ornare eros id ligula elementum tempor. Nam eget velit eget mi lobortis viverra. Aenean sit amet lorem bibendum, viverra massa et, convallis leo.`

let words = 0;
let et = 0;
let loremSplit = lorem.split(' '); // elimina los espacios del string

for (i = 0; i < loremSplit.length; i++) {
  if (loremSplit[i] === 'et' || loremSplit[i] === 'et.' || loremSplit[i] === 'et,') {
    et++;
  } else if (loremSplit[i].includes('')) {
    words++;
  }
}

console.log(`Number of et: ${et}`);
console.log(`Number of words: ${words}`);