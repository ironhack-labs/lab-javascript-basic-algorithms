////////////////////////////////////
// Iteration 1: Names and Input
console.log('Iteration 1:');
const hacker1 = 'Marco';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Jordi';
console.log(`The navigator's name is ${hacker2}`);

///////////////////////////////////
// Iteration 2: Conditionals
console.log('Iteration 2:');
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, XX characters!`);
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it ${hacker2.length} characters`
  );
}

/////////////////////////////////////
// Iteration 3: Loops

// 3.1
console.log('Iteration 3.1:');
// first option
console.log(hacker2.split('').join(' '));
// second option
let test = '';
for (let i = 0; i < hacker2.length; i++) {
  test += hacker2.charAt(i) + ' ';
}
console.log(test);

// 3.2
console.log('Iteration 3.2:');
function reverseString(str) {
  var newString = '';
  for (var i = hacker2.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString(hacker2));

// 3.3
console.log('Iteration 3.3:');
var arr = [hacker1, hacker2];

function lexicographicOrder(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) {
    console.log("The driver's name goes first");
  } else if (b > a) {
    console.log('Yo, the navigator goes first definitely');
  } else {
    console.log('What?! You both have the same name?');
  }
}
console.log(lexicographicOrder(hacker1, hacker2));

////////////////////////////////
// Bonus 1

// 1.1
const string1 =
  'Lorem ipsum dolor sit, consectetur adipiscing elit. Aliquam mattis sem nec sem ultrices venenatis. Quisque consectetur ullamcorper dui, vitae maximus orci egestas sed. Praesent ut enim tempor, mattis ante at, tincidunt massa. Nunc nec risus risus. Sed quis ante orci. Pellentesque sagittis, est condimentum dapibus porttitor, est nisl gravida massa, et consequat diam nisl a justo. Maecenas ut nibh consectetur, varius neque et, tristique dolor.';
const string2 =
  'In pellentesque nibh vel malesuada tincidunt. Mauris varius ullamcorper ipsum, eget euismod arcu dapibus vel. Etiam a elit convallis augue hendrerit pharetra a quis massa. Nam semper diam a arcu hendrerit, sed rhoncus turpis sagittis. Nulla accumsan sodales libero. Pellentesque maximus dui at mauris placerat, eu malesuada tortor cursus. Praesent cursus rhoncus orci consectetur malesuada. Morbi ullamcorper egestas augue, lobortis bibendum enim consequat sit amet. Nam pharetra maximus arcu quis convallis. Integer vel est ullamcorper, tempus libero eget, luctus magna.';
const string3 =
  'Quisque sem lectus, pellentesque vitae nisl non, et laoreet condimentum neque. Sed vestibulum molestie hendrerit. Nulla non eros id turpis posuere pharetra vitae eu neque. Proin eget nulla lobortis nibh pharetra aliquam. In interdum dignissim neque, a feugiat ipsum fringilla finibus. Nam ut neque quis odio lobortis semper quis in neque. In sit amet risus nec ex semper porttitor. Fusce vel nisi tempus, sodales neque eget, sollicitudin erat. Sed scelerisque,';
// 1.2
console.log('bonus 1.2');
// with for loop
function wordCount(str) {
  var stringArray = str.split(' ');

  var count = 0;
  for (var i = 0; i < stringArray.length; i++) {
    var word = stringArray[i];
    count++;
  }
  return count;
}
console.log(wordCount(string1));

// or in just one line:
// console.log(string1.split(' ').length);

// 1.3
console.log('bonus 1.3');
function countOccurrences(str, word) {
  // split the string by spaces
  let strArr = str.split(' ');

  // search for pattern in a
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    // if match found increase count
    if (word === strArr[i]) count++;
  }

  return count;
}
console.log(countOccurrences(string1, 'et'));

//////////////////////////////////////////////
// Bonus 2
console.log('bonus 2');
const phraseToCheck = 'Was it a car or a cat I saw?';
function sentencePalindrome(str) {
  let low = 0;
  let high = str.length - 1;

  // Lowercase string
  str = str.toLowerCase();

  // Compares character until they are equal
  while (low <= high) {
    let getAtl = str[low];
    let getAth = str[high];

    // If there is another symbol in left of sentence
    if (!(getAtl >= 'a' && getAtl <= 'z')) {
      low++;
    }
    // If there is another symbol in right of sentence
    else if (!(getAth >= 'a' && getAth <= 'z')) {
      high--;
    }
    // If characters are equal
    else if (getAtl == getAth) {
      low++;
      high--;
    }

    // If characters are not equal then is not palindrome
    else return false;
  }

  // Returns true if is palindrome
  return true;
}

console.log(sentencePalindrome(phraseToCheck));
