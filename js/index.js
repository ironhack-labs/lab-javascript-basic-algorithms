// ==============Iteration 1: Names and Input
let hacker1 = "Magali";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Thaïs";
console.log(`The navigator's name is ${hacker2}`);
// ==============Iteration 2: Conditionals
let smallestNameLength; // useful for iteration 3
if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
  smallestNameLength = hacker2.length;
} else if (hacker1.length < hacker2.length) {
  console.log(
    `${hacker2} has the longest name, it has ${hacker2.length} characters`
  );
  smallestNameLength = hacker1.length;
} else {
  console.log(
    `You both have equally long names : ${hacker2.length} characters`
  );
  smallestNameLength = hacker2.length;
}
// =============Iteration 3: Loops
let hacker1UpperCased = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1UpperCased += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpperCased);

let hacker2Backwards = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Backwards += hacker2[i];
}
console.log(hacker2Backwards);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < smallestNameLength; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log(`The driver's name ${hacker1} goes first.`);
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log(`Yo, the navigator ${hacker2} goes first definitely."`);
      break;
    } else {
      continue;
    }
  }
}
// =============Bonus 1: 

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque lacinia felis nec lacinia. Donec gravida at tortor sed eleifend. Aenean sed sagittis velit, nec dapibus mauris. Praesent blandit nibh quis mi vehicula, non euismod enim tristique. Aenean eget justo id nulla placerat elementum. In bibendum fringilla auctor. Nam dictum eros molestie velit rutrum fringilla.

In sed erat at sem vestibulum lacinia nec ac quam. Vestibulum consectetur elit id nulla luctus imperdiet. Cras commodo felis at laoreet suscipit. Praesent tincidunt velit et condimentum molestie. Nulla lobortis finibus ipsum condimentum ultrices. Morbi ac aliquet tortor. In hac habitasse platea dictumst. Aenean sagittis ac leo at mollis.

Praesent quis ex vitae leo rhoncus imperdiet. Morbi interdum dui tortor, quis vulputate leo aliquam eu. Nullam rutrum nulla nec erat vulputate, eu posuere felis rhoncus. Phasellus ut enim lacus. Maecenas id scelerisque nisl. Morbi finibus vestibulum dictum. Nullam et lacinia felis. Fusce finibus auctor ante in iaculis. Mauris lobortis pretium volutpat. Pellentesque egestas nulla posuere enim dictum consectetur. Duis venenatis eget sem ut molestie. Aenean efficitur metus eu purus commodo, ac aliquet ligula semper. In viverra orci eu arcu sollicitudin condimentum.`;

let loremSansRetourALaLigne = lorem.replace(/\n\n/g, " ");
let loremArr = loremSansRetourALaLigne.split(' ');

console.log(loremArr);
console.log(loremArr.length);

let count = 0;
for (let i=0; i<loremArr.length; i++){
  if(loremArr[i]==="et" || loremArr[i]==="Et"){
    count+=1;
  }
};
console.log(count);

// =============Bonus 2: We did'nt manage to delete the punctation or special character in the string (only manage  case and space)


let phraseToCheck='taco cat';
phraseToCheck= phraseToCheck.toLowerCase();
phraseToCheck= phraseToCheck.replace(" ", "");

console.log(phraseToCheck);

let j= phraseToCheck.length-1;


if (phraseToCheck.length%2!==0){
  for (i=0;i<j;i++ ){
    if (phraseToCheck[i]===phraseToCheck[j]){
      j-= 1;
    }
    else{
      console.log('this is not a palindrome');
      break;
      }
  }
  if (i===j){
    console.log('this is a palindrome');
  }
} else {
 let num=phraseToCheck.length/2; 
 for (i=0;i<num;i++){
   if (phraseToCheck[i]===phraseToCheck[j]){
     j-= 1;
   } else {
      console.log('this is not a palindrome');
      break;
      }
  }
  if (i===j+1){
    console.log('this is a palindrome');}
}
