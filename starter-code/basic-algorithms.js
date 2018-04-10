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
