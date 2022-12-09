// Iteration 1: Names and Input
let hacker1 = prompt(`What's the name of driver?`)
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = prompt(`Whats the name of navigator?`)
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if ( hacker1.length < hacker2.length ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let spaceCapital = "";

for (let i = 0; i < hacker1.length; i++) {
  spaceCapital = spaceCapital.concat(hacker1[i].toUpperCase()," ")
}
 console.log(spaceCapital);


/* other method 
let output;

output = [...hacker2.toUpperCase()].join(" ");
console.log(output);
*/


let reverseOrder;

reverseOrder = hacker2.split("").reverse().join("");
console.log(reverseOrder);


let order = hacker1.localeCompare(hacker2)

if (order == -1) {
  console.log("The driver's name goes first.")
} else if (order == 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}



//Bouns 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend velit non justo rutrum imperdiet. Pellentesque vehicula orci feugiat ex dapibus, vel semper ligula aliquet. Vestibulum laoreet libero justo, eu convallis mi suscipit et. Integer vel pellentesque turpis. Duis dictum libero ante, eu iaculis leo eleifend id. Donec elit libero, ultrices sed sem nec, congue viverra justo. Nulla vitae elementum turpis. Nullam ultrices nunc nibh, vel pharetra justo vulputate eget. Ut rutrum velit quis dictum dictum. Ut non dui quis felis mattis dictum sed eu mi. /nSuspendisse potenti. Nunc id nisl non nisl scelerisque molestie. Sed accumsan imperdiet mattis. Integer in semper sem. Vivamus ut metus in lacus vulputate gravida. Suspendisse purus elit, ultricies sed dui quis, finibus blandit lectus. Aenean egestas magna libero, vitae porttitor elit consectetur nec. Sed sollicitudin, enim et vestibulum sollicitudin, elit neque molestie ex, ac consequat nulla leo et elit. Suspendisse placerat, dui et elementum porta, nibh lectus interdum turpis, vel dictum erat dolor sed nibh. /nCurabitur eu suscipit nibh, nec scelerisque augue. Proin ornare accumsan tortor, nec dapibus urna ullamcorper a. Nam elementum est elit, vitae varius diam faucibus ut. Etiam faucibus condimentum rutrum. Donec ornare leo quis tempor feugiat. In in nisl quis massa convallis aliquet et nec ipsum. Cras felis lacus, commodo nec nisi sed, tristique aliquet diam. Pellentesque fermentum rhoncus orci et tincidunt. Donec pellentesque feugiat pretium. Quisque finibus enim erat, at maximus mauris tempus vitae. Quisque placerat sem sapien, nec luctus arcu mollis ac. Pellentesque pellentesque tempor orci. Nam eu congue justo. Curabitur sollicitudin tempus orci ac elementum."

console.log(longText.length);

console.log((longText.match(/et/g) || []).length) //stackoverflow


//Bonus 2 - *space, comma 

let phraseToCheck = prompt(`Write some Palindrome: `)

if ( phraseToCheck.toLowerCase === phraseToCheck.split("").reverse().join("").toLowerCase ) {
  console.log("You write the right Palindrome!") 
} else {
  console.log("It's not a Palindrome :(")
}
