// Names and Input
let hacker1 = 'Chad'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Barcelo'
console.log(`\nThe navigator's last name is ${hacker2}`)

//Conditionals
if(hacker1.length > hacker2.length) {
  console.log(`\n${hacker1} has the longest name, it has ${hacker1.length} characters`);
  } 
  else if(hacker1.length < hacker2.length) {
    console.log(`\nSup, ${hacker2} got the longest name yo, it has ${hacker2.length} characters!`);
    } 
    else {
      console.log('\nWow, the length of their names are equal');
      }


// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
// Names and Input
let hacker1 = 'Chad'
let hacker2 = 'Barcelo'

function allCapsWithSpace(word){
  let newWord = '';
  for(char of word){
    newWord += (char.toUpperCase() + ' ')
  }
  return newWord;
}

// different ways to reverse a string

function reverseString(word) {
  let splitString = word.split(""); 
  let reverseArray = splitString.reverse(); 
  let joinArray = reverseArray.join(""); 
  return joinArray; 
}

function reverseString2(word) {
  return word.split("").reverse().join("");
}

function reverseString3(word) {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) { 
      newString += word[i]; 
  } 
  return newString;
}

// lexicographical order of 2 string inputs

function checkLexicographicalOrder(firstWord, secondWord) {
  let longest;
  if(firstWord.length > secondWord.length) {
  longest = firstWord.length;
  } 
  else { 
  longest = secondWord.length 
  }
  for(let start = 0; start < longest; start++){
    if(firstWord[start] === secondWord[start]){
      continue;
      }
      else if(firstWord[start] < secondWord[start]) {
        return(firstWord);
        }
      else {
        return(secondWord);
      }
  }
}

// check if palindrome via user input

let userInput = prompt();
function palindrome(word){
  let end = word.length-1;
    for(let start = 0; start < word.length; start++) {
      if(word[start] != word[end]) return('non-palindrome')
      end -= 1;
    }
    return('palindrome')
  }

  // count the words inside a given string
  // not the proper way to do it if you want to work on pure functions
  // since your accepting a string parameter and returning a number
  
  let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh sed tellus tincidunt lacinia sed pharetra ipsum. Sed eget vehicula orci. Nam ut faucibus elit. Integer sit amet ultrices ex, quis commodo enim. Quisque at pulvinar odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus mattis aliquet scelerisque. Aliquam aliquam, augue sed consequat auctor, nisl est tristique erat, eu rhoncus nisl quam nec lectus. Vivamus sit amet dapibus velit, eu interdum urna. Praesent imperdiet in ex ac elementum. Nunc placerat luctus arcu, consectetur viverra neque dignissim a. Vestibulum a viverra turpis. Praesent finibus sollicitudin nulla, vitae rutrum mauris sagittis eget. Pellentesque malesuada dictum fermentum.
  Vivamus aliquet, est sit amet tincidunt rutrum, eros metus pharetra purus, tempor tincidunt neque felis ac leo. Sed quis metus sed eros imperdiet dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper nunc enim, eget aliquam mi hendrerit id. Aliquam nec viverra risus. Pellentesque non eleifend erat. Vivamus sed nibh in dui tincidunt euismod. Sed posuere, dolor vitae sollicitudin semper, mi ipsum tristique ex, eget eleifend neque augue dictum lorem. Etiam tristique dapibus justo, eu egestas lectus. Curabitur quis rutrum tortor.
  Phasellus vestibulum maximus vestibulum. Mauris gravida molestie interdum. Suspendisse quis eros eu mauris euismod facilisis. Aenean et pretium ante. Nunc luctus fermentum nulla, quis viverra libero varius tempus. Vivamus lobortis lacinia tortor vitae bibendum. Phasellus sodales porttitor dolor, sit amet finibus ligula dapibus a. Maecenas sit amet fringilla leo, non suscipit nibh. Aenean risus neque, hendrerit vel arcu sed, dapibus dapibus metus. Nunc sit amet leo non lacus tincidunt mattis.
  `
  
  // function wordCount(paragraph){
    //   let counter = 0;
    //   lorem = lorem.split(" ");
    //   for(word of lorem){
    //     counter += 1;
    //   }
    //   return counter;
    // }

// made the return value into a string
  function wordCount(paragraph){
    let counter = 0;
    lorem = lorem.split(" ");
    for(word of lorem){
      counter += 1;
    }
    return (`${counter} words in the statement`);
  }
// count the number of et in a string
// got to play around with RegExp
// will play with it more later

  function etCount(paragraph){
    paragraph = paragraph.split(" ");
    let counter = 0;
    for(let word of paragraph){
      if(RegExp(/^et/).test(word)){
      counter += 1;}
    }
    return(`${counter} amount of et in the statement`);
  }
