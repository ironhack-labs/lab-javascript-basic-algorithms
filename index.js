
// Iteration 1: Names and Input

let hacker1 = "Dominic";
console.log("The driver's name is Dominic");
let hacker2 = "Alonso";
console.log("The navigator's name is Alonso");



// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length){
   console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}



// Iteration 3: Loops


let hacker1upper = (hacker1.toUpperCase());
let newhacker1 = "";

  for (let i=0; i<hacker1upper.length; i++){
    newhacker1 += hacker1upper[i]+" ";
  }
   console.log(newhacker1)


let hacker1reversed = " "

for (let i=hacker1.length -1; i>=0; i--){
 const char = hacker1[i];
 hacker1reversed += char;
}
console.log(hacker1reversed);



hacker1=hacker1.toLowerCase();
hacker2=hacker2.toLowerCase();


if (hacker1>hacker2) {
 console.log("The driver's name goes first.")
}
else if(hacker1<hacker2){
 console.log("Yo, the navigator goes first, definitely.")
}
else if(hacker1===hacker2){
 console.log("What?! You both have the same name?")
}





// BONUS

//Bonus1

/////////count words


let longText = 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur arcu eget dui vulputate dapibus. Duis rutrum dignissim congue. Maecenas vel semper leo. Donec ac facilisis lacus. Curabitur ut lorem velit. Duis tristique ultrices erat. Morbi vestibulum pellentesque sodales. Maecenas tempor, magna a tincidunt finibus, metus turpis mattis felis, vel pretium arcu justo nec ex. Aenean varius odio quis mi tincidunt, non efficitur risus fermentum. Nunc pulvinar lectus in velit eleifend, a fringilla tortor pulvinar. Vivamus scelerisque est tortor. Etiam mauris libero, consequat a efficitur quis, consectetur et justo. Fusce efficitur, diam eu commodo aliquam, dolor sapien vulputate urna, a laoreet nunc dolor nec velit.Nunc vitae erat lectus. Nulla eu erat elit. Vestibulum ex ex, varius ut odio sed, porttitor consequat augue. Praesent eget orci non enim mattis tristique. Duis vitae bibendum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis blandit cursus tristique. Maecenas et accumsan ex, ac condimentum orci. Vestibulum dictum at metus at scelerisque. In tempor faucibus pellentesque.Nunc sodales purus in dui finibus hendrerit. Aenean ullamcorper augue quis pulvinar mollis. Curabitur tellus purus, bibendum nec posuere nec, vehicula ut metus. Pellentesque gravida malesuada neque et dictum. Integer tempor purus non pharetra condimentum. Ut vel sagittis libero. Phasellus et augue ac ex feugiat suscipit vitae ac mi. Suspendisse ornare semper convallis. Aenean aliquam sed arcu ac lobortis. Mauris ac diam eget risus facilisis viverra. Aenean mollis fermentum finibus. Nulla dapibus ex quis libero tristique tempus. Phasellus quis sagittis lectus."


let words=0;
let longTextArray = Array.from(longText);

for(let i=0; i<longText.length;i++){
if(longText[i]== " "){
 words ++;
}
}

console.log("Words on the text: " + words);


/////////// count "et"


let count=0;

for (let i=0; i<longText.lenght;i++){
 const twoChars=longText[i]+longText[i+1];
 if(twoChars==="et"){
   count++;
 }
}

console.log("et on the text: "+ count)




/////// BONUS 2   //// IS IS NOT WORKING

let phraseToCheck="A man, a plan, a canal, Panama!"

let phraseToCheckReversed = " "


for (let i=phraseToCheck.length -1; i>=0; i--){
 const char =phraseToCheck[i];
  phraseToCheckReversed+= char;
}

//console.log(phraseToCheckReversed)

let phraseToCheckReversedLower = phraseToCheckReversed.toLowerCase()

//console.log(phraseToCheckReversedLower)

let phraseToCheckLower = phraseToCheck.toLowerCase()

//console.log(phraseToCheckLower)





//Remove spaces from the phrasesToCheck:

let phraseToCheckLowerNoSpecialChar=""

for (let i = 0; i < phraseToCheckLower.length; i++) {
 const char = phraseToCheckLower[i];
 
 if (char !== " " && char !== "," && char !== "!") {
   phraseToCheckLowerNoSpecialChar+=char;
 }
}
console.log(phraseToCheckLowerNoSpecialChar)



//Remove spaces from the phrasesToCheckReversed:

let phraseToCheckReversedLowerNoSpecialChar=""

for (let i = 0; i < phraseToCheckReversedLower.length; i++) {
 const char = phraseToCheckReversedLower[i];
 
 if (char !== " " && char !== "," && char !== "!") {
   phraseToCheckReversedLowerNoSpecialChar+=char;
 }
}
console.log(phraseToCheckReversedLowerNoSpecialChar)




if (phraseToCheckLowerNoSpecialChar === phraseToCheckReversedLowerNoSpecialChar){
console.log("It is a palindrome")
}
else{
console.log("It is not a palindrome")
}
