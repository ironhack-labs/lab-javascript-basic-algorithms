// Iteration 1: Names and Input
const hacker1 = "Eliher";
console.log("The driver's name is " + hacker1);

const hacker2 = "Luis";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driver = hacker1;
let name = "";
for(let i = 0; i < driver.length; i++){
  name = name + driver[i] + " ";
}
console.log(name.toUpperCase());

//
let navigator = hacker2;
let reversedName = "";
for(let i = 0; i < navigator.length; i++){
  reversedName = navigator[i] + reversedName;
}
console.log(reversedName);

// Done with a Function 
/* function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(hacker2));
*/

let n = hacker1.localeCompare(hacker2);

switch(n){
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  case 0:
    console.log("What?! You both have the same name?");
    break;
}

//Bonus 1 
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper consectetur odio, sit amet suscipit enim gravida sed. Ut pulvinar libero a turpis commodo, eu auctor augue placerat. Fusce semper dui sit amet enim faucibus, ac rutrum nisi facilisis. Proin tempus, mauris non convallis blandit, lectus leo gravida massa, vel pharetra dui augue a felis. Mauris tincidunt efficitur odio. Praesent dictum tortor sed justo viverra eleifend. Pellentesque nulla ipsum, ullamcorper et ultrices et, ornare ac ipsum. Praesent molestie pulvinar ex nec convallis. Nulla nec pharetra ante. Sed tempor sagittis sem nec congue.

Ut et ante gravida, molestie nibh ut, volutpat tortor. Nunc venenatis eget lectus quis semper. Nulla facilisi. Duis eleifend, lacus vitae convallis cursus, lorem erat fermentum quam, a ornare libero purus iaculis ex. Donec id sollicitudin velit, ac convallis odio. Suspendisse non erat ultrices, dapibus metus ut, sagittis nulla. Quisque vestibulum, ex id pulvinar interdum, lacus erat porta massa, sollicitudin aliquam nisl quam sagittis est. Mauris malesuada, lorem cursus finibus finibus, justo ligula venenatis magna, sed aliquet felis ligula sed velit. Quisque dapibus, sem a cursus imperdiet, justo massa tristique augue, a maximus sapien neque tempor orci.

Nunc elementum imperdiet augue nec varius. Sed nunc risus, malesuada non tincidunt quis, dapibus quis libero. Aenean aliquam, purus nec dictum congue, dui mauris luctus mauris, a feugiat neque ligula ut arcu. Integer vitae tincidunt enim, egestas varius risus. Nulla non mi vitae augue hendrerit fermentum. Proin vitae sem ac risus tempus auctor. Aenean in porttitor leo. Donec metus urna, malesuada sit amet commodo quis, aliquam eget sem. Cras tristique eget tortor at varius. Aliquam ac pretium dui. Morbi facilisis convallis ex. Sed ut molestie leo. Nullam sed erat sed mauris pharetra consectetur eget et dolor. Aenean suscipit vehicula odio, vel euismod velit mollis quis. Maecenas eu turpis non quam rutrum ornare. Suspendisse potenti.`

let words = paragraphs.split(" ");
console.log("Paragraph has " + words.length + " words.");

let counter = 0;
for(let i = 0; i < words.length; i++){
  if(words[i] == "et"){
    counter += 1;
  }
}
console.log(counter);

//Bonus 2
let phraseToCheck = "stack cats";
let reversePhrase = "";
phraseToCheck = phraseToCheck.replace(" ", "");
for(let i = 0; i < phraseToCheck.length; i++){
  reversePhrase = phraseToCheck[i] + reversePhrase;
}

if(phraseToCheck == reversePhrase){
  console.log("Same");
}else{
  console.log("Different");
}