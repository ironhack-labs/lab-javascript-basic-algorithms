// Iteration 1: Names and Input
// 
let hacker1 ='Mila';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Vitor';
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3: Loops
let spacedName = ""
for(let i = 0; i < hacker1.length; i++){
  if(i === hacker1.length -1){
    spacedName += hacker1[i].toUpperCase()
   }
  else{
  spacedName +=  hacker1[i].toUpperCase() + ` `;
  }
}
console.log(spacedName)
let revertName = ""
for(let i = hacker1.length -1; i >= 0; i--){
  revertName += hacker1[i]
}

console.log(revertName);

let sortedNames = hacker1.localeCompare(hacker2);
if(sortedNames){
    console.log("The driver's name goes first.");
}
else if(!sortedNames){
    console.log("Yo, the navigator goes first definitely");
}
else{
    console.log("What?! You both have the same name?");
}

let loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo justo, congue dapibus lectus quis, semper convallis eros. Nulla suscipit nunc quis eleifend aliquet. Duis tincidunt lacus ac ipsum pulvinar, eget interdum erat ornare. Cras eget aliquam erat. Sed in fermentum dolor, a malesuada tortor. Curabitur tempus ullamcorper lorem nec tempor. Praesent tincidunt nibh ut sagittis aliquet.
Nunc sed enim non nisi luctus ultrices. Curabitur ante tortor, suscipit sit amet hendrerit et, condimentum et augue. Donec bibendum metus in porttitor lobortis. Nulla facilisi. Cras faucibus massa quis condimentum porttitor. Suspendisse at consectetur mauris, at condimentum purus. Sed nec orci vitae nisl feugiat ultricies. Phasellus lorem dui, aliquet at sapien a, scelerisque dictum felis. Donec mauris ligula, efficitur a quam interdum, commodo aliquet quam. Nam eget odio semper, efficitur turpis mattis, cursus est. Mauris quis consequat erat, et maximus purus. Quisque laoreet ante orci, eget congue diam rhoncus quis. Nam ultricies augue elit, et lacinia diam convallis id. Vestibulum consectetur molestie lorem, quis tristique lacus facilisis a. Aenean a ligula quis justo congue molestie. Nullam est risus, rhoncus at finibus eu, vehicula vitae lorem.

Sed a porttitor est. Maecenas a facilisis massa. Pellentesque non lacus ac odio convallis vehicula at ac massa. Donec est urna, condimentum sed velit sollicitudin, egestas vehicula nibh. Integer ullamcorper lacus eu lacus vulputate imperdiet. Suspendisse consectetur, urna in rutrum dapibus, sapien purus posuere lacus, sed viverra magna augue a ligula. Vestibulum enim purus, eleifend sed sapien sed, lobortis luctus sapien. Quisque egestas neque posuere sapien fermentum, ac eleifend erat consequat. Cras faucibus, sem a scelerisque consequat, dolor lorem venenatis risus, sodales finibus turpis est ac enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a eros nibh. Nam turpis felis, imperdiet a bibendum id, venenatis a mauris.`;


function WordCount(str) { 
  return str.split(" ").length;
}

console.log(WordCount(loremParagraph));

console.log(loremParagraph.split(" et ").length);
let phraseToCheck = "taco cat";

function checkPalindrome(someString){
let reverseCondition = someString.length -1;
for(let i = 0; i < reverseCondition/2; i++){
    let forward = someString[i];
    let backward = someString[reverseCondition - i];
    if(forward !== backward){
        return false
    }
    else{
        return true
    }
}
}