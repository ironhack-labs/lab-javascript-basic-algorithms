// Iteration 1: Names and Input
//
const hacker1 = 'Karina';
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Anne';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if ((hacker1.length = hacker2.length)) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 - Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let withSpace = '';

for (let i = 0; i < hacker1.length; i++) {
  withSpace += hacker1.charAt(i) + ' '; //or withSpace += hacker1.[i] + ' ';
}

console.log(withSpace.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reverseName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i]; // or newString = newString + str[i];
}

console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nulla pretium nunc porttitor interdum et ultrices velit. Sed venenatis rhoncus dolor, et auctor erat malesuada at. In eu massa semper, iaculis turpis ut, tempus dolor. Maecenas iaculis feugiat sollicitudin. Sed vulputate ornare neque, non semper ligula ultrices nec. Donec ac luctus nunc, id finibus nulla. Quisque in pulvinar ipsum, in luctus urna.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel aliquet metus, ac pharetra eros. Pellentesque tempus sem efficitur viverra sollicitudin. Praesent nec dolor nibh. Integer ac purus accumsan ipsum faucibus accumsan eu ac massa. Cras in arcu at urna tempus laoreet. Ut at vulputate libero. Nullam viverra libero nec lobortis dignissim. Pellentesque sem dui, hendrerit id sollicitudin eu, maximus non dolor. Nulla vel magna ante. Etiam malesuada justo id nunc egestas, quis rutrum turpis eleifend. Proin et enim ornare, rutrum lacus ac, fermentum nibh. Suspendisse sit amet ultricies lectus. Donec laoreet fermentum mauris eget ultricies. Sed eu consectetur urna.In semper risus feugiat ex suscipit porttitor. Proin ornare ultrices tincidunt. Sed vel metus eu mauris aliquam hendrerit. Nullam sodales finibus odio sed rhoncus. Donec ante quam, porttitor nec quam vehicula, egestas bibendum libero. Duis quis urna nisl. Nam fringilla magna vel est sodales faucibus. Aenean sit amet mauris vulputate, dignissim nisi id, porta turpis. Donec ut viverra odio, sit amet molestie magna.';

  let loremWords = loremText.split(" ")
  console.log("Words: ", loremWords.length);
  
  let counter = 0
  for(let i=0; i< loremWords.length; i++) {
      if(loremWords[i][0].toLowerCase() === 'e' && loremWords[i][1].toLowerCase() ==='t') {
          counter++
      }
  }
  console.log(`et:`, counter)



// Bonus 2

let string1 = 'A man, a plan, a canal, Panama!';
let string2 = 'Amor, Roma';
let string3 = 'race car';
let string4 = 'stack cats';
let string5 = 'step on no pets';
let string6 = 'taco cat';
let string7 = 'put it up';
let string8 = 'Was it a car or a cat I saw?';
let string9 = 'No x in Nixon';

// function isPalindrome(str) {
//   let newStr = ''
//   for(let i = 0; i < str.length; i++) {
//     const charCode = str.toLowerCase().charCodeAt(i)
//     if(charCode >= 65 && charCode <= 90) {
//       newStr += str.charAt(i)
//     }
//   }

//   console.log(newStr)


//   for(let i = 0; i < Math.floor(newStr.length / 2); i++) {
//     const leftChar = newStr.charAt(i)
//     const rightChar = newStr.charAt(newStr.length - 1 - i)
//     if(leftChar !== rightChar) {
//       return false
//     }
//   }
//   return true
// }

// Alternative Solution 

function isPalindrome(str) {
	let newStr = str
		.replace(/[^0-9a-z]/gi, '')
		.toLowerCase()
		.split('');

  console.log(newStr)


  for(let i = 0; i < Math.floor(newStr.length / 2); i++) {
    const leftChar = newStr[i]
    const rightChar = newStr[newStr.length - 1 - i]

    if(leftChar !== rightChar) {
      return false
    }
  }
  return true
}




console.log(isPalindrome(string5));
