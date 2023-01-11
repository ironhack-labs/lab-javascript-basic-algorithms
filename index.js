// Iteration 1: Names and Input

const hacker1 = "John";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Paul";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    const nameLength = hacker1.length;
    console.log(`Wow, you both have equally long names, ${nameLength} characters!`);
} else if (hacker1.length > hacker2.length) {
    const nameLength = hacker1.length;
    console.log(`The driver has the longest name, it has ${nameLength} characters.`)
} else {
    const nameLength = hacker2.length;
    console.log(`It seems that the navigator has the longest name, it has ${nameLength} characters.`);
};

// Iteration 3: Loops

// 3.1
let uCaseDriversMap = [];
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        uCaseDriversMap.push(hacker1.toUpperCase()[i]);
        break;
    };
    uCaseDriversMap.push(hacker1.toUpperCase()[i]);
    uCaseDriversMap.push(' ');
};

console.log(uCaseDriversMap.join(''));

// 3.2
let navsMap = [];
for (let i = 0; i < hacker2.length; i++) {
    navsMap.unshift(hacker2[i]);
}

console.log(navsMap.join(''));

// 3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
};

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac neque tellus. Cras at nunc ac felis ullamcorper porttitor. Donec vel lacinia nunc, et lobortis ex. Donec dapibus dui et mi volutpat, eget interdum erat convallis. Donec eu varius nibh, euismod malesuada nunc. In tincidunt massa vel odio convallis varius. Morbi sed diam et neque fermentum gravida at a nisl. Proin velit mi, blandit vitae purus id, auctor gravida arcu. Nulla tortor purus, efficitur id est nec, molestie hendrerit quam. Mauris varius tincidunt lectus. Pellentesque at rutrum turpis. Nullam suscipit, lacus ac eleifend iaculis, justo leo congue odio, sed facilisis dolor diam sit amet metus. Morbi imperdiet lacus purus. Integer hendrerit id neque vel pretium. Curabitur eu maximus sapien, nec dictum massa. Vivamus accumsan, enim sed elementum egestas, erat mauris varius diam, id finibus quam nisi ut libero. Nulla lacinia dui eget rhoncus sagittis. Fusce ut posuere lorem, vel mattis lorem. Nulla auctor, risus id maximus malesuada, leo urna vehicula tellus, ac condimentum elit tortor a mauris. Proin pretium ante ac dolor ornare dictum. Suspendisse potenti. Curabitur eu lorem ut est venenatis tempus. Maecenas non magna in ligula hendrerit scelerisque vel nec nibh. Sed posuere fermentum elit et fermentum. Etiam ut lorem eu magna luctus molestie. Nunc in nisi at felis varius mollis id dapibus turpis. Nulla facilisi. Vestibulum maximus, magna vel blandit laoreet, felis mi feugiat nulla, ut imperdiet eros risus ut neque. Nulla pulvinar sagittis tincidunt. Mauris elit ante, varius at neque convallis, posuere bibendum urna. Duis ut sem consectetur ipsum tempus condimentum in at turpis. Donec purus nibh, hendrerit sit amet mauris vestibulum, imperdiet hendrerit odio. Quisque a tellus nulla. Nunc nisi orci, efficitur nec varius in, sollicitudin vitae sapien. Aenean suscipit suscipit tristique. Integer vel purus sed neque molestie volutpat sit amet eu leo. Nulla facilisi. Cras aliquet venenatis ligula, id vehicula nisl rutrum varius. In tempus nisi quis viverra facilisis.";

let numberOfWords = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] !== ' ') {
        if (longText[i+1] === ' ') {
            numberOfWords ++;
        };
    };
    if (i === longText.length - 1) {
        if (longText[i] !== ' ') {
            numberOfWords ++;
        };
    };
};
console.log(numberOfWords);

let countEt = 0;

for (let i = 0; i < longText.length - 1; i++) {
    if (i === 0) {
        if (longText[i].toLowerCase() === 'e' &&
            longText[i+1].toLowerCase() === 't' &&
            (longText[i+2] === ' ' ||
             longText[i+2] === ',' ||
             longText[i+2] === '.' ||
             longText[i+2] === '!' ||
             longText[i+2] === '?')) {
                countEt ++;
            };
    }else if (i === longText.length - 2){
        if (longText[i-1] === ' ' &&
            longText[i].toLowerCase() === 'e' &&
            longText[i+1].toLowerCase() === 't') {
                countEt ++;
            }
    }else{
        if (longText[i-1] === ' ' &&
            longText[i].toLowerCase() === 'e' &&
            longText[i+1].toLowerCase() === 't' &&
            (longText[i+2] === ' ' ||
             longText[i+2] === ',' ||
             longText[i+2] === '.' ||
             longText[i+2] === '!' ||
             longText[i+2] === '?')) {
                countEt ++;
            };
    };
};

console.log(countEt);

// Bonus 2

const phraseToCheck = "No 'x' in Nixon";

let toList = [];
let reverseList = [];
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] !== ' ' &&
        phraseToCheck[i] !== ',' &&
        phraseToCheck[i] !== '.' &&
        phraseToCheck[i] !== '!' &&
        phraseToCheck[i] !== '?' &&
        phraseToCheck[i] !== '@' &&
        phraseToCheck[i] !== "'" &&
        phraseToCheck[i] !== ':') {
            toList.push(phraseToCheck[i].toLowerCase());
            reverseList.unshift(phraseToCheck[i].toLowerCase());
        };
};

if (toList.join('') === reverseList.join('')) {
    console.log("It's a palindrome.");
}else{
    console.log("Not a palindrome.")
};
