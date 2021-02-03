console.log("I'm ready!");

/* Iteration 1: Names and Input
1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1 = "Aboubacar";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Makiko"
console.log(`The navigator's name is ${hacker2}`);

/* Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

/* Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */
function toCapitalize(name) {
  let capitalizedName = '';
  for (let i = 0; i < name.length - 1; i++) {
    capitalizedName += name[i].toUpperCase() + ' '
  };
  capitalizedName += name[name.length - 1].toUpperCase();
  return capitalizedName;
}

console.log(toCapitalize(hacker1));

function toReverse(name) {
  let reversedName = '';
  for (let i = name.length-1 ; i > -1; i-- ) {
    reversedName +=name[i]
  };
  return reversedName;
}

console.log(toReverse(hacker2));

console.log(hacker1.localeCompare(hacker2));

function whoGoesFirst (name1, name2) {
  if (name1.localeCompare(name2) < 0) {
    return `${hacker1} goes first.`
  } else if (name1.localeCompare(name2) > 0) {
    return `Yo, the navigator goes first definitely.`
  } else {
    return `What, you both have the same?`
  }
}

console.log(whoGoesFirst(hacker1, hacker2), "\n");

/* Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

let parOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet tincidunt tortor, quis porttitor purus tincidunt et. Donec sit amet placerat urna, quis egestas mi. Maecenas congue dolor odio. Nam eu mi metus. Nullam luctus fringilla metus, vel pretium eros rhoncus ac. Donec sagittis, velit sit amet auctor blandit, arcu justo maximus leo, et egestas ligula metus non nisi. Proin quis luctus ex. Nam erat lacus, tincidunt nec enim eu, posuere pulvinar nulla. Donec et elit et tortor dignissim porta nec eget felis. Curabitur maximus molestie neque, sit amet blandit est efficitur a. Duis ornare in diam a tristique. In non massa non sapien commodo blandit. Quisque tortor magna, tristique nec mauris id, eleifend varius purus. Curabitur erat urna, rutrum at nisl eu, malesuada eleifend lectus."

let parTwo = "Vestibulum posuere metus nec leo imperdiet, at efficitur turpis volutpat. Nullam consectetur sapien eu magna efficitur, vel volutpat mauris finibus. Donec eget pellentesque lectus. Ut scelerisque vehicula blandit. In hac habitasse platea dictumst. Nunc imperdiet a nulla nec pulvinar. Donec pretium ullamcorper purus, ac vehicula neque finibus non."

let parThree = "Suspendisse rhoncus elit tellus, et cursus felis auctor vitae et et et."

console.log(parThree.split(' '), "\n");

function countWords (paragraph) {
  let arrayOfWords = paragraph.split(" ");
  let countOfWords = 0;
  let countOfEt = 0;
  for (let i = 0; i < arrayOfWords.length; i++) {
    countOfWords += 1;
    if (arrayOfWords[i] === "et" || arrayOfWords[i] === "et." || arrayOfWords[i] === "et,") {
      countOfEt += 1;
    }
  }
  return `The paragraph has ${countOfWords} words and the latin word 'et' appears ${countOfEt} times in the paragraph`
};

console.log(countWords(parOne), "\n");
console.log(countWords(parTwo), "\n");
console.log(countWords(parThree), "\n");
