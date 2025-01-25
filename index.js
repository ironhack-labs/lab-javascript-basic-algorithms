// Iteration 1: Names and Input
const hacker1 = "Luke";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Kainat";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// if(hacker1.length>hacker2.length){
//     console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
// } else if (hacker1.length<hacker2.length) {
//   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
// } else {
//   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// }

switch (true) {
  case hacker1.length > hacker2.length:
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    break;
  
  case hacker1.length<hacker2.length:
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    break;

  default:
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

// 3.1
//we need an empty string where everything will be printed - otherwise each iteration will be printed on a seperate line
let result = "";
//we need a loop to do the same action for as long as we need
for (let i = 0; i <= hacker1.length; i++) {
  //if (i < 3)
  if (i<hacker1.length -1) 
  //make 'result' print out a letter plus a space
    {result += `${hacker1[i]} `;
  } 
  //if (i < 4)
  else if (i<hacker1.length) 
  //make 'result' print out a letter plus wihout a space
    {result += `${hacker1[i]}`;
  }
}

//print / capitalise everything
console.log(result.toUpperCase());
//to make sure there's no space after the final character
console.log(result.length)


// 3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.

//we need an empty string where everything will be printed as one - otherwise each iteration will be printed on a seperate line
let backwards = "";
//we need a loop to do the same action for as long as we need
for (j = hacker2.length -1; j >= 0; j--) {
  backwards += hacker2[j];
}
console.log(backwards);


//   3.3 Depending on the lexicographic order of the strings, print: 
/*
Abby
Amelia
Amy
*/

// - `The driver's name goes first.` <br>
// - `Yo, the navigator goes first, definitely.` <br>
// - `What?! You both have the same name?`
//.localeCompare --> -1 === name comes before || 0 === no difference || 1 === name comes after

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker2.localeCompare(hacker1) === -1) {
  console.log(`Yo, the navigator goes first, definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

//Bonus 1: Go to the [lorem ipsum generator](http://www.lipsum.com/) website and:

  // - Generate 3 paragraphs. Store the text in a new string variable named `longText`.
  // - Make your program count the number of words in the string.
  // - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus quis nisl consectetur dictum. Cras rhoncus vehicula iaculis. Maecenas vitae malesuada neque. Vivamus sit amet purus ipsum. Nullam id ligula consequat, fringilla ipsum at, molestie sem. In posuere aliquam nulla vel bibendum. Fusce consequat consectetur tortor, et vehicula dolor convallis molestie. Quisque bibendum leo a tincidunt bibendum. In pellentesque egestas lorem, et commodo enim aliquam ut. Donec fermentum, odio ac rhoncus lobortis, felis lorem euismod erat, consectetur facilisis metus leo at odio. Aliquam quam enim, dapibus quis ipsum nec, condimentum tincidunt velit. Nulla ornare gravida enim, eu imperdiet magna feugiat tempor. Aenean sit amet massa lacinia, luctus tortor eu, lobortis enim. Nulla et rutrum lorem. Nulla rhoncus, quam sed ornare faucibus, nunc ipsum aliquam sem, eu gravida lacus turpis in lectus. Donec eget commodo orci. Donec gravida in neque aliquet mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla pharetra condimentum. Nulla vel lorem vitae augue lacinia tincidunt. Mauris scelerisque nulla sed fringilla viverra. Sed malesuada vehicula purus quis feugiat. Sed pretium viverra mi ac rutrum. Vestibulum tristique massa eget cursus sollicitudin. Quisque varius eu diam a congue. Pellentesque nec libero a ipsum malesuada blandit. Donec lobortis efficitur tortor, in hendrerit lectus euismod id. Vivamus vitae ultrices sapien. Sed feugiat ex eget sem euismod, sit amet placerat neque pulvinar."

// .split() --> omits a particular character written between the two brackets
// .length --> counts the number of spaces which are omitted
let wordTotal = longText.split(" ").length;

console.log(wordTotal);

//loop with i<longText.length
let etCount=0;
for (i = 0; i < longText.length; i++) {
  if(longText[i-1] ===" " && longText[i]==="e" && longText[i+1] ==="t" && (longText [i+2] ==="," || longText[i+2] ===" " || longText[i+2] ===".")){
    etCount++;
  }
}
console.log(etCount);


