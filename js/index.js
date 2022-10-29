// Iteration 1: Names and Input

const hacker1 = "Henrique";
console.log(hacker1);
const hacker2 = "Henry";
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
else if (hacker1.length < hacker2.length) console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
else console.log( `Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops
let res = '';
for (const char of hacker1) res += char.toUpperCase() + ' '
console.log(res.trim())

res = '';
for (const char of hacker2) res = char + res;
console.log(res)

if (hacker1 < hacker2) console.log(`The driver's name goes first.`);
else if (hacker1 > hacker2) console.log(`Yo, the navigator goes first definitely.`);
else console.log(`What?! You both have the same name?`);

// Bonus1

const lorem = `
Lorem ipsum dolor sit amet, id esse duis solet qui, sonet epicurei adversarium et mei. Ferri debet quaerendum his cu, et nihil doctus indoctum cum, affert civibus praesent vis at. Ei aeterno oblique usu, exerci quodsi voluptua an vim. Ceteros epicurei laboramus sit no. Saepe latine dissentiunt sit ea, nam legere libris in. Et pri alia constituto. Te posse voluptua sit.

Duo ut iudicabit tincidunt inciderint. Vis facete dignissim adversarium ut. Meis laoreet dignissim per ut, minim eruditi ius id, est graece posidonium te. An evertitur incorrupte disputationi mea. Ius mundi impetus integre eu, cu enim vivendum eos. Quo ea exerci nominati. Cu vim audiam commodo voluptatum, mei cu facete erroribus elaboraret.

Ei falli maiestatis mel, duo ei utamur scripta omittantur. Mel invenire interesset cu, summo molestiae voluptatum vix et. Cu vix sale iuvaret percipit, his justo decore dissentiunt ex. Ei ferri zril appetere mea, dicit percipitur mea no, vis quem eius splendide at.
`
const words = lorem.split(' ')
const numWords = words.length
console.log(`There are ${numWords} words in the paragraphs`);

// I initially used regex but I guess that was missing the point of the exercise.
// but since I liked my solution I left it in.
// const numEts = lorem.match(/(^|[^\w])et([^\w]+|$)/ig).length
// console.log(numEts);

count = 0
for (const word of words) {
    if (
        word.toLowerCase() === 'et' ||
        word.toLowerCase() === 'et.' ||
        word.toLowerCase() === 'et,'
    ) count ++
}
console.log(`There are ${count} "et"s in the paragraphs`)


// Bonus2

const phraseToCheck = "A man, a plan, a canal, Panama!"
const cleanedPhrase = phraseToCheck.replace(/[^\w]/ig, '').toLowerCase()
let cleanedPhraseReversed = '';
for (const char of cleanedPhrase) cleanedPhraseReversed = char + cleanedPhraseReversed;
console.log(cleanedPhraseReversed === cleanedPhrase ? "It's a palindrome! YAY! :)" : "It's not a palindrome... :(")