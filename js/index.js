// Iteration 1: Names and Input

const hacker1 = 'Harry'
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Jane'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length < hacker2.length)
  {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops

const hacker1up = "HARRY"
console.log(hacker1up.split('').join(' '))

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  reverseString("Harry");


if (hacker1.slice(1) > hacker2.slice(1)) {
    console.log('The drivers name goes first')
  } else if (hacker1.slice(1) < hacker2.slice(1)) {
    console.log('The navigator goes first')
  } else { 
    console.log('wow you have the same name')
  }

// Bonus 1

  let loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis dui velit. Duis in eleifend quam. Phasellus pulvinar id lectus a interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis semper enim, ac ornare leo. Vivamus urna metus, feugiat sed magna quis, ultrices ornare ligula. Sed vitae dictum elit, et consectetur diam. Morbi sit amet augue ac metus facilisis efficitur.  Mauris fringilla fringilla justo eget feugiat. Maecenas id consectetur odio. Fusce id gravida ex, nec varius eros. Mauris eu semper eros. Nunc sit amet libero porttitor, molestie diam ut, luctus dolor. Integer ligula ante, facilisis non vestibulum at, vestibulum vel mi. Nam quis facilisis metus. Donec velit nisi, fermentum vel maximus a, aliquam mollis diam. Suspendisse fringilla ligula nec turpis volutpat, eget vestibulum magna fringilla. Mauris sodales nibh at diam mattis fermentum. Vivamus pulvinar metus tempor neque posuere venenatis. Nullam in pharetra arcu, a fermentum nisl. Cras ornare ut ante nec elementum. Donec mattis congue sapien nec auctor. Nulla purus velit, porta in nunc scelerisque, elementum mollis velit. Nulla sed felis eu libero aliquet pulvinar. Sed cursus nisl massa, laoreet viverra massa luctus vitae. Nunc eget vestibulum nisi. Aliquam condimentum in magna et pharetra. Maecenas pulvinar malesuada mollis. Donec ac rutrum turpis, quis condimentum turpis. In hac habitasse platea dictumst. Nulla facilisi.'

  function WordCount(str) {
    return str.split(" ").length
  }
  console.log(WordCount(loremText))

  let countEt = loremText.match(/et/g || []).length;
  console.log(countEt);

  // Bonus 2

let phraseToCheck = "amor,  ,roma"

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome(phraseToCheck))