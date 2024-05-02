// Iteration 1: Names and Input
const hacker1 = 'shamil';
const hacker2 = 'Jamal'; 

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length} characters`) : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
if(hacker1.length == hacker2.length) {console.log(`ow, you both have equally long names, ${hacker1.length} characters!`)}

// Iteration 3: Loops
let array = [];

for (i=0; i < hacker2.length; i++) {
    array.push(hacker2[i])
}

const newName = array;
const isCapital = newName.join(' ').toUpperCase();

const reverse = (newName.reverse()).join('')


console.log(isCapital);
console.log(reverse)

const sorted = [hacker1.toLocaleLowerCase(),hacker2.toLocaleLowerCase()].sort()

console.log(sorted)

if (sorted[0] == sorted[1]) console.log(`What?! You both have the same name?`)
if (sorted[0] == hacker2 && hacker1 !== hacker2) console.log(`Yo, the navigator goes first, definitely.`)
if (sorted[0] == hacker1 && hacker1 !== hacker2) console.log(`The driver's name goes first.`)


// Bonus 1-1:

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus leo neque, ac porta lacus bibendum id. Quisque quis imperdiet augue. Etiam bibendum cursus turpis a pretium. Aenean sit amet consequat tortor, nec ultrices augue. Phasellus id tincidunt nibh. Donec posuere enim arcu, a elementum orci dapibus nec. Aenean iaculis elit dui, ut condimentum felis pharetra in. Cras tincidunt faucibus dolor, at fringilla sem gravida in. Vivamus lobortis ante non tempor tincidunt. Sed cursus dictum lectus. Fusce quis pulvinar eros, nec venenatis tortor. Praesent molestie gravida malesuada. Phasellus aliquam varius orci, quis elementum erat tempor vitae. Suspendisse elementum placerat velit sit amet varius. Proin venenatis elit sapien. Donec metus ligula, blandit non dictum id, euismod eu justo. Suspendisse fringilla nibh sed est placerat ultricies. Quisque luctus lorem viverra ornare vulputate. Sed vel nibh eget urna aliquet viverra quis in dolor. Cras nec tortor odio. Pellentesque lacinia nunc ipsum, in venenatis lorem ullamcorper non. Ut mauris erat, fringilla non tortor et, accumsan congue risus. Aliquam vestibulum pharetra metus, a eleifend neque varius id. Suspendisse mattis at lorem id suscipit. Sed et posuere est, sed faucibus augue."

const wordsArray = longText.split(' ');

const numberOfWords = wordsArray.length;

let etCount = 0;

wordsArray.forEach(word => word === 'et' ? etCount =+1 : console.log('Not an et'))

console.log(`There are ${etCount} number of times in the paragraph`);


// Bonus 1-2:
count = 0;
let etString = ' et ';

    if(longText.indexOf(etString)) {
        count += 1
    }

console.log(`We found ${etString.trim()}, ${count} times!`) 


// Bonus 2: is Palindrome

const str = 'A man, a plan, a canal, Panama'
let normalized = ''
for (i=0; i < str.length; i++) {
    str[i].toLowerCase();
    if(str[i] !== ' ' && str[i] != ',') {
        normalized += str[i].toLowerCase()
    }
}

let reversed = '';

for(j = normalized.length -1; j >= 0; j--) {
    reversed += normalized[j]
}


console.log(normalized === reversed)
