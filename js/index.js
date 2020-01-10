console.log("I'm ready!");

// 1.1 Create a variable `hacker1` with the driver's name.

// 1.2 Print `"The driver's name is XXXX"`.

// 1.3 Create a variable `hacker2` with the navigator's name.

// 1.4 Print `"The navigator's name is YYYY"`.

// Iteration 1: Names and Input
let hacker1 = "Matteo"
let hacker2 = "Arnold"
  console.log('The driver\'s name is ' + hacker1 + '.');
  console.log('The driver\'s name is ' + hacker2 + '.');


// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);


if (hacker1.length > hacker2.length){
  console.log('The driver ' + hacker1 + 'has the longest name, it has ' + hacker1.lenght + 'characters')
} else if (hacker2.length > hacker1.length){
  console.log('It seems that the navigator ' + hacker2 + 'has the longest name, it has ' + hacker2.length + 'characters')
} else {
  console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!')
}

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Iteration 3: Loops


for (i=0; i<hacker1.length; i++) {
// let arr= [hacker1];
  console.log(hacker1[i].toUpperCase() + "\n");
}

for (i=0; i<hacker2.length; i++) {
// let arr= [hacker2];
  console.log(hacker2[i].toUpperCase() + "\n");
}

// Reverse name?
// hacker1 = hacker1.split("");
// hacker1 = hacker1.reverse();
// hacker1 = hacker1.join("");

let phrases = ["The driver\'s name goes first.", "Yo, the navigator goes first definitely.", "What?! You both have the same name?"];

phrases.sort();
console.log(phrases);

let lorem = (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo nunc, maximus id iaculis id, condimentum in leo. Nullam commodo, lectus vel pulvinar blandit, velit nulla tempus nisl, eget ullamcorper massa ante eu augue. Donec sit amet est felis. Maecenas magna felis, facilisis eget lacinia sed, vehicula non risus. Sed et scelerisque nibh. Aliquam sed finibus leo, vitae feugiat neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In nunc ex, tincidunt in molestie ut, tincidunt non metus. Phasellus nec lacinia libero. Nulla pretium lorem nunc, eu sollicitudin arcu commodo eu. Mauris nec augue ipsum. Curabitur ut porttitor justo. Sed sed felis vulputate, aliquam magna sit amet, pellentesque ex. Nunc vel mauris vel lectus auctor tristique et lobortis dolor. Integer finibus tempus lectus ac luctus. Mauris efficitur tempus justo.

Nam et gravida erat. Donec interdum lorem vitae nulla sagittis, at fringilla arcu rhoncus. Suspendisse fringilla neque posuere sapien aliquet faucibus. Quisque eu sapien suscipit, tempus ipsum vitae, luctus metus. Mauris ut dui non nulla facilisis ultricies at sit amet lectus. Sed vestibulum pellentesque pretium. Nulla at sapien ac odio porta efficitur.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In id porta ex, sit amet bibendum velit. In venenatis erat quis ultricies pharetra. Ut interdum hendrerit placerat. Proin ultrices at augue id mattis. Fusce sollicitudin blandit facilisis. Nulla ac leo sapien. Nunc vitae convallis nibh. Ut odio nisl, venenatis ut iaculis finibus, iaculis at eros. Sed in lacus lacus. Aenean facilisis ultricies tristique. Suspendisse ullamcorper erat non nisl ornare vulputate. Curabitur dignissim ante risus, sed tempor leo tempor et. Nulla vulputate suscipit varius.`);
console.log(lorem);

function wordCount(lorem) { 
  return lorem.split(" ").length;
}

console.log(wordCount(lorem));

let num_matches = lorem.match(/et/gi).length;
console.log(num_matches); 

// bonus 2

phraseToCheck ='radar'

for (i=0; i<phraseToCheck.palindrome; i++) {
  console.log(phraseToCheck[i]);
} if (phraseToCheck.palindrome === phraseToCheck.reverse) {
  console.log ('it\'s a palindrome!')
} else {
  console.log ('sad...')
}
