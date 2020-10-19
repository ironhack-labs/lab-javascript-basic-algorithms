
//Iteration 1 : Names and INput

var hacker1 = 'Irene';
console.log(`The driver's name is ${hacker1}.`);

var hacker2 = 'Allison';
console.log(`The navigator's name is ${hacker2}.`);

//Iteration 2 : Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// var spacedName = hacker1.split('').join(' ');
// var capitalizedName = spacedName.toUpperCase();
// console.log(capitalizedName);

//Iteration 3 : Loops

//3.1
var newName1 = '';

for (i = 0; i < hacker1.length; i++) {

  capitalizeChar = hacker1.charAt(i).toUpperCase();
  newName1 += capitalizeChar + ' ';
}
console.log(newName1);

//3.2

var newName2 = '';

for (i = hacker2.length - 1; i >= 0; i--) {
  newName2 += hacker2.charAt(i);
}
console.log(newName2);

//3.3

var longerWord = '';
if (hacker1.length > hacker2.length) {
  longerWord = hacker1;
} else if (hacker1.length < hacker2.length) {
  longerWord = hacker2;
} else {
  longerWord = hacker1;
}

for (let i = 0; i < longerWord.length; i++) {
  if(hacker1[i] === hacker2[i]) {
    continue;
  } else if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else {
    console.log("What?! You both have the same name?");
    break;
  }
}

//Bonus 1

var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare nec augue vitae congue. Phasellus quis iaculis massa, nec tincidunt sapien. Pellentesque eros libero, facilisis nec neque ac, convallis gravida ante. Mauris nec aliquet eros. Etiam at urna vitae neque tincidunt ultrices sed rhoncus mi. Vivamus interdum diam eros, sed condimentum lorem auctor sit amet. Aliquam aliquet velit vitae urna commodo, a condimentum ex posuere.Cras congue at nibh iaculis eleifend. Proin commodo mattis nisl, non lobortis ex pretium vel. Phasellus ac bibendum est, eu facilisis mauris. Aenean non varius velit. Ut aliquam ligula justo, in ultrices purus imperdiet eget. In vestibulum, dui at hendrerit fermentum, nibh dolor ornare dui, sit amet pharetra ex ligula ut nisi. Donec elementum quam quis ultrices egestas. Maecenas commodo neque felis, sed vestibulum nunc pulvinar vitae. Curabitur nibh risus, lobortis eu turpis id, fringilla semper odio. Sed ac justo lectus. Nam et mauris ut ante eleifend egestas sagittis vitae nibh. Nullam viverra tortor vel posuere venenatis. Sed ut turpis viverra, vehicula massa nec, lobortis risus. Curabitur pulvinar sagittis felis, vel blandit enim dapibus eu. Aenean fermentum nisl sit amet imperdiet cursus. Phasellus eu sollicitudin neque, non suscipit orci. Fusce at eleifend sapien, ut hendrerit risus. Aliquam erat volutpat. Quisque porta purus mattis interdum egestas. Duis tristique purus sed convallis laoreet. Etiam accumsan luctus nulla et condimentum. Duis ullamcorper massa sed nisi finibus, nec ullamcorper ante scelerisque. Pellentesque sed tellus a sapien posuere hendrerit. Nullam sed augue nibh. Pellentesque lacinia arcu eu tempor auctor. Vestibulum dapibus purus nec nulla lacinia, sit amet malesuada enim volutpat.";

var words = paragraphs.split(' ');
var wordCount = words.length + 1;
console.log(wordCount);

var etOccurence = 0;

for (i = 0; i < words.length; i++) {
  var word = words[i];
  if (words[i].includes('et')) {
    etOccurence = etOccurence + 1;
  } else {
    continue;
  }
}

console.log(etOccurence);

//Bonus 2

var phraseToCheck = "A man, a plan, a canal, Panama!";

var newPhrase = '';

for (i = 0; i < phraseToCheck.length; i++) { 
  if (phraseToCheck[i] !== ' ' && phraseToCheck[i] !== '!' &&phraseToCheck[i] !== '?' && phraseToCheck[i] !== ',' && phraseToCheck[i] !== '.') {
    newPhrase += phraseToCheck[i];
  }
}

var reversedPhrase = '';

for (i = newPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += newPhrase.charAt(i);
}

if(newPhrase.toLowerCase() === reversedPhrase.toLowerCase()) {
  console.log("It's a palindrome!");
} else {
  console.log("it's not a Palindrome!")
}


