// Names and Input
let hacker1 = "Sergio";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = prompt("What's your name ?")
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!!`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}

// For driver
let capitalizeDriverName = ''
for(let i = 0; i < hacker1.length; i++) {
    capitalizeDriverName += hacker1[i].toUpperCase() + ' ';
}
console.log(capitalizeDriverName)

// For navigator
console.log(hacker2.split('').reverse().join(''))

// Lexographic order
switch(hacker1.localeCompare(hacker2)) {
    case 0:
        console.log('What?! You both got the same name?')
    break;
    case -1:
        console.log("The driver's name goes first");
    break;
    case 1:
        console.log('Yo, the navigator goes first definitely')    
    break;    
}

const newString = prompt("Type something...")

const splitedWord = newString.split(' ').join('');

if (splitedWord === splitedWord.split('').reverse().join('')) {
  console.log('It is a palindrome')
} else {
  console.log('It is not a palindrome')
}

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra neque et tempor tincidunt. Pellentesque lacus enim, bibendum eu magna non, pellentesque pretium nibh. Donec efficitur, elit eget molestie rhoncus, lacus velit ultricies magna, at cursus leo elit et purus. Suspendisse ultrices ultricies faucibus. Maecenas varius ac elit at gravida. Sed mollis nisl id efficitur accumsan. Cras arcu diam, bibendum et tellus sed, imperdiet congue dolor. Mauris iaculis cursus lacinia. Pellentesque feugiat dapibus vulputate. Aenean eu posuere ex, volutpat dignissim purus. Aliquam fringilla ligula ut mi ultricies ultricies. Vestibulum et placerat risus.

Cras sit amet facilisis ligula, eu blandit massa. Aliquam ultrices metus non massa ultricies viverra. Nam fringilla diam a malesuada ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend metus dolor, vel laoreet arcu tempus at. Suspendisse diam ex, tempus id facilisis sed, porttitor nec neque. Duis tincidunt nisi nec nisi laoreet, vitae condimentum ex condimentum. Suspendisse potenti. Etiam est magna, tempus ac pellentesque quis, porttitor sit amet augue. Ut et mauris ut sapien mollis scelerisque.

Nulla eleifend elit vitae pretium facilisis. Vestibulum accumsan sed leo at molestie. Nullam feugiat convallis porttitor. Vivamus pulvinar lectus vitae maximus dapibus. Vivamus et orci justo. Etiam sit amet ullamcorper velit, vitae congue urna. Morbi ut nulla ipsum. Mauris elit arcu, congue at venenatis quis, tincidunt quis sapien. Nam nunc est, aliquet in interdum in, rhoncus in eros. Donec lobortis ipsum ac dignissim aliquet. Sed ac lorem elementum, commodo purus eget, finibus ipsum.`;

let splitParagraph = paragraph.split(' ')
console.log(splitParagraph.length)

let etCounter = 0;

splitParagraph.forEach( word => {
    if (word === 'et') {
        etCounter++
    }
})

console.log(etCounter)