// Names and Input

const hacker1 = 'Marilyn';
console.log(`the drivers name is ${hacker1}`);

const hacker2 = prompt('what is your name?');
console.log(`the navigators name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  alert(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
  alert(`Yo, navigator ${hacker2} got the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
  alert('What?! You both got the same name?');
}
