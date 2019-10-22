//Iteration 1: Names and Input
let hacker1 = "David";
//console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kiki";
//console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

/*if(hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2Length} characters`);
} else {
  console.log(`Wow, you both got equally long names, ${hacker1Length} characters!`);
}*/

//Iteration 3: Loops
//3.1
//Without Loop
//let hacker1Cap = hacker1.toUpperCase().split('').join(' ');
//console.log(hacker1Cap);

//With Loop
/*let hacker1Cap = hacker1.toUpperCase();
let newString = "";

for(let i = 0; i < hacker1Cap.length; i++) {
  newString += hacker1Cap[i] + " ";
}
console.log(newString);*/

//3.2
//Without Loop
/*let hacker2Reverse = hacker2.split("").reverse().join("");
console.log(hacker2Reverse);*/

//With Loop
/*let newReverseString = "";

for (let i = hacker2.length-1; i >= 0; i--) {
  newReverseString += hacker2[i];
}
console.log(newReverseString);*/

//3.3
/*var hackerArray = [];
hackerArray.push(hacker1, hacker2);

let hackerSort = hackerArray.sort();
if (hackerSort[0] == hacker1) {
  console.log("The driver's name goes first.");
} else if (hackerSort[0] == hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hackerSort[0] == hackerSort[1]) {
  console.log("What?! You both got the same name?");
}*/

//Teacher's Solution for 3.3
let comparison =  hacker1.localeCompare(hacker2);
if (comparison === -1){
  console.log(hacker1, "is alphabetically first");
} else if (comparison === 1){
  console.log(hacker2, "is alphabetically first");
} else {
  console.log("They are equal.");
}

//Bonus Time!
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget elit malesuada, tempor turpis sit amet, tristique ex. Duis nulla arcu, porta et egestas eu, condimentum quis dolor. Praesent diam urna, euismod vitae euismod eget, condimentum ac sapien. Sed quis odio odio. Nam tempor eros id lacus euismod, eu viverra sem pellentesque. Sed at est in ex vulputate ultrices. Sed mattis urna et tincidunt fringilla. Mauris rutrum accumsan neque, vitae elementum arcu. Nulla facilisi. Duis non nibh nec tortor bibendum consectetur ut congue sapien. Integer et euismod mauris. Donec id quam magna. Cras pellentesque pretium justo, a gravida est egestas sit amet. Sed luctus imperdiet massa, a hendrerit arcu laoreet at. Curabitur non fermentum velit, quis sodales elit. Sed blandit pellentesque eleifend. Phasellus lobortis tortor sed molestie sodales. Integer at justo sagittis, sagittis eros lobortis, tristique neque. Curabitur risus diam, lobortis vitae libero ac, viverra vulputate massa. Morbi quis mi lectus. In sed ipsum elit. Vivamus vitae elit in magna maximus aliquet. Sed quis pellentesque sapien. Nulla pellentesque neque eu massa pellentesque feugiat. Vivamus id porta nisi, ac vestibulum massa. Nam porta urna fermentum velit dignissim rutrum. Sed quis magna accumsan, fermentum velit ac, lacinia dui. Proin luctus, quam vitae volutpat tempor, nibh elit iaculis arcu, at iaculis dolor velit sit amet nisi. Sed eu dui gravida, pulvinar diam ac, imperdiet quam. Pellentesque et libero nulla. Nam eget urna velit. Aenean eu odio vitae ex vestibulum mattis non eu quam. Donec dictum pulvinar interdum. Aliquam consequat lacinia velit sed laoreet. Fusce cursus, nisi vitae tristique bibendum, magna lacus condimentum augue, a cursus dui diam eget mauris. Nunc rhoncus ornare euismod.";

console.log(loremIpsum.match(/et/g).length);