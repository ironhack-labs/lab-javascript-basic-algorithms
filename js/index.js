//BONUS 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida, nibh vitae feugiat ultricies, leo tellus suscipit est, ut imperdiet urna massa id mi. Nam aliquam neque non interdum interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus mollis ligula mauris, ut ornare ante tincidunt vel. Nam egestas velit eget nulla pulvinar varius. Mauris sed mollis augue. Suspendisse imperdiet dictum nibh a aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus.\
In pharetra venenatis erat, vitae varius ipsum fermentum et. Curabitur eu ultrices urna, et tincidunt justo. Proin dignissim ac diam vitae porttitor. Donec efficitur ligula quis dui tincidunt tincidunt. Fusce tellus turpis, faucibus ac molestie id, semper a mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet vitae neque vitae lobortis. Nulla commodo, diam ultricies pellentesque ultricies, orci mauris laoreet lacus, sed viverra est lacus ut dui. Duis dapibus, metus vitae faucibus vehicula, augue diam porta nulla, nec tristique ante nunc eu ante.\
Aenean nec pulvinar velit. Vivamus congue nulla in eros vehicula, a sollicitudin ipsum euismod. Aliquam erat volutpat. Mauris sit amet volutpat quam. Ut ac nisl vel erat lobortis porttitor sit amet at orci. Vestibulum imperdiet egestas vestibulum. Nullam aliquam odio nec mollis elementum. Suspendisse in viverra felis. Maecenas lacinia sit amet nisl et gravida. Morbi interdum posuere odio sed scelerisque. Cras sodales lectus non lectus iaculis efficitur. In iaculis fermentum eros vel dignissim."
console.log(loremIpsumText)
let loremNoSpace = loremIpsumText.split(' ');
console.log(loremNoSpace)
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
console.log(phraseNoExp)
let newPhraseNoComma = phraseNoExp.split(' ');
console.log(newPhraseNoComma)
for(let i = 0; i < newPhraseNoComma.length; i++){
  newWord = newWord + newPhraseNoComma[i]
}
console.log(newWord)
let newWordReversed = '';
for (let j = newWord.length -1; j >=0; j--){
  newWordReversed = newWordReversed + newWord[j]
};
console.log(newWordReversed)
if(newWord.toLowerCase() === newWordReversed.toLowerCase()){
  console.log('Good luck, it is a PALINDROME!')
}else {
  console.log('Sorry dude, it is NOT a palindrome...')
}

