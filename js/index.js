// Iteration 1: Names and Input

const hacker1 = 'Sara';
const hacker2 = 'Mark';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} character`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} character`);
  } else {`Wow, you both have equally long names, ${hacker1.length} characters!`}

// Iteration 3: Loops
// 3.1:

let newHacker1 = '';
for (let i=0; i<hacker1.length; i++) {
 newHacker1 = newHacker1 + ' ' + hacker1[i]
}
console.log(newHacker1.toUpperCase())

// 3.2:
let hacher2NameReverse = "";

for(let i = hacker2.length-1; i>=0; i--){
  hacher2NameReverse+= hacker2[i]
}

console.log(hacher2NameReverse)

//BONUS 1
let loremIpsumTest = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida, nibh vitae feugiat ultricies, leo tellus suscipit est, ut imperdiet urna massa id mi. Nam aliquam neque non interdum interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus mollis ligula mauris, ut ornare ante tincidunt vel. Nam egestas velit eget nulla pulvinar varius. Mauris sed mollis augue. Suspendisse imperdiet dictum nibh a aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.\
In pharetra venenatis erat, vitae varius ipsum fermentum et. Curabitur eu ultrices urna, et tincidunt justo. Proin dignissim ac diam vitae porttitor. Donec efficitur ligula quis dui tincidunt tincidunt. Fusce tellus turpis, faucibus ac molestie id, semper a mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet vitae neque vitae lobortis. Nulla commodo, diam ultricies pellentesque ultricies, orci mauris laoreet lacus, sed viverra est lacus ut dui. Duis dapibus, metus vitae faucibus vehicula, augue diam porta nulla, nec tristique ante nunc eu ante.\
Aenean nec pulvinar velit. Vivamus congue nulla in eros vehicula, a sollicitudin ipsum euismod. Aliquam erat volutpat. Mauris sit amet volutpat quam. Ut ac nisl vel erat lobortis porttitor sit amet at orci. Vestibulum imperdiet egestas vestibulum. Nullam aliquam odio nec mollis elementum. Suspendisse in viverra felis. Maecenas lacinia sit amet nisl et gravida. Morbi interdum posuere odio sed scelerisque. Cras sodales lectus non lectus iaculis efficitur. In iaculis fermentum eros vel dignissim."
let loremNoSpace = loremIpsumTest.split(' ');
console.log(loremNoSpace.length);
let wordCounter = 0
for(let i = 0; i < loremNoSpace.length; i++){
  if(loremNoSpace[i] === 'et'){
    wordCounter++
  }
}
console.log(wordCounter)
//BONUS 2
let phraseToCheck = "Put it up!";
let phraseNoExp = ''
let newWord = ''
for(let i = 0; i < phraseToCheck.length; i++){
  if(phraseToCheck[i] !== '!' && phraseToCheck[i] !== '?'){
    phraseNoExp = phraseNoExp + phraseToCheck[i]
  }else {
    continue
  }
}
let newPhraseNoComma = phraseNoExp.split(' ');
for(let i = 0; i < newPhraseNoComma.length; i++){
  newWord = newWord + newPhraseNoComma[i]
}
let newWordReversed = '';
for (let j = newWord.length -1; j >=0; j--){
  newWordReversed = newWordReversed + newWord[j]
};
if(newWord.toLowerCase() === newWordReversed.toLowerCase()){
  console.log('Good luck, it is a PALINDROME!')
}else {
  console.log('Sorry dude, it is NOT a palindrome...')
}