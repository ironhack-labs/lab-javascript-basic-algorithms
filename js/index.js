// Iteration 1: Names and Input

const hacker1 = 'Karl';

console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Sebastian';

console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 
  }


// Iteration 3: Loops

let finalName = "";

for (let i = 0; i < hacker1.length; i++) {
  finalName += hacker1[i].toUpperCase() + ' ';
}

console.log(finalName);

let reverseNavigator = "";

for (let i = hacker2.length-1; i >= 0; i--) {
  reverseNavigator += hacker2[i];
}

console.log(reverseNavigator);

let comparisonArray = [hacker1, hacker2];

comparisonArray.sort();

console.log(comparisonArray);

if (comparisonArray[0] == comparisonArray[1]) {
  console.log('What?! You both have the same name?');
} else if(comparisonArray[0] == hacker1) {
 console.log('The driver\'s name goes first');
} else {
   console.log('Yo, the navigator goes first definitely.');
}


//Bonus 1

let loremIp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu dui, pulvinar ac felis ut, dapibus eleifend ante. Ut viverra egestas lectus non malesuada. Cras aliquet eu nulla vitae laoreet. Morbi at purus nunc. In quis ligula at ipsum malesuada pretium in sed orci. Sed vel rhoncus est. Nullam varius auctor fringilla. Sed iaculis eget risus sit amet mattis. Donec molestie aliquet nulla sit amet placerat. Nunc ac leo mi. Fusce ut molestie nisl. Nunc molestie id libero et porttitor. Nullam in lectus non est sodales ultricies at in est. Sed nulla ex, convallis at elementum et, elementum in enim. Sed id dui libero. Etiam eget est vitae lorem suscipit eleifend. Fusce pretium ipsum in quam iaculis sagittis. Suspendisse vel sem vel erat fermentum imperdiet. Etiam aliquet tellus purus, at ultricies ligula malesuada id. In rhoncus nunc eget faucibus sollicitudin. Etiam sollicitudin volutpat enim, id consectetur mi tempor sed. Aenean in porttitor felis. Nam viverra auctor orci, et egestas enim faucibus quis. In consectetur lorem et nulla euismod, sed ornare ex placerat. Vivamus dapibus at purus quis fringilla. Etiam egestas urna lorem, sed elementum leo interdum eu. Aenean sit amet dolor magna. Vestibulum tempus vulputate enim non malesuada. Fusce tempus interdum mauris dapibus aliquam. Duis rhoncus tellus dolor, at rhoncus diam auctor nec. Curabitur pharetra sagittis gravida. Phasellus luctus, leo vel accumsan placerat, libero nisi lacinia nulla, ac ultricies nisi lectus id risus. Fusce elementum dolor aliquam lectus pellentesque posuere. Vivamus aliquet enim a justo eleifend ornare. Cras dapibus, tellus a ultrices vulputate, orci ligula ultricies nibh, ac pulvinar enim felis sed nibh. Suspendisse ac nibh non mauris rutrum eleifend."
let loremWords = loremIp.split(" ");
// console.log(loremWords.length);

let etCount = 0;

for (i = 0; i < loremWords.length; i++) {
    if (loremWords[i] == "et") {
        etCount += 1;
    }
}
console.log(etCount);

//Bonus 2

let phraseToCheck = "A b§cb,a";
// let compareStrings = phraseToCheck.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');

let spChar = "!§$%&/()=?_:-*,+'#>< "
let compareStrings = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    if (!spChar.includes(phraseToCheck[i])){
        compareStrings += phraseToCheck[i];
    }
}

compareStrings = compareStrings.toLowerCase();

console.log(compareStrings);

//check if compareString forward === compareString backward
let compareStringBackw = "";

for (let i = compareStrings.length-1; i >= 0; i--) {
    compareStringBackw += compareStrings[i];
  }
  
// console.log(compareStringBackw);

if (compareStrings === compareStringBackw) {
    console.log("We got ourselves an nice palindrome here!")
}
