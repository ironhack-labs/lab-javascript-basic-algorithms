// Iteration 1: Names and Input
//

let hacker1 = 'Marija';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Daniel';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }

// Iteration 3: Loops

//3.1
let driverCapitals = hacker1.toUpperCase();
console.log(driverCapitals);

let hackerOneCapitals = driverCapitals.split('').join(' ');
console.log(hackerOneCapitals);


// 3.2

console.log(hacker2.length);  //6

let hackerTwo = hacker2.split("");
console.log(hackerTwo);   // array D,a,n,i,e,l

let reverseHackerTwo = hackerTwo.reverse();
console.log(reverseHackerTwo);

let reverseHacker2 = reverseHackerTwo.join("");
console.log(reverseHacker2);

// 3.3
/*console.log(hacker1.localeCompare(hacker2));  //1 */

if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) == 0) {
  console.log("What?! You both have the same name?") 
} else if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.")
}


// Bonus 1

let loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lacinia metus. Donec lacinia dignissim gravida. Nulla ornare, erat non aliquam fermentum, lacus nibh faucibus dolor, ut consectetur erat libero in elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, elit quis molestie sagittis, libero felis pretium tortor, at sodales mauris erat ut felis. Proin et hendrerit turpis. Duis ut metus ut ex placerat tempor in ac sapien. Nam gravida, justo vitae cursus ullamcorper, quam est sodales nisl, eget dictum elit arcu non eros. Etiam non lectus tristique, ultricies tellus ultrices, vestibulum leo. In hac habitasse platea dictumst. In in tellus et velit posuere viverra a a erat.

Quisque nisl nunc, faucibus ut enim a, vestibulum tristique orci. Duis tristique dolor at justo molestie molestie. Proin rhoncus est laoreet tempor pulvinar. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus massa diam, egestas a commodo non, interdum vitae augue. Donec vel eros at odio porta fermentum. Nam ultrices felis ultrices lacus mollis, vitae venenatis mauris mattis. Praesent vehicula elit ut ipsum dictum tincidunt. Phasellus scelerisque aliquet condimentum. Nullam aliquam fermentum leo. Quisque consequat viverra risus in tempor. Nam elementum elit at tincidunt interdum. Etiam in est nisi. Proin ornare tristique risus ut interdum.

Morbi eu ligula id sapien semper sagittis at ut velit. Nunc luctus id sapien ut tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus consectetur condimentum lobortis. Donec consequat, magna ut iaculis viverra, ipsum nunc ultricies lectus, eget sollicitudin diam justo pulvinar velit. In tincidunt odio arcu, a ornare felis tristique at. Curabitur ornare sagittis faucibus. Nulla lectus orci, laoreet et massa quis, gravida semper turpis. Phasellus vel iaculis lacus, et placerat nunc. Ut rutrum tempor luctus. Pellentesque dignissim leo sed diam varius, at sodales ligula tempus.`;

function countWords(loremText) {
    const arr = loremText.split(' ');
    return arr.filter(word => word !== '').length;
  }
  console.log(countWords(loremText));
  function etCount (loremText) {
    return loremText.split(' et').length -1;
  }
  console.log(etCount(loremText));

// Bonus 2

let phraseToCheck = "";

function checkPalindrome(phraseToCheck){
  let reversed = phraseToCheck.split("").reverse().join("");
  return phraseToCheck === reversed
}

console.log(checkPalindrome('step on no pets'));