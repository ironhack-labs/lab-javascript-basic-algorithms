// Iteration 1: Names and Input
let hacker1 = 'Renzo';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Llorenç';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver's name ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

}

// Iteration 3: Loops

let inCapitals = '';
for (let character of hacker1) {
    inCapitals += character.toUpperCase() + ' ';
}

console.log(inCapitals);

let inReverse = '';
for (i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
    inReverse += hacker2[i];
}

console.log(inReverse);

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit vitae libero vel suscipit. Aenean nec vehicula mauris. Aliquam quis metus velit. Phasellus id libero eu lectus varius iaculis. Ut egestas risus non auctor tempor. Praesent ut aliquam mi, venenatis vestibulum velit. Quisque porttitor ut felis sed tristique. Vestibulum suscipit malesuada leo euismod volutpat. Donec consectetur dignissim rhoncus. Morbi at libero suscipit massa mollis maximus ac at libero. Aliquam mi lectus, maximus vel fringilla non, ultrices eu enim. Donec cursus eros justo, eget pharetra erat dapibus in. In velit est, vehicula id lectus quis, scelerisque dignissim dolor. Vestibulum lorem lorem, malesuada vitae nisi sit amet, accumsan gravida arcu. Curabitur semper arcu quis sollicitudin lacinia.Sed vel vestibulum mi. Duis lacus metus, ultricies et orci vitae, pellentesque aliquet tortor.\nCurabitur quam lectus, tristique tempor bibendum eu, lobortis nec enim. Suspendisse laoreet, urna in congue placerat, magna erat maximus lacus, ac rhoncus eros ex imperdiet ipsum. Nullam elementum quam sed scelerisque fermentum. Donec tincidunt ex magna, maximus tristique neque pretium nec. Sed convallis turpis et felis tincidunt, vitae eleifend elit pulvinar. Fusce vehicula, turpis a pharetra posuere, nisl dui pulvinar enim, ac maximus sem eros quis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum, felis eget finibus condimentum, justo lacus condimentum sapien, nec mattis magna lectus at mauris.Fusce sit amet augue vitae leo blandit egestas. Donec ultrices purus id neque consequat mollis. Cras ut elit metus. In eget orci non arcu vehicula dictum vitae sed enim. Curabitur tincidunt ut ex sed ultricies. Aliquam augue felis, fringilla vel eleifend quis, feugiat feugiat nisl. Fusce eu congue dui. Quisque luctus lacinia ullamcorper.\nSed consectetur leo vehicula tincidunt efficitur. Donec placerat, est eu convallis sodales, dui nisl interdum orci, quis bibendum ligula risus id risus. In ac quam ac massa vehicula ultrices et nec elit. Maecenas fermentum eros metus, eget accumsan nunc porttitor ac."

//console.log(loremIpsum);

const paragraphs = loremIpsum.split('\n');

let totalWords = 0;
let words;
let et;
let etCount = 0;

for (let paragraph of paragraphs) {
    words = paragraph.split(' ');
    et = words.join(' ').split(' et ');
    etCount += et.length;
    totalWords += words.length;

}

console.log(`total words -> ${totalWords}`);
console.log(`total et -> ${etCount}`);