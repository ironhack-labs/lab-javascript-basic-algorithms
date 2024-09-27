// Iteration 1: Names and Input

let hacker1 ="Jenny";
console.log(`The driver's name is ${hacker1}.`);

let hacker2="Michael";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1} characters.`)
  }
  
  else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters.`)
  }
  
  else {`Wow, you both have equally long names, ${hacker1.length} characters!`}

// Iteration 3: Loops

hacker1 = hacker1.toUpperCase()
let name1 ="";
let name2 ="";

for(i=0; i<hacker1.length; i++){
  if(i===hacker1.length-1){
  name1 += `${hacker1[i]}`}

else {name1 += `${hacker1[i]} `}
}
console.log(name1);

for(i=hacker2.length-1; i>=0; i--){
  name2 +=`${hacker2[i]}`
}

console.log(name2);

if (hacker1.localeCompare(hacker2)===1){
    console.log("Yo, the navigator goes first, definitely.")
}

else if (hacker2.localeCompare(hacker1)===1){
    console.log("The driver's name goes first.")
}
else{"What?! You both have the same name?"}

// Bonus 1: 

const longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis rutrum facilisis. Suspendisse bibendum vulputate metus, eget posuere eros fermentum in. Phasellus vel orci sollicitudin risus hendrerit eleifend vitae at risus. Praesent fermentum imperdiet tellus sit amet condimentum. Pellentesque eros dolor, pretium a porttitor in, pharetra eget orci. Aenean convallis mi at nunc ultricies, et pretium orci imperdiet. Suspendisse eu ex cursus, malesuada sem quis, placerat libero. Morbi at augue maximus, aliquet magna id, sodales urna. Proin commodo pellentesque tellus id sagittis. Nulla rhoncus sed purus eget blandit. In faucibus egestas quam non placerat. Vivamus justo neque, interdum at augue in, tincidunt sodales ipsum.

Etiam ligula ligula, auctor et pharetra sollicitudin, efficitur ut dolor. Nullam aliquam ullamcorper nulla, et volutpat felis molestie ut. Suspendisse eget sollicitudin lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae facilisis magna. Morbi fringilla elit vel leo faucibus auctor. Suspendisse eu scelerisque diam, ac convallis arcu. Pellentesque volutpat eros ac magna aliquam mollis. In hac habitasse platea dictumst. Etiam fringilla erat diam, ac rhoncus erat aliquam non. Maecenas id massa aliquet magna consectetur hendrerit quis sed purus. Quisque cursus, erat sit amet vehicula placerat, elit magna volutpat neque, at bibendum massa mauris id est. Nulla pulvinar ultrices sem, vitae lobortis massa pharetra eu. Curabitur id felis hendrerit, vestibulum erat a, mattis ante.

Proin in vestibulum neque, a eleifend diam. Nulla sollicitudin egestas ante, non aliquet turpis pharetra a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempus malesuada eleifend. Pellentesque venenatis est orci, eu auctor dui dictum quis. Etiam non sollicitudin urna. In laoreet erat nisi, elementum hendrerit magna cursus at. In in dui enim. Aliquam eget euismod augue.`

// try with function
function numberOfWords(name){
return name.split(/\s+/).length;
}

console.log(numberOfWords(longText));

// try with loops

let numberOfWords2=0

for (let i=0; i<longText.split(/\s+/).length; i++){
 numberOfWords2 += 1}

console.log(numberOfWords2);


let numberOfWordsIncludeEt=0

for (let i=0; i<longText.length; i++){
  const firstCharacter = longText[i];
  const secondCharacter = longText[i+1];
  
  if(firstCharacter === "e" && secondCharacter === "t"){numberOfWordsIncludeEt += 1}
}

console.log(numberOfWordsIncludeEt);

// Bonus 2:

const phraseToCheck="stack cats";
let phraseCheckResult="";

switch (phraseToCheck){
  case "A man, a plan, a canal, Panama!":
  case "Amor, Roma":
  case "race car":
  case "stack cats":
  case "step on no pets":
  case "taco cat":
  case "put it up":
  case "Was it a car or a cat I saw?":
  case "No 'x' in Nixon":
    phraseCheckResult = "Yes, it is a Palindrome"
    break;
  default: phraseCheckResult = "No, it is not a Palindrome"
}

console.log(phraseCheckResult);
