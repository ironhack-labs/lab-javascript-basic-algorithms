// Iteration 1: Names and Input
const hacker1 = "Ewerton Vaz";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Fulano da Silva";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

//Iteration 3: Loops
let nome = "";
for (let i = 0; i < hacker1.length; i++) {
    if ( i !== hacker1.length - 1) {
        nome += `${hacker1[i].toUpperCase()} `;
    } else {
        nome += `${hacker1[i].toUpperCase()}`;
    }
}
console.log(nome, nome.length);

nome = "";
for (let i = hacker1.length -1; i >= 0; i--) {
    nome += `${hacker1[i]}`;
}
console.log(nome);

let j, condition = 0;

for (let i = 0; i < hacker1.length; i++) {
    j = i;
    while (j < hacker2.length) {
        // console.log('contadores:', i, j);
        if (hacker1.toLocaleLowerCase().charCodeAt(i) > hacker2.toLocaleLowerCase().charCodeAt(j)){
            condition = 2;
            // console.log('if1', condition, hacker1.charCodeAt(i), hacker2.charCodeAt(j));
            break;
        } else if (hacker1.toLocaleLowerCase().charCodeAt(i) < hacker2.toLocaleLowerCase().charCodeAt(j)) {
            condition = 1;
            // console.log('if2', condition, hacker1.charCodeAt(i), hacker2.charCodeAt(j));
            break;
        } else {
            j = i;
            // console.log('if3', condition, hacker1.charCodeAt(i), hacker2.charCodeAt(j));
            break;
        }
    }
    if (condition !== 0) { break;}
}

if (condition === 0){
    if (hacker1.length > hacker2.length ) {
        condition = 2;
    } else if (hacker1.length < hacker2.length ) {
        condition = 1;
    }
}
// console.log(condition);

switch (condition) {
    case 1:
        console.log("The driver's name goes first.");
        break;
    case 2:
        console.log("- Yo, the navigator goes first definitely.");
        break;
    case 0: 
        console.log("- What?! You both have the same name?");
        break;
    default:
        console.log("These names are to difficult for me to understand!");
}

// Bonus 1
let myText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat porttitor ligula volutpat luctus. Nulla dolor est, euismod id dui id, aliquet aliquam libero. Etiam eget ultrices nisi. Fusce euismod metus mi. Suspendisse eros neque, rhoncus ultricies blandit in, elementum sed nisl. Cras maximus dolor sed libero vehicula tempor. Maecenas aliquam rutrum lorem, tempus fringilla leo posuere sed. Maecenas sagittis sem quis massa varius, cursus aliquet erat luctus.

Donec laoreet aliquam auctor. Phasellus sit amet leo tincidunt, finibus lectus non, luctus neque. Ut venenatis eu felis sit amet malesuada. Aenean porta ultrices turpis vitae tincidunt. Aliquam non rutrum nulla, vel rutrum libero. Integer mauris turpis, aliquam in urna id, semper scelerisque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus, tellus sit amet lobortis interdum, arcu diam luctus dolor, eget vestibulum sem eros et tellus. Nunc in lacinia diam. Vestibulum at pretium mauris. Aenean a elit et est euismod interdum. Phasellus id mauris vel elit ultrices consectetur laoreet sed purus.

In vitae odio eu nisi tempor ultricies. Proin eget magna pretium, dictum dolor quis, scelerisque libero. Cras convallis libero nec euismod dictum. In dictum tincidunt erat, a porta lacus cursus ac. Nullam in nulla quis lectus pretium pharetra ac eget diam. Quisque eu malesuada enim, ac semper enim. Integer vel mi et dolor accumsan pulvinar. Donec sollicitudin, tellus eget consequat varius, metus est luctus quam, lobortis porttitor ex lectus in ex. In pretium arcu nunc, ut hendrerit sem eleifend eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris consectetur quam sed lorem venenatis ultrices. Sed ut tellus nec risus dignissim rhoncus. Aliquam ante dui, tempus nec nunc in, vestibulum convallis nisl.`;

let wordsCount = 0, etCount = 0, i = 0, actualWord = "", nextLeter = "";

while (i < myText.length) {
    nextLeter = myText[i];
    switch (nextLeter){
        case (" "):
            wordsCount++;
            //console.log(actualWord, wordsCount);
            if (actualWord == "et") {
                etCount++;
            }
            actualWord = "";
            //i++;
            break;
        case (","):
        case ("."):
            i++;
            wordsCount++;
            //console.log(actualWord, wordsCount);
            actualWord = "";
            break;
        default:
            actualWord += nextLeter;
    }
    i++;
}
console.log(`Total words: ${wordsCount}`);
console.log(`Qty for "et" word: ${etCount}`);

// Bonus 2:
let phraseToCheck = "A man, a plan, a canal, Panama!";
let normalOrder = "", ivertedOrder = "", letterN = "", letterI;
for (i = 0; i < phraseToCheck.length; i++){
    letterN = phraseToCheck.charAt(i).toLowerCase();
    letterI = phraseToCheck.charAt(phraseToCheck.length - 1 - i).toLowerCase();
    switch (letterN) {
        case (`"`):
        case ("?"):
        case ("'"):
        case (","):
        case (" "):
        case ("!"):
            break;
        default:
            normalOrder += letterN;
    }
    switch (letterI) {
        case (`"`):
        case ("?"):
        case ("'"):
        case (","):
        case (" "):
        case ("!"):
            break;
        default:
            ivertedOrder += letterI;
    }
}
// console.log(normalOrder, "||", ivertedOrder);
if (normalOrder === ivertedOrder) {
    console.log(`The phrase "${phraseToCheck}" is a Palindrome.`);
} else {
    console.log("No, this phrase is not a Palindrome.");
}