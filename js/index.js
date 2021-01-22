// Iteration 1: Names and Input

const hacker1 = 'Jorge';

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Keith';

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

function longestName(hackerName1, hackerName2) {
    let letterCount = 0;
    if (hackerName1.length === hackerName2.length) {
      return `Wow, you both have equally long names, ${hackerName1.length} characters!`;
    } else if (hackerName1.length > hackerName2.length) {
      letterCount = hackerName1.length;
      return `The driver has the longest name, ${letterCount} characters`;
    } else {
      letterCount = hackerName2.length;
      return `It seems that the navigator has the longest name, it has ${letterCount} characters.`;
    }
  }
  
  longestName(hacker1, hacker2);

// Iteration 3: Loops

function splitAndCapitalize(anyString) {
    let result = ' ';
    for (let i = 0; i < anyString.length; i++) {
      result += anyString[i].toUpperCase() + " ";
    }
    return result;
  }
  
  splitAndCapitalize(hacker1);
  
  function printReverse(anyName) {
    let result2 = ' ';
    for (let i = anyName.length -1; i >= 0; i--) {
      result2 += anyName[i];
    }
    return result2;
  }
  
  printReverse(hacker2);
  
  function lexicographicOrder(name1, name2) {
    if (name1 === name2) {
      return 'What?! You both have the same name?';
      } else if (name1 < name2) {
        return "The driver's name goes first.";
        } else {
          return 'Yo, the navigator goes first definitely.';
      }
  }
  
  lexicographicOrder(hacker1, hacker2);

  // Iteration 4: Bonus

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac ante lobortis, vulputate purus eleifend, sagittis mauris. Vivamus volutpat varius sagittis. In sed libero nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vulputate commodo commodo. Duis sollicitudin interdum libero at pellentesque. Sed sed blandit mauris. Integer eleifend velit at ligula lobortis, et pharetra turpis tincidunt. Suspendisse tempus vulputate elit et aliquet. Proin lacinia dictum leo at placerat. Donec quis turpis at mauris venenatis sagittis eget nec ligula. Nam lobortis quam vel scelerisque euismod. Pellentesque sodales id mauris quis porttitor. Donec felis mauris, pellentesque quis velit non, cursus convallis lectus. Quisque nec lorem nibh.
 
  Fusce non pellentesque metus, nec elementum quam. Suspendisse non leo nisl. Sed in ante non lectus tempus venenatis sit amet vel neque. Pellentesque sed interdum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent velit massa, rhoncus nec ante vitae, ornare dapibus risus. Nulla non diam vestibulum, consequat justo vel, bibendum nulla. Sed ac nibh vitae erat convallis lacinia. Nullam gravida justo nisi, sed aliquet ante pretium ut. Vestibulum eleifend ornare efficitur. Etiam at neque molestie, euismod ligula ut, tristique eros. Etiam eu est pulvinar, pellentesque enim ac, vestibulum libero. Curabitur sit amet nibh nibh.
   
  Aenean accumsan, leo vel pretium congue, metus nisl vulputate dui, eget lacinia massa elit id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut nibh metus, auctor sed felis sit amet, auctor rutrum est. Sed felis justo, dapibus sed risus hendrerit, malesuada finibus nunc. Morbi vulputate ante ante, vel auctor sapien luctus eget. Ut tincidunt, turpis non ultricies pulvinar, tellus est sagittis est, sed facilisis lacus risus id neque. Pellentesque eget est gravida felis suscipit commodo a feugiat mi. Nam arcu odio, luctus vel est non, aliquam blandit tellus. Sed hendrerit nibh nibh. Aenean ullamcorper ultrices mi id consectetur. Vivamus ornare quam tempus, volutpat nulla at, ultrices erat. Etiam in odio porta augue vehicula lobortis sit amet non massa. Proin finibus velit lectus, at posuere lectus facilisis sodales. Maecenas vulputate lacus leo, a vulputate quam vestibulum at.`;

  function countWords(longString, wordSearch) {
    let totalTimes = 0;
    let arrayOfWords = longString.split(' ');
    arrayOfWords.forEach(function(eachWord){
      if(eachWord === wordSearch){
        totalTimes +=1
      }
    })
    return totalTimes;
  }
  
  countWords(lorem, 'et');

let phraseToCheck = ;

function isItAPalindrome(somePhrase) {
  if (somePhrase == somePhrase.split('').reverse().join('')) {
    return 'true';
  } else {
    return 'false';
  }
}

isItAPalindrome(phraseToCheck);
// Works without syntax.  Once I add syntax then it always returns false.