// Iteration 1: Names and Input
//1.1, 1.3
let hacker1 = "Johnny";
let navigator = "Smith"

//console.log("The driver's name is "+ hacker1);
//newer, but could cause problems on i.e. older TV-Browser-->
//1.2,1.4
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${navigator}`);

//----------------------------------------------------------------------------------------------------
// Iteration 2: Conditionals

if (hacker1.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } 
  else if (hacker1.length < navigator.length) {
    console.log(`The driver has the longest name, it has ${navigator.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// if i let them declared with "let" not const, in a real project
// you may think about it you have to proof they're Strings... like i.e
//if  (typeof hacker1 =="string" && typeof navigator =="string" && hacker1.length > navigator.length)

//----------------------------------------------------------------------------------------------------
// Iteration 3: Loops

//3.1
let helper = "";
for (let i=0; i<hacker1.length; i++){
  helper += hacker1[i].toUpperCase() +" ";
}
console.log(helper);


//3.2
console.log(hacker1.split("").reverse().join(""));

//or like above in 3.1, but: 
// helper = "";
// for (let i=hacker1.length-1; i>=0; i--){
//   helper += hacker1[i];
// }
// console.log(helper);


//3.3
myArr= ["The driver's name goes first.",
        "Yo, the navigator goes first definitely.",
        "What?! You both have the same name?"];

//3.3 short with method        
//console.log(myArr.sort());

//3.3 with loop
let helperArr=[];
for (let i=0; i<myArr.length; i++){
  for (let j=i; myArr[i] >= myArr[j];j++){
    helperArr[i] = myArr[j];
  } 
}
console.log(helperArr);

//----------------------------------------------------------------------------------------------------
//4.1 Bonus lorem
let lorys=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tristique lectus, sed faucibus nibh suscipit nec. Vivamus et dui porta sem scelerisque fermentum. Phasellus lacinia id massa non tempor. Nunc finibus ex ex, vitae gravida sem rutrum consectetur. Quisque nec augue dictum, iaculis lectus vel, porta orci. Sed porttitor sem nec lectus posuere porta. Aliquam fermentum lorem placerat placerat pharetra. Vivamus lobortis lectus sed tellus ultrices cursus. Quisque eu aliquam risus. Mauris sollicitudin tincidunt libero, at dictum neque. Sed a erat faucibus, tempor dolor ac, luctus velit. Ut facilisis aliquet metus, vel sagittis ante interdum ut. Duis nulla tellus, placerat non lacus in, luctus pellentesque nulla. Morbi at luctus nisl.

Quisque elementum nisi ac rhoncus sollicitudin. Fusce tortor augue, lobortis et purus nec, consectetur hendrerit est. Phasellus posuere sapien consectetur, lacinia lectus in, porttitor orci. Donec tortor velit, euismod ut tempor in, vehicula ac velit. Maecenas consequat venenatis cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ut iaculis nulla. Pellentesque sollicitudin urna in enim luctus, non faucibus tortor posuere.

Aliquam blandit orci ut mi mattis placerat. Etiam nibh ante, euismod a suscipit ut, rutrum non est. Pellentesque sed lacus sed tortor condimentum pretium non non ipsum. Maecenas efficitur gravida velit, nec fermentum nulla placerat at. Vestibulum mauris ipsum, porttitor nec odio a, finibus cursus tortor. Sed consectetur, ipsum venenatis aliquam pharetra, justo lacus semper nisl, eget imperdiet elit odio sit amet tellus. Vestibulum tempus feugiat ullamcorper. Vivamus odio odio, hendrerit ac aliquam eget, rhoncus eget lacus. Nullam vitae leo id massa venenatis pulvinar. Mauris quis gravida tellus. Cras bibendum, sapien non vulputate tempor, neque risus efficitur lectus, et aliquet nibh dolor vel neque.`;

//4.1 Bonus: count words with methods
//console.log("4.1 Bonus: word count: " + lorys.trim().split(" ").length);
//the HP says 281 not as mine 279..but works correct if i try to short lorys to 3-5 words
// +trim() if the string possibly could start/end with a/ blank(s)

//4.1 Bonus: count words with a loop

let helpCounter = 1;
//using i=1 & lorys.length-1 to avoid errors if the string starts/ends with an blank
//so if the loop finds the first blank there is already a word before, so helpCounter=1
for(let i=1; i < lorys.length-1; i++){
  if (lorys[i] === " ")
    helpCounter++;
}
console.log(`4.1 Bonus count words: ${helpCounter}`);





//4.2 Bonus: count "et" as single word(s) (not content of a word)
let extraCount=0;
  if(lorys.startsWith("et ")) {extraCount++}
  if(lorys.endsWith(" et"))   {extraCount++}
  //no else !!
console.log("4.2 Bonus count the word 'et': " + (lorys.split(" et ").length + extraCount));

//21times if you look after "et", don't forget the spaces " et " so it will be a word and not content of one (4times)
//add 1 or 2 if the string String.startWith("et ") or string String.endWith(" et")

//4.3 Bonus palyndrome check

//safe for just a single word or an even amount of words (2,4,6,...)
// let phraseToCheck="otto";
// if (phraseToCheck.split("").join() == phraseToCheck.split("").reverse().join()) {
//   console.log("4.3 Bonus is palyndrome: " + phraseToCheck + " is a palyndrome");
// } else {
//   console.log("4.3 Bonus no palyndrome: " + phraseToCheck + " is no palyndrome");
// }


//this one is better (if you don't wan't to include special chars) so... -->
//remove all special Characters like ",.?=§&/(....." only allow latin alphabet (even without numbers 1,2,3,4,5...)
let phraseToCheck="stack cats";
for (let i=0; i<phraseToCheck.length; i++){
//  phraseToCheck = phraseToCheck.replace(/[^a-zA-Z]/g, '');
}
if    (phraseToCheck.replace(/[^a-zA-Z]/g, '').split("").join() 
    == phraseToCheck.replace(/[^a-zA-Z]/g, '').split("").reverse().join()) {
  console.log(`4.3 Bonus Palyndrome: "${phraseToCheck}" is a palyndrome`);
} else {
  console.log(`4.3 Bonus Palyndrome: "${phraseToCheck}" is no palyndrome`);
}


// notes
// 1. Iterations  : complete without special methods        -check
// 2. Conditionals: complete without special methods        -check
// 3. Loops: 3.1  : complete without special methods        -check
//           3.2  : complete without special methods (both) -check
//           3.3  : complete, missing "loop" solution(both) -check
// 4. Bonus Lorem : complete, missing "loop" solution       -half check
// 4. Bonus Paly..: complete, missing "loop" solution       -half check

// end notes