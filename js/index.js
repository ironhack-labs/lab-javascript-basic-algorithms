var hacker1 = "Anojan";
console.log("The driver's name is " + hacker1);
var hacker2 = "Victorien";
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

var space = ' ';
var h1Caps = hacker1.toUpperCase();
var h2Caps = hacker2.toUpperCase();
var nameFinal = '';

for (let i = 0; i < hacker1.length; i++ ) {
  nameFinal += h1Caps[i]+space;
}
console.log(nameFinal.slice(0, -1));

var nameReverse = '';
for (i = hacker2.length - 1; i >= 0; i--) {
  nameReverse += hacker2[i];
}
console.log(nameReverse);




for (i = 0; i < h1Caps.length; i++) {
  if (h1Caps[i] < h2Caps[i]) {
    console.log(`The driver’s name goes first.`);
    break;
    } else if (h1Caps[i] < h2Caps[i]) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
    } else {
    console.log(`What?! You both have the same name?`);
    break;
    }
}

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mattis elit, sit amet tincidunt lorem euismod ut. Morbi lobortis, turpis quis semper semper, eros nisl venenatis nulla, at egestas erat orci id elit. Proin vitae libero vel diam tincidunt viverra ut eu nulla. Sed bibendum posuere neque sed pretium. Ut ut suscipit lorem. Curabitur sed ultricies dolor. Phasellus sem quam, convallis at sagittis non, convallis at sapien. Nullam varius dolor in semper finibus. Aenean pulvinar ante ut leo pretium, id auctor sem elementum. In tortor dolor, semper ac quam sit amet, pharetra finibus erat. Duis tempus faucibus lacinia. Mauris finibus nisl massa, vitae finibus ante luctus a. Integer at pretium tellus. Aliquam erat volutpat. Sed suscipit egestas leo at imperdiet. Quisque suscipit ex a mi placerat, id hendrerit orci pharetra. Aenean et enim enim. Vivamus ornare eros ipsum, sit amet porta odio pellentesque ut. Quisque imperdiet eu quam sed eleifend. Integer ac congue purus. Nam scelerisque purus eu velit blandit volutpat. Sed pharetra in felis quis aliquam. Nullam eu lorem tincidunt, consectetur ligula eu, dictum lorem. Donec tempus lorem metus, id viverra lectus maximus a. Nam vitae malesuada elit. Phasellus hendrerit tortor purus, convallis placerat metus luctus a. Aenean fermentum sodales scelerisque. Donec condimentum id augue faucibus finibus. Donec gravida elit at consequat egestas. Praesent turpis felis, faucibus et blandit eu, gravida non purus. Aliquam volutpat sem purus, aliquet dictum dolor sagittis id. Duis luctus vitae metus sed accumsan. Sed sit amet faucibus orci, at condimentum sapien. Proin in eros lacus. Suspendisse vel metus non dui sollicitudin tincidunt viverra in urna. Ut rhoncus risus in odio ultricies, eu fringilla augue pharetra. Donec sagittis nibh sed lacus pulvinar placerat. In hac habitasse platea dictumst."
var wordCounter = 0;

for (var i = 0; i <= lorem.length; i++) {
    if (lorem.charAt(i) == ' ') {
      wordCounter++;
    }
}

console.log(wordCounter+1);

var numberEt = 0;
var stringSplit = lorem.split(" ");

function cleanWord(word) {
  return word.toLowerCase().replace(/\W/g, '');
}

for (i = 0; i < wordCounter; i++) {
  if (cleanWord(stringSplit[i]) === "et") {
    numberEt += 1;
  }
}

console.log(numberEt);

var phraseToCheck = "race car";
var phraseToCheckCleaned = cleanWord(phraseToCheck);
function cleanWord(word) {
  return word.toLowerCase().replace(/\W/g, '');
}
var checkCondition = phraseToCheckCleaned.length % 2 ? (phraseToCheckCleaned.length - 1) / 2 : phraseToCheckCleaned.length / 2;

for (i = 0, j= phraseToCheckCleaned.length - 1; i < checkCondition; i++, j-- ) {
    if (phraseToCheckCleaned[i] !== phraseToCheckCleaned[j]) {
        console.log(phraseToCheck + " => This is NOT a palindrome");
        break;
    } else { 
        console.log(phraseToCheck + " => This is a palindrome")
        break;
    }
}