// Incomplete Group Assignment - Pair Programming
// Driver - Ruben Vargas
// navigator - Richard


// Names and Input
var hacker1 = 'ruben';
console.log("The driver's name is " + hacker1);

var hacker2 = prompt('What is your name?');
console.log('The navigators name is ' + hacker2);

//Conditionals

function compareLength() {
  if (hacker1.length > hacker2.length) {
    console.log(
      'The Driver has the longest name, it has' + hacker1.length + 'characters'
    );
    return 1;
  } else if (hacker1.length < hacker2.length) {
    console.log(
      'Yo, navigator got the longest name, it has ' +
      hacker2.length +
      ' characters'
    );
    return 2;
  } else {
    console.log(
      'wow, you both got equally long names, ' + hacker2.length + 'characters!!'
    );
  }
}

compareLength();

function capitalSpace(hacker1) {
  hacker1 = hacker1
    .split('')
    .join(' ')
    .toUpperCase();
  return hacker1;
}

function reverse(hacker2) {
  return hacker2
    .split('')
    .reverse()
    .join('');
}

if (compareLength() === 1) {
  var nameLength = hacker1.length;
}
if (compareLength() === 2) {
  var nameLength = hacker2.length;
}


capitalSpace(hacker1);
reverse(hacker2);

// Lorem ipsum generator