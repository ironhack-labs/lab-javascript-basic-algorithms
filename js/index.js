console.log("I'm ready!");
// Iteration 1: Names and Input

const hacker1 = "Jeannette"
const hacker2 = "Fatima" //this is my second name

console.log(`The driver's name is ${hacker1}`);
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else  if (hacker1.length<hacker2.length){
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, XX characters!`)
}


// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

for (let item of hacker1){
  console.log(item.toUpperCase())
}
/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/
for (let i=hacker2.length; i>=0; i--){
  console.log(hacker2[i]);
  }

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

let result = 'hacker1'.localeCompare('hacker2');
if (result === -1){
   console.log("The driver's name goes first")
} else if (result === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name");
}

//Bonus 1
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ex eget felis posuere scelerisque. Donec consequat eu urna at posuere. Cras scelerisque venenatis pretium. Etiam et tempor risus, eget condimentum augue. Vivamus rhoncus est lacus, eu pharetra nibh pharetra sed. Phasellus vel tincidunt quam. Integer a velit ut mi cursus tempus a nec augue. In hac habitasse platea dictumst. Suspendisse potenti. Mauris ullamcorper mattis ornare. Donec vehicula nisl massa, nec venenatis libero auctor ac. Nulla vel vestibulum augue, vel ullamcorper lacus. Morbi elit nisi, consectetur in ullamcorper a, mollis sed augue. Nunc faucibus purus in mauris consectetur semper. Proin a elit ullamcorper, dapibus nibh sit amet, porta nisi. Duis volutpat nisl id lectus condimentum, ac pharetra ligula tempor. Morbi in felis viverra, finibus nunc sit amet, efficitur risus. Fusce orci urna, commodo nec nulla non, iaculis commodo dolor. Etiam suscipit est risus, sit amet pellentesque dui aliquet quis. Nulla vitae est ligula. Integer ultricies consequat molestie. Praesent vel sapien malesuada, varius augue vitae, lacinia lacus. Aenean sagittis in mauris accumsan tempus. Vivamus pretium tincidunt augue a bibendum. Aliquam lacinia feugiat magna, et imperdiet turpis imperdiet ac. Maecenas maximus risus id nulla eleifend, vel tincidunt velit rhoncus. Morbi facilisis magna ligula, sed faucibus ipsum semper et. Fusce magna urna, efficitur a mauris at, dapibus mollis tellus."

const nunmberStrings = paragraph.length
console.log (nunmberStrings); //to count how many characters there are in the string

var count = (paragraph.match(/et/g)).length;
console.log(count); //to count how many times the expression 'et' appears in the paragraph
