// Iteration 1: Names and Input
//1.1, 1.3
let hacker1 = "Johnny";
let navigator = "Smith"

//console.log("The driver's name is "+ hacker1);
//newer, but could cause problems on i.e. older TV-Browser-->
//1.2,1.4
console.log(`1.1 Iteration Names and Input: The driver's name is ${hacker1}`);
console.log(`1.4 Iteration Names and Input: The navigator's name is ${navigator}`);

//----------------------------------------------------------------------------------------------------
// Iteration 2: Conditionals

if (hacker1.length > navigator.length) {
  console.log(`2.1 Conditionals: The driver has the longest name, it has ${hacker1.length} characters.`);
  } 
  else if (hacker1.length < navigator.length) {
    console.log(`2.1 Conditionals: The driver has the longest name, it has ${navigator.length} characters.`);
  } else {
    console.log(`2.1 Conditionals: Wow, you both have equally long names, ${hacker1.length} characters!`);
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
console.log(`3.1 Iteration Loops(loop)  : ${helper}`);


//3.2
console.log(`3.2 Iteration Loops(method): ${hacker1.split("").reverse().join("")}`);

//or like above in 3.1, but: 
helper = "";
for (let i=hacker1.length-1; i>=0; i--){
  helper += hacker1[i];
}
console.log(`3.2 Iteration Loops(loop)  : ${helper}`);


//3.3
myArr= ["The driver's name goes first.",
        "Yo, the navigator goes first definitely.",
        "What?! You both have the same name?"];

// 3.3 short with method      
console.log("3.3 Iteration Loops(method):");  
console.log(myArr.sort());

//3.3 with loop
let helperArr=[];
for (let i=0; i<myArr.length; i++){
  for (let j=i; myArr[i] >= myArr[j];j++){
    helperArr[i] = myArr[j];
  } 
}
console.log("3.3 Iteration Loops(loop):");
console.log(helperArr);

//----------------------------------------------------------------------------------------------------
//4.1 Bonus lorem
let lorys=`
Lorem ipsum dolor et et`;

//4.1 Bonus: count words with methods
console.log(`4.1 Bonus word cout(method) :  ${lorys.trim().split(" ").length}`);
//the HP says 281 not as mine 279..but works correct if i try to short lorys to 3-5 words
// +trim() if the string possibly could start/end with a/ blank(s)

//4.1 Bonus: count words with a loop

let helpCounter = 1;
//using i=1 & lorys.length-2 to avoid errors if the string starts/ends with an blank
//so if the loop finds the first blank there is already a word before, so helpCounter=1
for(let i=0; i < lorys.length-1; i++){
  if (lorys[i] === " ")
    helpCounter++;
}
console.log(`4.1 Bonus word count(loop)   : ${helpCounter}`);





//4.2 Bonus: count "et" as single word(s) (method)
let extraCount=0;
  if(lorys.startsWith("et ")) {extraCount++}
  if(lorys.endsWith(" et"))   {extraCount++}
  //no else !!
console.log("4.2 Bonus count the word 'et'(method): " + (lorys.split(" et ").length - 1 + extraCount));


extraCount=0;
if(lorys[0] + lorys[1] + lorys[2] === ("et ")) {extraCount++}
if(lorys[lorys.length-3] + lorys[lorys.length-2] + lorys[lorys.length-1] === (" et")) {extraCount++}
for(let i=1; i<lorys.length-2; i++){
  if(lorys[i] + lorys[i+1] + lorys[i+2] + lorys[i+3] === " et ") {extraCount++}
}
console.log("4.2 Bonus count the word 'et'(loop): " + extraCount);

//4.3 Bonus palyndrome check
//21times if you look after "et", don't forget the spaces " et " so it will be a word and not content of one (4times)
//add 1 or 2 if the string String.startWith("et ") or string String.endWith(" et")

//4.3 Bonus palyndrome check (methods)

//safe for just a single word or an even amount of words (2,4,6,...)
// let phraseToCheck="otto";
// if (phraseToCheck.split("").join() == phraseToCheck.split("").reverse().join()) {
//   console.log("4.3 Bonus is palyndrome: " + phraseToCheck + " is a palyndrome");
// } else {
//   console.log("4.3 Bonus no palyndrome(by word/even amount/loop): " + phraseToCheck + " is no palyndrome");
// }


//this one is better (if you don't wan't to include special chars) so... -->
//remove all special Characters like ",.?=§&/(....." only allow latin alphabet (even without numbers 1,2,3,4,5...)
let phraseToCheck="stack cats";
if    (phraseToCheck.replace(/[^a-zA-Z]/g, '').split("").join() 
    == phraseToCheck.replace(/[^a-zA-Z]/g, '').split("").reverse().join()) {
  console.log(`4.3 Bonus Palyndrome(method, phrase)(no special Characters counted):\n "${phraseToCheck}" is a palyndrome`);
} else {
  console.log(`4.3 Bonus Palyndrome(method, phrase):\n "${phraseToCheck}" is no palyndrome`);
}


//4.3 starting palyndrome check(loop)

phraseToCheck = "abc ot!!!to cba";
let filteredPhraseToCheck = "";
let filteredReversePhrase = "";

for (let i=0; i<phraseToCheck.length; i++) {
  if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) {
    filteredPhraseToCheck += phraseToCheck[i];
  }
}
for (let i = filteredPhraseToCheck.length - 1; i >= 0; i--) {
  filteredReversePhrase += filteredPhraseToCheck[i];
}
if (filteredPhraseToCheck === filteredReversePhrase) {
  console.log(`4.3 Bonus Palyndrome(loop, phrase)(no special Characters counted):\n "${phraseToCheck}" is a palyndrome`);
  } else {
  console.log(`4.3 Bonus Palyndrome(loop, phrase):}\n "${phraseToCheck}" is no palyndrome`);
  }
//using upperCase != lowerCase to exclude special Characters






// personal notes
// 1. Iterations         : complete without special methods        -check
// 2. Conditionals       : complete without special methods        -check
// 3. Loops: 3.1         : complete without special methods        -check
//           3.2         : complete (both)                         -check
//           3.3         : complete (both)                         -check
// 4.1 Bonus Lorem words : complete (both)                         -check
// 4.2 Bonus Lorem et    : complete (both)                         -check
// 4. Bonus Paly..       : complete (both)                         -check
// end notes


//first try for 4.3 (want to keep it)

// let phraseToCheck="st!!s";
// let toExcludeArr = ["!","\ ",
// ,"@","#","$","%","^","&","*","(",")","_",
// "+","\\","-","\=","[","]",",","{","}",";","'",
// "+",":","|",",",".","<",">","/","?"]
// // boring, but better exclude all special Characters for those people not using the latin alphabet
// // note: here i keept the numbers,0,1,2,3

// let filteredPhraseToCheck= "abc";
// //start value to check log.c
// console.log(filteredPhraseToCheck);

// for(let i=0; i<phraseToCheck.length; i++){
// console.log(phraseToCheck[i]);

// for(let j=0 ; j < toExcludeArr.length; j++){
//   if(phraseToCheck[i] !== toExcludeArr[j]){
//      continue;}
//      else {
//     filteredPhraseToCheck += phraseToCheck.slice(i,1);
//   } 
// }

// }
// console.log(filteredPhraseToCheck);