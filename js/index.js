// Iteration 1: Names and Input
let hacker1 = prompt('name');
capitalizedHacker1 = hacker1.charAt(0).toUpperCase() + hacker1.slice(1);//strip out the first letter of the name to capitalize it
console.log(`The driver's name is ${capitalizedHacker1}`);

let hacker2 = prompt('name2');
capitalizedHacker2 = hacker2.charAt(0).toUpperCase() + hacker2.slice(1);
console.log(`The navigator's name is ${capitalizedHacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
  } else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

//Print driver's name in Caps and separated by a space
let capHacker1 = "" ; //created as a place holder where each letter will be added as the loop goes by (if declared and left empty it would console log undefined)
for (const value of capitalizedHacker1.toUpperCase()) {
  capHacker1 += value + ' ' ; //loop iterates thorugh each caracter of the string, capitalizes it and adds it to the capHacker1 variable w/ a space between them
}
console.log(capHacker1);

//Print navigator's name in reverse
let revHacker2 = "" ;
for (let i = capitalizedHacker2.length ; i > 0; i--) {
   revHacker2 += capitalizedHacker2[i-1];//used i-1 because strings start at 0. loope iterates through the navigators name in reverse and adds the caracter to the revHacker variable
}
console.log(revHacker2);

//Lexicographic order comparisson
if (hacker1 > hacker2){
    console.log("The driver's name goes first.");
  } else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definetively.");
  } else {
    console.log("What?! You both have the same name?");
  }

  // Bonus 1

  // lorem ipsum generation
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus velit, ac rutrum libero. Vestibulum ullamcorper enim ac est laoreet facilisis. Cras vitae euismod orci. Maecenas fermentum sollicitudin justo ac elementum. Ut tempor suscipit felis, vel bibendum erat egestas nec. Sed ut scelerisque ex. Nam lectus justo, fermentum eget finibus vitae, pulvinar eget massa. Curabitur justo velit, faucibus nec ultrices quis, pretium gravida ex. Suspendisse hendrerit augue quis semper hendrerit. Morbi pellentesque blandit arcu, at ultricies enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Sed venenatis sed ex et malesuada. Pellentesque faucibus lobortis nulla eget tincidunt. Maecenas pulvinar pharetra congue. Duis eget vehicula orci. In hac habitasse platea dictumst. Cras ac velit est. In tempus eu nibh id varius. Mauris mattis dui nec molestie placerat. Praesent dui turpis, lobortis vitae diam vel, laoreet lobortis mi. Donec nec sapien vitae dolor tempus hendrerit sit amet quis arcu. Mauris in magna dapibus, mollis elit eget, sodales orci.

Phasellus tristique id mi non tempus. Integer vel mi est. Nullam a mauris eget turpis pretium euismod. In hac habitasse platea dictumst. Duis accumsan diam eu auctor egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris porttitor, urna sed euismod tincidunt, turpis eros iaculis velit, at dictum mi purus in quam. Pellentesque bibendum dolor molestie blandit consectetur. Nunc nec enim id nisl varius vulputate vehicula vulputate nisl. Cras placerat nisl et lobortis consequat. Nunc et augue quis metus vestibulum porta.`

let words = lorem.split(" ");
let cleanArrayWords = [];

for (let i=0 ; i<words.length ; i++){ //loop that iterates through the words array
  if(words[i].includes("\n\n")){ //if the words array contains an enter that continues in the next line
    let internalWords = words[i].split("\n\n"); //new variable declaration that contains an array in which the enter words will be divided
    for(let j=0 ; j<internalWords.length ; j++){
      if(internalWords[j]==="//"){ //conditional to clean the // at the beginning of a paragraph
        continue;
      } else{
      cleanArrayWords.push(internalWords[j]); //add the words to the array that will be used to count the words
      }
    }
  } else{
  cleanArrayWords.push(words[i]); // add the remaining words to the array
  }}

// console.log(cleanArrayWords);
console.log(cleanArrayWords.length);

// Bonus 2
//Palindrome checker
let phraseToCheck = prompt('Enter a Palindrome: ') ;
let phraseChecker = 0 ;
let phraseClean = "" ;

for (i=0 ; i<phraseToCheck.length ; i++){
  if(phraseToCheck[i] == "," || phraseToCheck[i] == " " || phraseToCheck[i] == "!" || phraseToCheck[i] == "'" || phraseToCheck[i] == '"' || phraseToCheck[i] == "."){
    continue ;
  } else {
    phraseClean += phraseToCheck[i] ;
  }//loop goes through each value of the string, if it's a letter it adds it to a new variable called phraseClean if it's not a letter it jumps to the next value
}
phraseClean = phraseClean.toLowerCase(); //takes the clean phrase and lowecases it

//compares each letter with it's opposite. For example, it compares the first letter to the last letter. If they're equal, it adds 1 to the variable phraseChecker, if they're not equal it breaks out of the loop
for (i=0 ; i< phraseClean.length ; i++ ){
  if(phraseClean[i] === phraseClean[phraseClean.length - (i+1)]) {
    phraseChecker += 1;
  } else {
    break;
  }
} 

//If the phraseCheker is equal to the lenght of the phrase, text is a palindrome
if(phraseClean.length === phraseChecker){
  console.log('Entered text IS a Palindrome');
} else {
  console.log('Entered text IS NOT a Palindrome');
}
