// Names and Input

const hacker1 = 'Marilyn';
console.log(`the drivers name is ${hacker1}`);

const hacker2 = prompt('what is your name?');
console.log(`the navigators name is ${hacker2}`);

const longestName = (driver, navigator) => {
  if (driver.length > navigator.length) {
    alert(`The driver ${driver} has the longest name, it has ${driver.length} characters`);
  } else if (navigator.length > driver.length) {
    alert(`Yo, navigator ${navigator} got the longest name, it has ${navigator.length} characters`);
  } else if (driver.length === navigator.length) {
    alert('What?! You both got the same name?');
  }
};

longestName(hacker1, hacker2);

const reverseName = hacker2.split('').reverse('').join('');

const nameInCapitals = hacker1.toUpperCase().split('').join(' ');

alert(`${nameInCapitals} ${reverseName}`);

// https://github.com/marilyn-n/lab-javascript-basic-algorithms

// 8 .Depending on the lexicographic order of the strings, print:

// The driver's name goes first
// Yo, the navigator goes first definitely
// What?! You both got the same name?
