// Iteration 1: Names and Input
let hacker1 = "Pablo";
console.log(`Driver's name is ${hacker1}`)

let hacker2 = "John";
console.log(`Navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${acker2.length} characters.` )
} else{
    console.log(`Wow, you both have equally long names, ${hacker2.length } characters!`)
}

// Iteration 3: Loops

let newName = " ";
for (let i =0; i<hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + ' '}
console.log(newName)
let reverseName = " ";
for (let i = hacker1.length; i>=0; i--) {
  reverseName += hacker1[i]}
console.log(reverseName)

//this really cheks alphabetical order! 'J' is more than 'A' means it goes after it in alphabet
if (hacker1 > hacker2){
  console.log('The driver\'s name goes first')
}else if (hacker2 > hacker1){
  console.log('Yo, the navigator goes first definitely')
}else{
  console.log('What?! You both have the same name?')
}

let latinText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat massa ut lectus blandit consequat. Vestibulum sed dui eu turpis pellentesque ullamcorper ac et augue. Vivamus interdum eros purus, a vehicula magna facilisis eu. Suspendisse lorem sem, congue at facilisis sed, rutrum sed lectus. Proin diam massa, posuere non mattis porta, mattis at augue. Vestibulum sed molestie nulla. Duis nec ultricies justo, in maximus velit.
Etiam congue orci mi. Nunc at justo volutpat, elementum eros vel, pulvinar tortor. Aliquam a consequat nunc, sed condimentum turpis. Nulla volutpat lacinia ligula vitae fermentum. Curabitur quis vulputate arcu, in lobortis sem. Cras porta molestie dignissim. Nullam vehicula vestibulum neque, ut egestas eros iaculis nec. Sed cursus auctor ex, eu vestibulum quam.
Donec non quam nec felis luctus posuere congue non arcu. Mauris sed dapibus leo. Sed erat eros, molestie ultricies laoreet non, auctor commodo quam. Nunc eu dolor eu erat finibus lacinia vel quis augue. Proin at finibus dui, a pulvinar tortor. Cras gravida eros pellentesque dictum elementum. Quisque molestie mattis ligula, at tristique erat fermentum vel. Donec eleifend mauris sed odio aliquet, at volutpat lectus posuere. Nam a purus at urna elementum semper in eget dui. Etiam non mauris sodales, vestibulum neque eu, feugiat nisl. Integer et libero eu mi varius luctus ac in justo.`
  
function wordCount(str) { 
  return str.split(" ").length;
}
console.log(wordCount(latinText));

let etCount = 0;
for (let i = 0; i<latinText.length-1; i++) {
  if (latinText.charAt(i).toLowerCase() === 'e' && latinText.charAt(i+1) === 't'){
    etCount++;
  }
}
console.log(etCount);


let phraseToCheck = "stack cats";
let isPalindrome = true;
let newPhraseToCheck = "";
for (let i = 0; i<phraseToCheck.length; i++){
  if (phraseToCheck[i] !== " ") {
    newPhraseToCheck += phraseToCheck[i]
  }
}
for (let i = 0; i<newPhraseToCheck.length/2; i++) {
  if (newPhraseToCheck.charAt(i) !== newPhraseToCheck[newPhraseToCheck.length-1 -i]){
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {console.log('Palindrome')
}else{
  console.log('!Palindrome')
}