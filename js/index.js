// Iteration 1: Names and Input
let hacker1 = 'Johnny';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Gregory';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3: Loops
let name1 = ''; 
let name2 = '';

for (let i = 0; i < hacker1.length; i++) {
 name1 += hacker1[i]+ " ";  
};


for (let i = hacker2.length - 1; i >= 0; i--) {
  name2 += hacker2[i];
};

console.log(name1.toUpperCase());
console.log(name2);

if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definetily');
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The drivers name goes first`);
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log('You have the same name');
};




//BONUS TIME
let latin = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel arcu mattis, sagittis magna nec, tempor libero. Integer porttitor congue risus, quis volutpat felis. Vivamus eget molestie orci. Nam malesuada, ex a porta posuere, quam dolor posuere nulla, eget consectetur lacus dolor eu diam. Etiam a orci elementum, imperdiet dolor non, efficitur erat. Fusce ut massa id risus tincidunt bibendum ut quis nulla. Maecenas dictum est eget odio sollicitudin volutpat. Ut vel elit tortor. Nulla vel placerat erat, in cursus purus.

Morbi sollicitudin, magna non tempus condimentum, ligula nisl bibendum sapien, ut molestie metus dui vitae sapien. Pellentesque sed ex nulla. Phasellus venenatis, justo et semper pharetra, tortor lectus iaculis urna, eu tempus dolor urna in dolor. Donec vitae mollis quam. Sed gravida neque nisl, eu dictum dui feugiat eu. In quis est nec purus malesuada ornare ac sed ipsum. Pellentesque leo erat, euismod quis turpis non, pharetra feugiat ipsum. Sed rutrum est ut dignissim sagittis. Aenean pulvinar euismod dui. Phasellus pulvinar orci eu turpis accumsan varius. Sed dapibus, massa non euismod euismod, neque massa tincidunt augue, eu tincidunt risus lorem rutrum sem. Mauris gravida volutpat est eu sollicitudin. Etiam imperdiet, sem non efficitur sodales, eros lorem semper velit, eget finibus justo erat vel est.

Ut cursus eros at nibh pulvinar, nec commodo justo malesuada. Sed eu nulla sed risus tincidunt pellentesque. Ut blandit finibus est at tincidunt. Morbi nec aliquet lorem, at tempor purus. Cras eu turpis lorem. Aliquam et velit id quam fringilla gravida quis vitae lorem. Donec sodales diam consectetur, ultrices felis in, tristique magna. Aliquam ut vehicula purus. Proin tempor turpis ac ante mattis rutrum. Morbi mattis varius urna.`

let splited = latin.split(' ')
console.log(`The number of words in this text is ${splited.length}`);


//bonus 2

let phraseToCheck = 'step on no pets';
let compare1 = '';
let compare2 = '';

for (let i = 0; i < phraseToCheck.length; i++) {
  compare1 += phraseToCheck[i];
}

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  compare2 += phraseToCheck[i];
}

if (compare1 === compare2) {
  console.log('This phrase is a Palindrome.');
} else {
  console.log(`This phrase isn't a Palindrome.`);
};