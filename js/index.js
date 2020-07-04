
// Iteration 1: Names and Input

console.log("I'm ready");
const hacker1 = "Harry Potter"
console.log("the drivers name is " +  hacker1);
const hacker2 = "Hermione Lodge"
console.log("the navigators name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) 
{
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}  else if (hacker1.length < hacker2.length) 
{
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else 
{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

const result = []
for (let i = 0; i < hacker1.length; i++) {
  result.push(hacker1[i].toUpperCase())
  result.push(' ')
}
console.log(result.join(''))

function reverseString(str) {
    
    var splitString = hacker2.split("");  
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    
    return joinArray; 
}
 
reverseString();

var driverGoesFirst = "The driver's name goes first.";
var navigatorGoesFirstDef = "Yo, the navigator goes first definitely.";
var whatBothSameName = "What?! You both have the same name?";

console.log(driverGoesFirst.localeCompare(navigatorGoesFirstDef, 'en', { sensitivity: 'base' }));

console.log(navigatorGoesFirstDef.localeCompare (whatBothSameName, 'en', { sensitivity: 'base' } ));

console.log

// Iteration 3: Loops

// navigatorGoesFirstDef.localeCompare(whatBothSameName);

// function printLexicographicOrder() {
//   console.log(driverGoesFirst);
//   }
// switch() {
//   case A:
//     driverGoesFirst.localeCompare(navigatorGoesFirstDef);
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// Bonus

let stringAssignment1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada feugiat nisl non ultrices. In eleifend metus est, vel eleifend purus sodales nec. Aliquam varius nec ex vel consequat. Praesent semper et risus in semper. Ut blandit feugiat lobortis. Donec vitae pellentesque sem. Nulla rutrum eget lectus in varius. Mauris risus orci, lobortis non lorem ac, iaculis vestibulum nulla. Praesent in rutrum orci, sed scelerisque odio. Vestibulum a purus fermentum elit sodales fringilla. Integer fermentum ante diam, a feugiat nisi imperdiet in. Quisque ullamcorper vehicula vestibulum. Nam rutrum tempus ligula, vel dapibus nibh laoreet eleifend. Nulla euismod nisl eu magna mattis malesuada a vel ex. Aenean congue quam purus, et tincidunt erat egestas vitae. Sed venenatis dolor eget turpis porttitor, at suscipit augue ultricies.'

let stringAssignment2 = 'Maecenas viverra augue mauris, a ultrices erat mollis in. Morbi gravida, lorem at facilisis auctor, nisl nisi lobortis turpis, et luctus ante nibh eget nisi. Sed dapibus nisl vel pulvinar accumsan. Nullam ac lacus lorem. In sit amet efficitur urna. Quisque fermentum erat a mauris aliquet, in eleifend felis commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in fringilla diam.'

let stringAssignment3 = 'Morbi et lacinia quam. In hac habitasse platea dictumst. Nam eu dui faucibus, sollicitudin nisl eu, ornare lacus. Vestibulum suscipit dignissim consectetur. Nulla egestas tincidunt orci vitae luctus. In blandit, odio ut dictum ornare, quam tortor scelerisque est, ac vulputate mauris dolor vel libero. Duis lobortis elit eu libero rutrum, ac scelerisque sapien tincidunt. Phasellus sed libero diam. Nunc ultricies lectus vitae maximus rutrum. In pulvinar felis enim, eu viverra magna molestie eu. In hac habitasse platea dictumst. Nullam vitae rhoncus mauris, sed accumsan eros. Phasellus ut suscipit tortor. Praesent eleifend lobortis nulla at pretium. Sed facilisis enim eu ante placerat, ac vulputate libero varius. Nunc lacinia sit amet ipsum at congue. '

let countTotal = (stringAssignment1 + stringAssignment2 + stringAssignment3);

var wordCount = countTotal.match(/(\w+)/g).length;
alert(wordCount);

var res = countTotal.match(/et/gi);
console.log(res);

let phraseToCheck = "anna emme"