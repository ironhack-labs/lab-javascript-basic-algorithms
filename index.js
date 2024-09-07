// Iteration 1: Names and Input
let hacker1 = 'Ashish Kumar';   //1.1
let hacker2 = 'Neha Sinha';     //1.2

console.log(`The driver's name is ${hacker1}`);     //1.3
console.log(`The navigator's name is ${hacker2}`);  //1.4

// Iteration 2: Conditionals
let lenDriver = hacker1.length;
let lenNavi = hacker2.length;

//2.1
if (lenDriver === lenNavi){
    console.log(`Wow, you both have equally long names, ${lenDriver}characters!`);
}
else if(lenDriver > lenNavi){
    console.log(`The driver has the longest name, it has ${lenDriver} characters.`);
}
else {
    console.log(`It seems that the navigator has the longest name, it has ${lenNavi} characters.`);
}

// Iteration 3: Loops
//3.1
let formattedDriver = '';

for (let i = 0; i < lenDriver; i++){
    formattedDriver += ( i === lenDriver - 1 ? hacker1[i].toUpperCase() : hacker1[i].toUpperCase() + ' ');
}

console.log(`'${formattedDriver}'`);

//3.2
let reverseNavigator = '';

for (let i = (lenNavi-1); i >= 0; i--){
    reverseNavigator += hacker2[i];
}

console.log(`Reverse navigator: '${reverseNavigator}'`);

//3.3
let maxLen = lenNavi < lenDriver ? lenNavi : lenDriver;
let i;
for (i = 0; i < maxLen; i++){
    if (hacker1[i] < hacker2[i]){
        console.log(`The driver's name goes first.`);
        break;
    }
    else if (hacker2[i] < hacker1[i]){
        console.log(`Yo, the navigator goes first, definitely.`);
        break;
    }
    else {
        continue;
    }
}

if (i === maxLen) {
    if (lenNavi === lenDriver){
        console.log(`What?! You both have the same name?`);
    }
    else if (lenNavi < lenDriver) {
        console.log(`Yo, the navigator goes first, definitely.`);
    }
    else{
        console.log(`The driver's name goes first.`);
    }
}

//Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae mi efficitur, blandit enim et, facilisis eros. Integer nisl arcu, malesuada suscipit porttitor a, tincidunt sit amet velit. Maecenas rhoncus blandit sollicitudin. Maecenas sed urna aliquam, malesuada risus tristique, fermentum eros. Praesent ac efficitur sapien. Fusce mattis purus vel lectus bibendum fermentum. Aenean feugiat consectetur mi at vehicula. Sed facilisis sit amet turpis quis dictum. Aenean bibendum neque diam, at viverra ex euismod et. Cras sit amet odio sed augue sagittis lobortis quis ut lorem. Morbi nulla sapien, vehicula ac tortor eu, fringilla egestas purus. Morbi tempor ante sit amet orci aliquam, sed dictum ligula sodales.
Mauris orci mauris, pharetra eu viverra non, varius a urna. Aliquam vel mauris arcu. Cras auctor rhoncus dapibus. Duis porttitor suscipit arcu sit amet pretium. Curabitur viverra quam tortor. Vivamus at augue enim. Donec ornare dolor at neque posuere facilisis. Donec eget facilisis erat. Fusce aliquam feugiat euismod. Quisque eleifend mauris metus, in commodo mi hendrerit sed.
Integer quis mauris ac nibh pulvinar venenatis rhoncus non urna. Praesent interdum in magna eu interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla rhoncus ut diam vel tempus. Nam convallis urna et feugiat volutpat. Donec iaculis nulla auctor interdum consequat. Phasellus quis enim consequat, congue sem vel, maximus felis. Nullam ultrices massa sit amet leo elementum, eget rhoncus neque finibus. Maecenas lobortis tincidunt eros, et accumsan tellus fringilla nec. Praesent mattis justo odio. Sed mollis justo vitae pretium bibendum. Nunc tristique augue sit amet nunc egestas imperdiet. Maecenas elementum eu arcu quis venenatis. Sed vestibulum et velit sit amet pharetra. Proin commodo urna leo, bibendum porttitor lacus porta in. Nulla molestie nisl ac justo tristique, ac semper diam dapibus.`;

longText = longText.replaceAll('\n', '');

let wordCount = 0;
let etWordCount = 0;
let idx = longText.indexOf(' ');
let word = longText.slice(0, idx);
word = word.replace(/[^a-zA-Z]/g, "");

while (idx > 0){
    wordCount ++;
    if(word === 'et'){
        etWordCount++;
    }

    longText = longText.slice(idx + 1);
    longText = longText.trim();
    idx = longText.indexOf(' ');

    word =  idx > 0 ?  longText.slice(0, idx) : longText;
    word = word.replace(/[^a-zA-Z]/g, "");
}
wordCount ++;

if(word === 'et'){
    etWordCount++;
}    

console.log(`Word Count: ${wordCount}`);
console.log(`et Word Count: ${etWordCount}`);

//Bonus 2:
let phraseToCheck = "No 'x' in Nixon";

phraseToCheck = phraseToCheck.replace(/[^a-zA-Z]/g, "");
phraseToCheck = phraseToCheck.toLowerCase();

let reversePhrase = '';

for (i = (phraseToCheck.length -1); i >= 0; i--){
    reversePhrase += phraseToCheck[i];
}

if (reversePhrase === phraseToCheck){
    console.log('String is a Palindrome.');
}
else{
    console.log('String is not a Palindrome.');
}