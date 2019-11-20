// Iteration 1: Names and Input
let hacker1 = "Susanne";
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Malte";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops
let upperHacker1 = hacker1.toUpperCase(); 
let upperSpaceHacker1 ="";

// console.log (upperHacker1);
for (let i=0; i<upperHacker1.length; i++){
  
    upperSpaceHacker1 = upperSpaceHacker1 + upperHacker1.charAt(i) + " ";
  }
console.log (upperSpaceHacker1);
// console.log(upperSpaceHacker1.length);

let reverseHacker2 = "";
for (let i=hacker2.length; i>=0; i--){
  
    reverseHacker2 = reverseHacker2 + hacker2.charAt(i);
  }
console.log (reverseHacker2);

let compareHacker = hacker1.localeCompare(hacker2);
if ( compareHacker < 0 ){
  
  console.log(`The driver's name goes first.`);
}
else if (compareHacker > 0){
  console.log(`Yo, the navigator goes first definitely.`);
}
else if (compareHacker === 0){
  console.log(`What?! You both habe the same name?`);
}
//Bonus1

let loremStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum, elit quis dapibus placerat, nibh felis tincidunt massa, sed commodo neque sapien a massa. Phasellus ultricies venenatis vehicula. Donec finibus velit et purus tincidunt, eu imperdiet lorem mattis. Nunc accumsan mauris vel sodales mattis. Aliquam non quam quis erat mattis dapibus vitae non est. Cras sagittis quam ex, vitae tempus velit mattis sed. Vivamus vestibulum erat at est egestas hendrerit. Nunc id malesuada dolor, at vehicula tellus. Proin eu mauris magna. Integer at fermentum purus. Vivamus eu nunc mollis, rhoncus dui eu, accumsan diam. Quisque ut eros ut orci convallis egestas ac non nunc. Morbi quis risus non sapien congue pretium. Proin luctus neque vitae fermentum gravida. Nam non magna porta, condimentum eros sed, sagittis nibh. Nunc congue sodales pulvinar. Vivamus blandit tempor vestibulum. Nunc in tempus nisl, id pellentesque risus. Nulla quis dolor quis risus iaculis maximus. Cras venenatis quis sapien eu faucibus. Ut eleifend tortor sit amet sollicitudin cursus. Suspendisse urna augue, iaculis non efficitur eu, molestie at erat. Aenean purus libero, tristique vel justo id, consequat faucibus est. Nulla sit amet leo pretium, pharetra libero eu, varius lacus. Sed quis libero tincidunt, scelerisque nunc at, commodo arcu. Donec sit amet lorem vitae orci laoreet pharetra non eu lectus. Integer condimentum nulla quis massa congue, malesuada dictum felis convallis. Donec semper pretium pulvinar. Phasellus vel laoreet nunc. Duis libero orci, finibus quis mi volutpat, aliquet pharetra massa. Nulla efficitur placerat ipsum vitae varius. Nam lacinia massa nisi, vitae vulputate dui accumsan eu. Suspendisse quis erat tempor, egestas metus nec, pretium turpis. Suspendisse quam odio, hendrerit in nibh et, tincidunt luctus magna. Sed ut luctus lorem. Donec id consectetur nisl. Sed vehicula bibendum lorem, sit amet venenatis neque sollicitudin at. Nulla magna dui, ornare in dignissim vitae, placerat non eros. Proin mattis et nibh nec pulvinar."

function countLoremWords(inputStr) {
  return inputStr.split(' '); //split a string into an array of substrings, and returns the new array ... here its length
  }
let wordArr = countLoremWords(loremStr);

//console.log(countLoremWords2(loremStr));

console.log(`LoremIpsum word count: ${wordArr.length}`);

let etCount = 0;
let arrVal ="";
for (let j=0; j<wordArr.length; j++){
   arrVal = wordArr[j].replace("et,","et");;
if (arrVal === "et"){
   etCount++;
}
}

console.log(`"et"-Count: ${etCount}`);
