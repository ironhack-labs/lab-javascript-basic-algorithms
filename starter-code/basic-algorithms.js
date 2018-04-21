// Names and Input

const hacker1 = 'Marilyn';
console.log(`the drivers name is ${hacker1}`);

const hacker2 = prompt('what is your name?');
console.log(`the navigators name is ${hacker2}`);

const longestName = (driver, navigator) => {
  let message;
  if (driver.length > navigator.length) {
    message = `The driver ${driver} has the longest name, it has ${driver.length} characters`;
  } else if (navigator.length > driver.length) {
    message = `Yo, navigator ${navigator} got the longest name, it has ${navigator.length} characters`;
  } else if (driver.length === navigator.length) {
    message = 'What?! You both got the same name?';
  }
  return message;
};

alert(longestName(hacker1, hacker2));

const reverseName = hacker2.split('').reverse('').join('');
const nameInCapitals = hacker1.toUpperCase().split('').join(' ');

alert(`${nameInCapitals} ${reverseName}`);


const lexicographicOrder = (driver, navigator) => {
  let message;
  if (driver > navigator) {
    message = `The driver's name goes first,${driver}`;
  } else if (driver < navigator) {
    message = `Yo, the navigator goes first, ${navigator}`;
  } else {
    message = 'What?! You both got the same name?';
  }
  return message;
};

alert(lexicographicOrder(hacker1, hacker2));

// Ask the user for a new string and check if it's a Palindrome

const driver2 = prompt('write a palindrome word!');

const palindromeWord = (driver) => {
  let message;
  const removeSpaces = driver.replace(/[^-a-z0-9]/ig, '').toLowerCase();
  const reverseString = removeSpaces.split('').reverse('').join('');

  removeSpaces === reverseString
    ? message = `${driver} its palindrome!`
    : message = `sorry ${driver} its not a palindrome`;

  return message;
};

alert(palindromeWord(driver2));

// Go to lorem ipsum generator and:

// Generate 3 parragraphs. Store the text in a String
// Make your program count the number of words in the string
// Make your program count the number of times the latin word etappears

const loremParagraph = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

const count = loremParagraph.match(/et/g).length;
console.log(count);
