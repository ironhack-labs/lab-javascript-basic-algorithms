// Iteration 1: Names & Input

let hacker1 = "Julius Pontificus";
console.log("The driver's name is", hacker1);

let hacker2 = "Nerva Romanicus";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, the person has", hacker1.length, "characters");
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names,", hacker1.length ,"characters!");
} else{
    console.log("The navigator has the longest name, the person has", hacker2.length, "characters");
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " "));

// Reverse name

function reverseName(element) {
    let revName =  [...element].reduce((x, y) => y.concat(x));
    console.log(revName);
}

// Function call
reverseName(hacker2);

// Lexicographic order

if (hacker1 > hacker2){
console.log("The driver's name goes first");
} else if(hacker1 === hacker2)
{
console.log("What?! You both have the same name?");
} else {
console.log("Hey, the navigator goes first, definitely");
}

// Bonus

let longText = "Quis laboris esse consectetur ullamco id ex nulla do duis consequat laborum. Occaecat id ut non ullamco. Labore magna veniam deserunt ut. Laborum officia esse cillum eu adipisicing consectetur. Ipsum ea labore pariatur elit do sit nisi. Reprehenderit quis proident sunt adipisicing officia magna excepteur. Velit proident quis irure sint cupidatat fugiat officia est velit excepteur sit ad. Reprehenderit sit ea consequat cupidatat Lorem occaecat nostrud eiusmod dolore incididunt do tempor aliqua quis. Lorem aliqua sit sit eu. Tempor qui dolore et id deserunt duis officia. Reprehenderit fugiat in reprehenderit cillum ipsum Lorem ipsum esse laboris mollit reprehenderit. Eiusmod voluptate veniam labore do esse voluptate consequat sit est duis est aliquip ut. Consectetur sunt elit incididunt pariatur labore exercitation sit in ut excepteur consequat anim reprehenderit. Excepteur Lorem fugiat fugiat duis sint amet. Adipisicing anim exercitation pariatur eu Lorem officia nostrud. Irure exercitation occaecat anim eu voluptate dolore qui tempor adipisicing.";

console.log(longText);

// Solution with methods

function wordCount(word) {
    let wordArray = word.trim().split(/\s+/);
    return wordArray.length;
}

// Solution without advanced methods

console.log("The word count is:" ,wordCount(longText));

function wordCounter(words) {
    let counter = 0;
    let checker = false;

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== ' ' && !checker) {
            counter++;
            checker = true;
        } else if (words[i] === ' ') {
            checker = false;
        }
    }

    return counter;
}

console.log("The word count is:" ,wordCount(longText));

// define a reusable function
function countEt(string, substring) {
    let n = 0;
    let position = 0;
    while (true) {
      position = string.indexOf(substring, position);
      if (position != -1) {
        n++;
        position += substring.length;
      } else {
        break;
      }
    }
    return n;
  }
  
  // test it
  console.log(countEt(longText, " et ")); 

  function palindromeCheck(expression) {
    let result = /[^A-Za-z0-9]/g;
    expression = expression.toLowerCase().replace(result, '');
    let extent = expression.length;
    for ( i = 0; i < extent/2; i++) {
      if (expression[i] !== expression[extent - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindromeCheck("A man, a plan, a canal. Panama"));

   let palindromes = [];
   palindromes[0] = "A man, a plan, a canal, Panama!";
   palindromes[1] = "Amor, Roma";
   palindromes[2] ="race car";
   palindromes[3] ="stack cats";
   palindromes[4] ="step on no pets";
   palindromes[5] ="taco cat";
   palindromes[6] ="put it up";
   palindromes[7] ="Was it a car or a cat I saw?";
   palindromes[8] = "No 'x' in Nixon";

palindromes.forEach((element) => {
        console.log(palindromeCheck(element))
    }
);