// Names and Input

//  Create a variable hacker1 with the driver's name

let hacker1 = ("Manu");

//  Print "The driver's name is XXXX"

console.log("The driver's name is " + hacker1);

//  Create a variable hacker2 and ask the user for the navigator's name

let hacker2 = prompt("What is your navigator name? ");

//  Print "The navigator's name is YYYY"

console.log("The navigator's name is " + hacker2);






//Conditionals


/*
  Depending on which name is longer, print:

  * The Driver has the longest name, it has XX characters or
  * Yo, navigator got the longest name, it has XX characters or
  * wow, you both got equally long names, XX characters!!

*/

if (hacker1.length > hacker2.length) {
    console.log(hacker1 + " got the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
    console.log(hacker2 + " got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names with " + (hacker1.length && hacker2.length) + " characters each one!!");
}

/* 
  Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
*/

// First attempt:

let nameOnCaps = hacker1.split('').join(' ');
console.log(nameOnCaps.toUpperCase());

// Second attempt using a "for" loop

let nameOnCaps2 = '';

for (let i = 0; i < hacker2.length; i++) {
    nameOnCaps2 += hacker2[i].toUpperCase() + ' ';
}


// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

let reverseName = '';
let i = hacker2.length;

for (i < hacker2.length; i >= 0; i--) {
    reverseName += hacker2[i];
}

console.log(reverseName);

// Second attempt using a Function

function newString(str) {

    let stringName = "";

    for (let i = str.length - 1; i >= 0; i--) {
        stringName += str[i];
    }
    return stringName;
}

console.log(newString(hacker2));


/* 
  Depending on the lexicographic order of the strings, print:
  
  * The driver's name goes first
  * Yo, the navigator goes first definitely
  * What?! You both got the same name?
  
*/

let a = 0;
let b = 0;

do {
    a++;
    b++;
    if (hacker1 > hacker2) {
        console.log('The driver´s name goes first');
    } else if (hacker1 < hacker2) {
        console.log('The navigator goes first definitely')
    } else {
        console.log('What?! You both got the same name?')
    }
} while (i > hacker2.length);





// Lorem ipsum generator


var textString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis, arcu maximus commodo dapibus, odio neque egestas arcu, eget tempus tellus urna eu dui. Sed suscipit tincidunt massa at rutrum. Vivamus vestibulum justo vitae sollicitudin convallis. Pellentesque malesuada iaculis nisi, id pretium tellus fermentum non. Sed iaculis quis turpis eu consectetur. Phasellus quis ipsum rutrum, hendrerit nunc id, dictum nulla. Proin dui erat, ultrices et consectetur id, luctus pretium nunc. Fusce sollicitudin ultricies cursus. Nulla feugiat augue quis turpis egestas mattis. Phasellus quam dui, mollis in volutpat sit amet, feugiat vel felis. Mauris lectus dui, gravida dapibus turpis sit amet, ornare pulvinar ante. Fusce commodo elit maximus risus porta, ac varius turpis vestibulum. Quisque finibus enim nunc, ac blandit est finibus sed."

"Donec condimentum lacinia varius. Duis vehicula justo vel pretium accumsan. Curabitur at tortor at ligula sodales auctor. Vestibulum elementum dapibus quam, ac interdum turpis egestas vel. Nam volutpat magna nulla, sed rhoncus lectus interdum non. Vestibulum imperdiet rhoncus nisl vel blandit. Sed pretium non eros bibendum eleifend. Curabitur in lobortis nisl. Cras hendrerit porta velit ut iaculis. Vestibulum bibendum dolor vitae leo semper venenatis. Integer in faucibus turpis. Suspendisse lorem sem, efficitur vitae eleifend sit amet, blandit eu felis. Cras a erat bibendum, placerat leo at, sodales nisi. Etiam elementum lacus mauris, a tempus ex cursus a. Mauris eget quam aliquam, elementum ante eu, ullamcorper leo. Quisque et libero orci."

"Donec sit amet augue arcu. Curabitur auctor facilisis mauris, vel ornare mi venenatis quis. Maecenas ut volutpat orci, vitae posuere ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer imperdiet tellus in posuere tempor. Donec sagittis nisl id lacus euismod sagittis. Vestibulum lacinia, sem in elementum semper, urna tellus iaculis nisl, eu commodo elit enim vel elit. Morbi lorem ex, tristique id pulvinar nec, accumsan ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vulputate justo eu libero iaculis, quis lobortis turpis aliquam. Proin dapibus sapien quis efficitur tempus. In a finibus mauris. Integer tincidunt neque ut dolor tincidunt tristique. Aenean vestibulum lacus leo, nec iaculis diam tempus sit amet. Sed blandit aliquet dignissim."

var paragraphString = textString.split(' ');
console.log(paragraphString.length);

letterCounter = 0;
for (var c = 0; c < paragraphString.length; c++) {
    if (paragraphString[c] === 'et') {
        letterCounter++;
    }
}
console.log(letterCounter);


/*
  Bonus Time!
  Ask the user for a new string and check if it's a Palindrome.
*/

var str = prompt('Tell me a word and I´ll check if it is a Palindrome');

function checkPalindrom(str) {
    var reversedStr = str.split("").reverse().join("");
    if (reversedStr === str) {
        return true;
    } else {
        return false;
    }
}
checkPalindrom('');

