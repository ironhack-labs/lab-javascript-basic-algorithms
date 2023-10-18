// Iteration 1: Names and Input
let hacker1 = 'Vidisha'; // driver
console.log('The driver`s name is ' + hacker1);

let hacker2 = 'Marat'; // navigator
console.log('The navigator`s name is ' + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let driversNameUppercase = '';
for (let i = 0; i < hacker1.length; i++) {
  driversNameUppercase += hacker1[i].toUpperCase() + ' ';
}
console.log(driversNameUppercase);

let navigatorsNameReversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorsNameReversed += hacker2[i];
}
/* another possibility
for (let i = 0; i < hacker2.length; i++) {
  navigatorsNameReversed += hacker2[hacker2.length - 1 - i];
}
*/
console.log(navigatorsNameReversed);

// As I understand sort() uses lexicographic order. Could also be used with localeCompare()
let names = [hacker1, hacker2];
if (hacker1 == hacker2) {
  console.log('What?! You both have the same name?');
} else if (names.sort()[0] == hacker1) {
  console.log("The driver's name goes first.");
} else if (names.sort()[0] == hacker2) {
  console.log('Yo, the navigator goes first, definitely');
}

// Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus mi quis sem scelerisque, sed egestas augue malesuada. Integer luctus sagittis arcu, eu laoreet dolor. Sed hendrerit cursus vehicula. Maecenas posuere quam mattis finibus tristique. Aliquam blandit elementum nisl sed sagittis. Quisque commodo augue orci, et sodales elit egestas aliquet. Aenean vulputate quam nec libero elementum, id luctus libero mollis. Aliquam vestibulum sem ut sagittis ultrices. Sed ut aliquam metus.

Aenean et eros odio. Curabitur aliquet nisi orci, ac laoreet orci eleifend at. Integer et justo et sapien lobortis suscipit vel id nisi. Vestibulum vel sem et eros maximus cursus eget accumsan libero. Vestibulum blandit ante vitae urna rhoncus posuere. Quisque ornare lacus id odio tempor, at consectetur ante finibus. Aliquam aliquam, purus et auctor mattis, ex justo tempus nibh, et auctor urna justo ac nisi. Fusce ultricies orci elit, non fermentum velit vulputate in. Phasellus viverra, velit eu ornare rutrum, urna enim ultricies metus, et tincidunt justo sem in ante.

Aliquam accumsan, ante eget egestas iaculis, nunc dui commodo massa, sit amet convallis arcu diam et felis. Vivamus eu euismod libero, a sollicitudin felis. Suspendisse vitae diam vitae orci maximus condimentum. Donec id ligula dapibus, ultrices nunc volutpat, euismod dui. Suspendisse eleifend ac erat et fermentum. Cras mollis ligula non iaculis iaculis. Curabitur porttitor tincidunt arcu at sollicitudin. Vivamus non aliquam neque. Nulla eget lobortis magna, maximus finibus tortor. Integer eget magna vel nulla varius rhoncus.`;

let words = longText.split(' ');
console.log(`Number of words in the long text: ${words.length}`);

// Bonus 2:
function checkPalindrome(phraseToCheck) {
  let result = false;
  // get the middle
  // check from both sides
  let middle = 0;
  let startToMiddle = '';
  let endToMiddle = '';
  if (phraseToCheck.length % 2 == 0) {
    middle = (phraseToCheck.length - 1) / 2;
    startToMiddle = phraseToCheck.slice(0, middle + 1);
    endToMiddle = phraseToCheck.slice(-middle - 1);
  } else if (phraseToCheck.length % 2 == 1) {
    middle = (phraseToCheck.length - 1) / 2;
    startToMiddle = phraseToCheck.slice(0, middle);
    endToMiddle = phraseToCheck.slice(-middle);
  } else {
    return 'Something went wrong.';
  }
  // to reverse the endToMiddle doing it per hand since we should not use reverse() or others
  let endToMiddleReversed = '';
  for (let i = endToMiddle.length - 1; i >= 0; i--) {
    endToMiddleReversed += endToMiddle[i];
  }
  /*
  console.log(`Middle: ${middle}`);
  console.log(`Start to middle: ${startToMiddle}`);
  console.log(`End to middle: ${endToMiddle}`);
  console.log(`End to middle reversed: ${endToMiddleReversed}`);
  */
  result = startToMiddle == endToMiddleReversed;

  return result;
}

console.log(checkPalindrome('A man, a plan, a canal, Panama!'));
console.log(checkPalindrome('Amor, Roma"'));
console.log(checkPalindrome('race car'));
console.log(checkPalindrome('stack cats'));
console.log(checkPalindrome('step on no pets'));
console.log(checkPalindrome('taco cat'));
console.log(checkPalindrome('put it up'));
console.log(
  checkPalindrome(`Was it a car or a cat I saw?" and "No 'x' in Nixon`)
);
