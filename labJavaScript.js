
// Iteration 1
const hacker1 = 'Alonso';
const hacker2 = 'Sainz';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

//Iteration2
const nameLonger = hacker1.length>hacker2.length ? `The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.` : `It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`

function IsNameLonger() {
  if(hacker1.length>hacker2.length) {
    return `The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`;
  } else if(hacker2.length>hacker1.length) {
    return `It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`;
  } else {
    return 'What?! You both have the same name?';
  }

}

console.log(nameLonger)
console.log(IsNameLonger())

//bonus time! 
//Bonus 1
const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut varius neque. Phasellus dolor purus, sagittis vel facilisis in, pulvinar et purus. Curabitur sagittis aliquam augue, in vestibulum dui cursus nec. Aliquam in lectus eget nunc lacinia cursus et eget est. Etiam at mattis odio, id euismod neque. Nunc sodales ullamcorper lacus, eget facilisis leo suscipit eu. Maecenas at nunc quis augue bibendum sodales ac id purus.

Morbi venenatis mauris erat, ut auctor mi sollicitudin in. Fusce vitae ligula ac augue rutrum facilisis nec euismod magna. Curabitur eget ligula vitae dolor tristique lacinia id tempor risus. In bibendum neque in posuere finibus. Etiam nec lacinia dolor. Praesent a leo odio. Aliquam sed dignissim mi, ac facilisis nisi. In hac habitasse platea dictumst. Curabitur tempor volutpat blandit. Pellentesque sed diam pulvinar justo ornare elementum. Vestibulum tincidunt ut dolor in porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet magna nisi. Pellentesque ut sodales massa, quis placerat lectus.

Nullam lobortis turpis nec eros sollicitudin semper. Etiam eu felis interdum, lacinia ex sit amet, suscipit quam. Nulla in est quis velit laoreet porttitor. Cras dictum ante dolor, a feugiat leo vehicula et. Sed ac quam lorem. Nulla vestibulum luctus ex eu placerat. In sed dolor sem. Duis gravida mauris sed eros aliquet, vel tempor sem tincidunt. Morbi eros magna, varius nec tincidunt a, pulvinar ac velit. Mauris ac neque sit amet lorem venenatis posuere et eget ipsum. In ut rutrum magna.`;

// lets loop through the string and count the words
wordcount(input){
  return input.split(/\s+/).length;
}

console.log(wordcount(paragraphs));