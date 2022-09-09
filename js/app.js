import iteration from './iterations.js';
import items from './items.js';
import { generateString, findLongestName, spellNamesHelper } from './utils.js';

function spellNames(names) {
  let result = '';
  result = spellNamesHelper(...names);

  return result;
}

function lexicographic() {
  let result = '';
  
  let firstText = iteration.iteration_Two.messages[4];
  let secondText = iteration.iteration_Two.messages[5];
  let thirdText = iteration.iteration_Two.messages[6];

  let firstSentence = `${firstText.split(' ').sort().join('')}\n`;
  let secondSentence = `${secondText.split(' ').sort().join('')}\n`;
  let thirdSentence =   thirdText.split(' ').sort().join('');

  result = firstSentence + secondSentence + thirdSentence;

  return result;
}

function loremIpsum() {
  let result = '';
  let lorem = iteration.iteration_Three.lorem;
  result = `\nThe sum of all the characters of the lorem text is ${lorem.length} and the word "et" has ${(lorem.match(/et/g) || []).length} ocurrences`;

  return result;
}

function checkPalyndrome (palyndromes) {
  if(palyndromes[0] === palyndromes[0].split('').reverse().join('')){
    return '\n ' + palyndromes[0] + ' is a palyndrome!'
  }
  else{
    return '\n ' + palyndromes[0] + ' is not a palyndrome.'
  }
}

function compareNames(names) {
  let result = findLongestName(iteration, ...names);

  return result;
}

function printNames (names) {
  let result = '';
  //let { names } = hackers;

  result = generateString(iteration, ...names);

  return result;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
//Here is where the magic starts...
const names = items.hackers.nameList;
const palyndromes = items.palyndromes;
console.log(''.concat(printNames(names), compareNames(names)), spellNames(names), loremIpsum(), lexicographic(), checkPalyndrome(palyndromes));
//and ends.