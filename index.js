// Iteration 1: Names and Input

let hacker1 = "Tobias"
console.log("The driver's name is", hacker1);

let hacker2 = "Manfred"
console.log("The navigator's name is", hacker2);


// Iteration 2: Conditionals

let TobiasLength = hacker1.length
let ManfredLength = hacker2.length

if(TobiasLength > ManfredLength){
  console.log (`It seems that the driver has the longest name, it has ${TobiasLength} characters.`)
}
else if(TobiasLength < ManfredLength){
  console.log (`It seems that the navigator has the longest name, it has ${ManfredLength} characters.`)
}
else if(TobiasLength == ManfredLength){
  console.log(`Wow, you both have equally long names, ${TobiasLength} characters!`)
}


// Iteration 3: Loops

let space = ""
for(let i = 0; i <= UpperCaseTobias.length -1; i++) {
  if(UpperCaseTobias != UpperCaseTobias.slice(0,i+1)) {
    space += UpperCaseTobias[i] + " " 
}
  else {
    space += UpperCaseTobias[i]
  }
}
  console.log(space)

let lastIndex = hacker2.length -1;
let space2 = ""

for(let i = lastIndex; i >= 0; i--){
  const char = hacker2[i]
  space2 += hacker2[i] + ""
}
console.log(space2);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
}

//Bonus 1
//Number of words in the string
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sapien porta, varius dui id, hendrerit urna. Ut volutpat at tortor sit amet tempor. Pellentesque placerat eros a ligula rhoncus auctor. Maecenas ac elit in nisi elementum dignissim ut et ipsum. Donec quis dui in libero finibus mollis eget eu quam. Aliquam auctor, sapien feugiat tempor convallis, enim leo rutrum risus, id maximus orci lectus eget eros. Aliquam eget dui ante. Nullam arcu orci, congue ultrices mauris quis, ultricies malesuada ante. Mauris fermentum pretium lobortis. Vestibulum nec justo sodales, mattis purus vitae, porta eros. Vestibulum pharetra elit in nisl finibus volutpat. Mauris at accumsan urna, at condimentum diam. Nunc lacinia erat vel mollis molestie. Donec tincidunt consectetur mi id maximus. Sed auctor quam id sapien ornare, sit amet finibus augue porttitor. Nullam in metus quis ipsum vulputate imperdiet. Donec dignissim purus non libero rhoncus, nec tristique nisi tempor. Integer velit purus, accumsan in leo sed, facilisis tempus turpis. Sed tempor felis in dignissim varius. Nullam consectetur tellus nec tristique dapibus. Nullam vel dolor rutrum, lacinia risus ut, volutpat elit. Donec vehicula dui mauris, in semper erat posuere a. Sed a augue eget ex elementum viverra. Cras facilisis condimentum eros, ac interdum lorem faucibus ac. Donec tristique dui eu velit iaculis, mollis ullamcorper nulla mollis. Duis faucibus diam et aliquet vulputate. Quisque eget urna sed metus varius tempor non vel purus. Nulla in erat mattis sapien sagittis congue et ac nisl. Praesent pellentesque quis ex at tincidunt. In hac habitasse platea dictumst. Donec pellentesque quam vitae lacinia finibus. Ut et massa massa. Pellentesque accumsan, dui vitae dignissim suscipit, est diam placerat velit, at porta magna leo id dui."

let count = 1;

for (let i = 1; i <= longText.length -1; i++) {
  if(longText[i] === " ") {
    count++;
  }
}

console.log(count)

//Number of times the word et appears

let count = 0

for (let i = 0; i <= longText.length -1; i++) {
  const fourChars = longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3];
  
  if ( fourChars === " et " ) {
    count++;
  }
}

console.log(count)


// Bonus 2

let phraseToCheck = "racecar"
let phraseBack = ""
let lastIndex = phraseToCheck.length -1

for (let i = lastIndex; i >= 0; i--) {
  phraseBack += phraseToCheck[i];
}

if (phraseToCheck === phraseBack){
  console.log("It is a Palindrome!!!")
}
else {
  console.log("These are random words!")
}