// Names and Input
let hacker1 = "Franck";
console.log(`The drivers name is ${hacker1}`);
let message = "Gief navigator's name";
let hacker2 = prompt(message);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length)
  console.log(`The Driver has the longest 
name it has ${hacker1.length} characters `);
if (hacker1.length < hacker2.length)
  console.log(`The Navigator has the longest
name, it has ${hacker2.length} characters `);
if (hacker1.length === hacker2.length)
  console.log(`wow, you got equally long names
, ${hacker1.length} characters`);

// let str = "This is nothing much is yes is is is is ";
// let tab = str.split(" ");

// function findRemove(str, tab) {
//   let clone = [...tab];
//   let index = tab.indexOf(str);
//   let count = 0;
//   while (index !== -1) {
//     count++;
//     clone.splice(index, 1);
//     index = clone.indexOf(str);
//   }
//   return count;
// }

// console.log(findRemove("is", tab));
// Lorem ipsum generator
