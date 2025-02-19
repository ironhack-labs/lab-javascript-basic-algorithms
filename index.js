// Iteration 1: Names and Input
// Y index 0 , o index 1, s index 2, h index 3, i index 4
//length 5
const hacker1 = "Yoshi";
const hacker2 = "Yoshieeeeeee";
// 0 1 2 3 4
// a = 10
// b = 11
// B = 2
let result1 = "The driver's name is " + hacker1;
// console.log(result1);
// console.log("The navigator's name is " + hacker2);
// console.log(`The driver's name is ${hacker1}`)

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let addName = "";
for (let i = 0; i < hacker1.length; i++) {
  //   console.log(hacker1[i].toUpperCase());
  addName += hacker1[i].toUpperCase();
  addName += " ";
}
console.log(addName);

// 3.2

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
  //   console.log(hacker2[i]);
}
console.log(reverseName);

// 3.3

// if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
//   console.log("What?! You both have the same name?");
// } else {
//   for (let i = 0; i < hacker1.length; i++) {
//     if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()) {
//       console.log("The driver's name goes first.");
//       break;
//     } else if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase()) {
//       console.log("Yo, the navigator goes first, definitely.");
//       break;
//     } else {
//       if (hacker2[i + 1] == undefined) {
//         console.log("Yo, the navigator goes first, definitely.");
//         break;
//       }
//     }
//   }
// }

if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
  console.log("What?! You both have the same name?");
} else if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}

//!Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum turpis interdum iaculis cursus. Vestibulum vehicula dapibus libero, non bibendum nisl. Ut accumsan mi id mi pharetra pharetra. Nunc quis risus feugiat, malesuada purus sed, bibendum mauris. Aenean ac semper libero, eget lobortis justo. Maecenas quis felis quis dolor sodales dapibus eu ac leo. Mauris convallis diam id libero placerat feugiat. Cras sed elementum ligula. Pellentesque quis suscipit felis. Aenean accumsan, tortor pharetra dignissim pretium, nulla ligula euismod ipsum, eget venenatis nibh nunc vitae felis. Donec et odio vitae nisl interdum scelerisque et id neque.

Donec suscipit faucibus sagittis. Nunc imperdiet ipsum mauris, vel tincidunt velit efficitur sed. Sed vel sem ex. Nam pulvinar, massa quis maximus laoreet, turpis tortor gravida urna, ut lobortis arcu sapien eget metus. Suspendisse fringilla nibh sed ultrices euismod. Praesent non congue metus, sed fringilla libero. Aliquam odio dolor, faucibus porttitor pharetra sed, mollis et elit. In blandit sit amet mauris sed ullamcorper. Vivamus ultricies lacus sed lectus porttitor rhoncus. Phasellus tempor blandit enim, at dignissim arcu vulputate ac. Suspendisse semper lacus nec felis pretium, eu suscipit purus consectetur. Maecenas vestibulum neque vitae mi euismod, a sodales lorem aliquet. Etiam sit amet eros eget mi luctus pulvinar. Quisque euismod dolor nunc, vel imperdiet metus efficitur eget. Aenean at mi eget elit sagittis mollis. Praesent mollis tortor non lacus viverra molestie.

Aenean lacinia lectus turpis, et ultricies diam malesuada quis. Ut ornare odio sit amet diam ullamcorper, vel eleifend augue tincidunt. Etiam efficitur tortor in interdum aliquet. Morbi egestas odio et elementum porta. Integer dapibus leo efficitur turpis ultrices tristique. Donec urna mauris, rhoncus eget tellus sit amet, posuere sodales nisi. Sed commodo finibus facilisis. Nulla molestie neque vel orci aliquam ornare. Nullam nec odio metus. Fusce euismod neque tortor, et malesuada ex suscipit in.`;

function countWords(str) {
  //  const palabras = parrafo.trim().split(/\s+/);
  //parrafo.replace(/\s+/g, ' ').trim()
  //   console.log(str.split(/\s+/));
  let words = str.split(/\s+/).length;

  return words;
}
console.log(countWords(longText));

function countEt(str) {
  let eT = 0;

  for (let i = 0; i < str.length; i++) {
    let str4Char = str[i] + str[i + 1] + str[i + 2];

    if (str4Char === " et") {
      if (str[i + 3] === " " || str[i + 3] === "." || str[i + 3] === ",") {
        eT++;
      }
    }

    // if(str[i] + str[i+1] + str[i+2] + str[i+3] === " et " || str[i] + str[i+1] + str[i+2] + str[i+3] === " et." || str[i] + str[i+1] + str[i+2] + str[i+3] === " et,")
    // const = str.includes("et" , "et." , " et ");
    //   console.log(`{et[i]}`)
  }
  return eT;
}

console.log(countEt(longText));

//! Bonus 2
let phraseToCheck = "Was it a car or a cat I saw?";

function verifyPalindrome(str) {
  //! cleanPhrase
  let cleanPhrase = "";
  let notThisCharacter = [" ", ",", "!", ".", ":", "-", "?", "_"];
  for (i = 0; i < str.length; i++) {
    if (notThisCharacter.includes(str[i])) {
      continue;
    } else {
      cleanPhrase += str[i].toLowerCase();
    }
  }

  //!reverse
  let reversePhrase = "";

  for (i = cleanPhrase.length - 1; i >= 0; i--) {
    reversePhrase = reversePhrase + cleanPhrase[i]; // reversePhrase += cleanPhrase[i]
  }
  //   console.log(reversePhrase);
  if (reversePhrase === cleanPhrase) {
    return "It's a palindrome";
  } else {
    return "It's not a palindrome";
  }
}
console.log(verifyPalindrome(phraseToCheck));
