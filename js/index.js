console.log("I'm ready");

// Iteration 1: Names and Input
let hacker1 = 'Greg';
console.log (`The driver's name is ${hacker1}`);
let hacker2 = 'Carlos';
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driver = hacker1.length;
let navigator = hacker2.length;

if (driver > navigator){
    console.log (`The driver has the longest name, it has ${driver} characters.`);
} else if (navigator > driver){
  console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`);
} else {
  console.log(` Wow, you both have equally long names, ${driver} characters!`);
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const upperCase = [hacker1.toUpperCase()];

for (i = 0; i < upperCase.length; i++){
    console.log(upperCase[i]);
}//not sure how to get spaces, I think it needs an Array?

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
//not sure...

//3.3 Depending on the lexicographic order of the strings, print:
//not sure
if (hacker1 > hacker2){
console.log (`The driver's name goes first.`);
} else if (hacker2 > hacker1){
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`)
}

//Bonus 1
let loremString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nullam vel sapien eget nunc convallis elementum vitae id sem. In aliquet tincidunt tempor. 
Phasellus scelerisque elementum magna, eget dapibus massa elementum in. Nulla mattis, quam id posuere
 euismod, risus lorem cursus nisi, ac finibus arcu eros a sem. Duis convallis elit at eros pellentesque, 
 mattis elementum nulla vehicula. Nam varius urna suscipit ipsum fringilla feugiat. Donec luctus quis enim in iaculis. Vestibulum sed lacus eu lacus ultrices molestie. Pellentesque finibus porta lectus eu pretium. Duis eu malesuada diam.

Donec erat turpis, commodo eget enim et, vulputate tincidunt erat. Aliquam egestas lectus vitae dolor commodo, 
vel consequat ipsum blandit. Integer sed varius dui, id aliquam arcu. Suspendisse lobortis at eros eget tincidunt.
 Curabitur dapibus tortor eu ante malesuada tincidunt. Vestibulum volutpat sapien ut orci fringilla eleifend. Aliquam
  erat volutpat. Pellentesque in viverra orci. Sed vestibulum diam vitae arcu gravida, id semper purus porttitor.

Vestibulum augue arcu, sollicitudin id neque id, volutpat vulputate ante. Nam quis semper mi, ut ullamcorper 
lacus. Nunc et congue dolor. Morbi sollicitudin dui ut urna porta condimentum. Nunc egestas lectus in nisl tincidunt 
auctor. Vestibulum aliquam ultricies tristique. Mauris placerat augue eu justo hendrerit, vel tempus massa blandit. 
Nam hendrerit erat imperdiet enim tempor semper. Nam tincidunt at nibh ac rhoncus. Sed aliquet magna ut nibh elementum dictum. Vestibulum porttitor faucibus felis non sodales. Aenean quis vehicula
 felis. Ut pulvinar egestas ligula, sit amet tincidunt lectus aliquet vel.';

 //COUNT THE NUMBER OF WORDS IN THE STRING
 //I got it to count characters, not sure how to enter spaces between the iterations to count words?
 let counter = 1;

 while (counter <= loremString.length){
   console.log(counter);
   counter += 1;
 } 

 //COUNT THE NUMBER OF TIMES 'et' APPEARS
//???
for (let i = 1; i <= loremString.length; i++){
    if (i =! 'et'){
      continue;
    }
      console.log(i);
    }
  
 //Bonus 2
 
 let phraseToCheck = '';

 //?????