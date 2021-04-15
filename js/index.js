// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = "Gonzalo";

// 1.2 Print `"The driver's name is XXXX"`.

console.log (`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Paula";

// 1.4 Print `"The navigator's name is YYYY"`. */

console.log (`The navigator's name is ${hacker2}`); 

// Iteration 2: Conditionals

/*2.1. Depending on which name is longer, print:

- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length){
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
else if (hacker1.length < hacker2.length){
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
else{
  console.log (`Wow, you both have equally long names, ${hacker1} characters!`);
  }

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

for (character of hacker1) {
  console.log(character.toUpperCase())
  }

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

for (character = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[character]);
  }

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

if (hacker1 < hacker2){
    console.log(`The driver's name goes first.`);
  }
else if (hacker1 > hacker2){ 
    console.log(`Yo, the navigator goes first definitely`);
  }
else{
    console.log(`What?! You both have the same name?`);
  }

/* Bonus Time!
    Bonus 1:
    Go to lorem ipsum generator and:
    
    Generate 3 paragraphs. Store the text in a variable type of string.
    Make your program count the number of words in the string.
    Make your program count the number of times the Latin word et appears.*/

let loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, elit vel porta feugiat, eros dui viverra est, sit amet tempus purus justo et massa. Vestibulum dictum nisi eu vulputate aliquam. Phasellus suscipit eleifend lorem eu feugiat. Morbi tincidunt erat nec massa accumsan, sit amet semper nunc tempus. Morbi quam nisi, finibus quis viverra eget, fringilla malesuada dolor. Nulla at dui id ipsum hendrerit fermentum eu a tellus. Quisque et turpis sed ante vehicula sagittis eget sed quam. Praesent convallis nisl eget tincidunt egestas. Vestibulum aliquam dolor eu auctor pretium. Pellentesque tincidunt nulla sed congue facilisis. Pellentesque sem justo, imperdiet ut justo sed, suscipit dapibus arcu. Nam pellentesque nulla ac semper auctor. Nam blandit odio ac metus pharetra euismod. Fusce mattis lectus in est fringilla, eget scelerisque est suscipit. Maecenas in nisi sit amet risus dapibus posuere.

Nunc pharetra, mi ac consectetur tristique, nulla mauris consectetur est, ac consequat quam felis in risus. Aliquam malesuada odio sit amet volutpat lobortis. Proin pellentesque ex ac augue facilisis scelerisque. Morbi congue mattis tempor. In tincidunt tristique hendrerit. Quisque non enim eu purus tincidunt lacinia. Pellentesque ut eros eget metus pellentesque auctor id a ipsum. Cras ac diam blandit, tristique dolor id, ullamcorper magna. Quisque enim est, tristique et pellentesque sit amet, maximus eget nulla. Suspendisse non ante nisi.

Vestibulum luctus, dui dapibus lacinia vulputate, lorem enim consequat erat, eget gravida dui dolor eget lectus. Integer nec egestas eros. Nam eu nisl nisi. Mauris lacus elit, dapibus ut aliquam eu, aliquet sit amet eros. Proin quis mauris pretium, egestas justo ut, imperdiet risus. Nulla suscipit feugiat mi sed volutpat. In luctus, neque sit amet fringilla varius, nulla tellus tristique dui, sed semper tortor turpis laoreet est. Sed pellentesque diam ac massa tempus, et imperdiet ligula iaculis. Proin nec diam quis orci mattis pharetra. Phasellus ultrices ullamcorper quam, id consectetur mi dapibus sed. Integer rutrum lobortis velit accumsan elementum. Suspendisse potenti."