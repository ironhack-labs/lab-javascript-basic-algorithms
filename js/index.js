// Iteration 1: Names and Input
const hacker1 = "Jan";
console.log(`The driver's name is ${hacker1}.`)
const hacker2 = "Facundo";
console.log(`The navigator's name is ${hacker2}.`)
// Iteration 2: Conditionals
const driver = hacker1.length;
const navigator = hacker2.length;
if (driver > navigator) 
{
console.log(`The driver has the longer name. It has ${driver} charachters.`);
}
else if (navigator > driver) {
console.log(`The navigator has the longer name. It has ${navigator} charachters.`);
}
else {
console.log(`Wow, both have equally long names with ${driver} charachters!`);
}
// Iteration 3: Loops
let driverCapitalized = hacker1.toUpperCase();
let driversNameCapital = "";
for (let i = 0; i<driverCapitalized.length; i++) {
driversNameCapital += driverCapitalized[i] +" ";
}
driversNameCapital = driversNameCapital.slice(0,driversNameCapital.length-1,);


let navigatorsNameReversed = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorsNameReversed += hacker2[i];
};
console.log(navigatorsNameReversed);

/* compare lexografically?? */
let order = hacker1.localeCompare(hacker2);
console.log(order);
switch (order) {
  case 0:
  console.log("You both have the same name!!");
  break;
  case 1:
  console.log("The navigator's name goes first.");
  break;
  case -1:
  console.log("The driver's name goes first.");
  break;
}

// Bonus 1 
let paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let paragraph2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

let paragraph3 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
let allParagraphs = paragraph1 + paragraph2 + paragraph3
// console.log(allParagraphs)
let wordCount = 0
for (let i = 0; i < allParagraphs.length; i++){
  if (allParagraphs[i] == ' '){
    wordCount++
  }
}
console.log(wordCount + 1)

let pal1 = "A man, a plan, a canal, Panama!"
let pal2 = "Amor, Roma"
let pal3 = "race car"
let pal4 = 'what is happenningngg'
// remove space
// remove other symbols
// remove commas
// all same case// reomving alphanumberic characters from stringlet pal1Lowercased = pal3.toLowerCase()
// console.log(pal1Lowercased + ' lowecase')
let palClean = pal1Lowercased.replace(/[^a-z]/g, '');
console.log(palClean )for (i = 0; i < palClean.length; i++){
let negCounter = (palClean.length - i);
  if (palClean[i] !== palClean[negCounter - 1]){
  console.log('not a palindrom');
  break;
  } else if (i = palClean.length){
   console.log('palindrome');
 break;
} }