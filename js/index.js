// Iteration 1: Names and Input

const hackerOne = "Mark";

console.log(`The driver's name is ${hackerOne}.`);

const hackerTwo = "Jonas";

console.log(`The navigator's name is ${hackerTwo}.`);

// Iteration 2: Conditionals

if (hackerOne.length > hackerTwo.length) {
  console.log(
    `The driver has the longest name, it has ${hackerOne.length} characters.`
  );
} else if (hackerOne.length < hackerTwo.length) {
  console.log(
    `The navigator had the longest name, it has ${hackerTwo.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hackerOne.length}`);
}

// Iteration 3: Loops

// Iteration 3.1

let arrayHackerOne = []

for (let i = 0; i < hackerOne.length; i++) {
  arrayHackerOne.push(hackerOne.charAt(i).toUpperCase())
}

console.log(arrayHackerOne.join(' '))

// Iteration 3.2

function reverseString (string) {
  let newString = '';
  for (let i = string.length -1; i >= 0; i--) {
    newString += string[i]
  }
  return newString
}

console.log(reverseString(arrayHackerOne))

// Iteration 3.3

if (hackerOne.toUpperCase().localeCompare(hackerTwo.toUpperCase) === -1) {
  console.log(`The driver's name goes first.`)
} else if (hackerOne.toUpperCase().localeCompare(hackerTwo.toUpperCase()) === 1) {
  console.log(`The navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

// Bonus 1 - counting words in a string with the 'best' way!

const stringOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ante eu enim ullamcorper pellentesque scelerisque ut ligula. Proin malesuada massa lorem, eu efficitur neque sodales commodo. Curabitur commodo eros massa. Mauris iaculis lacinia lacus id dignissim. Etiam gravida luctus augue ac vehicula. Morbi in hendrerit urna. Vestibulum mattis augue eu metus interdum, et condimentum ipsum tempus. Sed fringilla, felis a interdum porta, turpis nulla lacinia justo, sit amet efficitur velit mi tempus lectus. Donec quis dolor vulputate, posuere lorem vitae, dapibus orci. Vivamus vitae elit quis nisi porttitor blandit non non eros. Sed laoreet, magna a rutrum malesuada, eros eros varius eros, eu congue mauris ex vel arcu. Fusce venenatis ligula sit amet commodo accumsan. Nulla scelerisque facilisis augue in bibendum. In et mi diam. Donec in dolor at mauris blandit sollicitudin eget eu nibh. Etiam vitae aliquam mauris. Suspendisse eget semper est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi quis leo nec augue rutrum faucibus a in mauris. Nullam tempor sagittis suscipit. Ut rhoncus, felis eu pretium porta, dui tellus vulputate lorem, eu malesuada libero turpis id odio. Vestibulum porta consequat mattis. Donec pulvinar leo mauris, sit amet tincidunt mi blandit a. Donec bibendum molestie purus, eu iaculis ante egestas at. Aliquam congue luctus placerat. Nullam lacus urna, suscipit vel lorem et, accumsan mollis felis. Nunc nec augue enim. Vivamus pulvinar quam elementum, tincidunt urna sed, interdum neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean lacinia eros id maximus mattis. Suspendisse ut viverra dui. Quisque ultrices velit eros, eget tempor odio tristique sit amet. Aliquam porttitor egestas semper. Nunc interdum purus quis tellus mattis bibendum. Nunc elementum enim nec sagittis tempus. Sed non arcu dui. Sed quis ipsum sagittis, dapibus quam commodo, vestibulum dui. Nam sodales dui odio, egestas laoreet est finibus id. Pellentesque vitae viverra ipsum.'

function wordCount (str) {
  return str.split(' ')
          .filter(function(n) {return n != ''})
          .length
}
console.log(wordCount(stringOne))

// Bonus 1 continued 

function countSubstr (main_str, sub_str) {
  main_str += ''
  sub_str += ''

  if (sub_str.length <= 0) 
  {
    return main_str.length + 1
  }
    subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return (main_str.match(new RegExp(subStr, 'gi')) || []).length
}

console.log(countSubstr(stringOne, 'et'))