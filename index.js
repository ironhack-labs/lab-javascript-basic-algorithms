// Iteration 1: Names and Input
let hacker1 = 'Jarco';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Berta';
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if (hacker1Length < hacker2Length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}


// Iteration 3: Loops
let nameOfDriverToUpperCase = '';
for (let i = 0; i < hacker1Length; i += 1) {
  nameOfDriverToUpperCase += `${hacker1[i].toUpperCase()} `;
}
console.log(nameOfDriverToUpperCase);

let nameOfNavigatorRevers = '';
for (let i = hacker2Length - 1; i >= 0; i -= 1) {
  nameOfNavigatorRevers += hacker2[i];
}
console.log(nameOfNavigatorRevers);

if (hacker1.toLocaleLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.")
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log('Yo, the navigator goes first, definitely.')
} else {
  console.log('What?! You both have the same name?')
}

// Bonus Time
// Bonus 1
const longTrext = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.'

let wordsCount = 0;
let etCount = 0;

for (let i = 0; i <= longTrext.length; i += 1) {
  if (longTrext[i] === ' ' || i === longTrext.length) {
    wordsCount += 1;
  }
  if (longTrext[i] === 't' && longTrext[i - 1] === 'e' && longTrext[i - 2] === ' ' && longTrext[i + 1] === ' ') {
    etCount += 1;
  }
}
console.log(wordsCount);
console.log(etCount);

//Bonus 2

const alphbeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let phraseToCheck = 'A man, a plan, a canal, Panama!';

let result = '';

for (let i = 0; i < phraseToCheck.length; i += 1) {
  if (alphbeth.includes(phraseToCheck[i].toUpperCase())) {
    result += phraseToCheck[i].toUpperCase()
  }
}

let resultReverse = '';
for (let i = result.length - 1; i >= 0; i -= 1) {
  resultReverse += result[i];
}

console.log(result === resultReverse);