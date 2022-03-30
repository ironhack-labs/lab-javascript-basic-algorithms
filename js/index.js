// // // ---------------------------------------------------------
// // // Iteration 1- 2
// // // ---------------------------------------------------------

let hacker1 = "Julian Gabriel Riveraa";
console.log(hacker1.length)
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Amanda JuneJune Walker";
console.log(hacker2.length)
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!.`)

}

// // // ---------------------------------------------------------
// // // Iteration 3
// // // ---------------------------------------------------------

const name = 'Hacker1';
const splittedString = name.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);



// // split puts in an array, and you can use methods on an array which is reverse and join and split to reverse the string and then join them to put them back into a string

console.log(name.split('').reverse().join(''));

// // ---------------------------------------------------------
// //Iteration 4
// // ---------------------------------------------------------

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}

// ---------------------------------------------------------
// 

// let hacker1 = "Julian Gabriel Riveraa";
// console.log(hacker1.length)
// console.log(`The driver's name is ${hacker1}`);

// let hacker2 = "Amanda JuneJune Walker";
// console.log(hacker2.length)
// console.log(`The navigator's name is ${hacker2}`);

// if(hacker1.length > hacker2.length){

//   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
// } else if(hacker2.length>hacker1.length){
//   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

// } else {
// console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!.`)

// }

// const name = 'John';
// const splittedString = name.split('');
// const stringWithSpaces = splittedString.join(' ');
// const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
// console.log(upperCaseStringWithSpaces);



// // split puts in an array, and you can use methods on an array which is reverse and join and split to reverse the string and then join them to put them back into a string
// console.log(name.split('').reverse().join(''));

// ---------------------------------------------------------

// if (hacker1 > hacker2) {
//   console.log("The driver's name goes first.")
// }
// else if (hacker1 < hacker2) {
//   console.log("Yo, the navigator goes first definitely.")
// }
// else {
//   console.log("What?! You both have the same name?")
// } 

// if (hacker1.localeCompare(hacker2)=== -1) {
//   console.log("The driver's name goes first.")
// }
// else if (hacker1.localeCompare(hacker2)=== 1) {
//   console.log("Yo, the navigator goes first definitely.")
// }
// else if (hacker1.localeComapare(hacker2)=== 0) {
//   console.log("What?! You both have the same name?")
// } 

// console.log(hacker1.length);
// console.log(hacker2.length);


// console.log(hacker1.localeCompare(hacker2) === hacker2.localeCompare(hacker1) );
// console.log(hacker1.localeCompare(hacker2) === hacker2.localeCompare(hacker1) );


// const firstString  = 'The driver\'s name goes first.';
// const secondString= 'Yo, the navigator goes first definitely.';
// const thirdString = 'What?! You both have the same name?';

// console.log(firstString.length)

// console.log(secondString.length)

// console.log(thirdString.length)
// if (firstString.localeCompare(secondString)) {
//   // console.log(firstString.localeCompare(secondString));
//   console.log("The driver's name goes first.")

// }
// else if (secondString.localeCompare(firstString)) {

//   console.log("Yo, the navigator goes first definitely.")
// }
// else if (firstString.localeCompare(secondString) === secondString.localeCompare(firstString)) {
//   console.log("What?! You both have the same name?")
// }


//_____________________________________________________
// Bonus 1 
//_____________________________________________________

const newStoryTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a faucibus mauris, varius mattis purus. Praesent at nulla porttitor, rhoncus libero ac, ornare dolor. Integer suscipit vitae est non pharetra. Aenean consequat est lobortis felis congue, in mollis sem iaculis. In dapibus ultrices quam, nec fermentum nunc pulvinar nec. Morbi vitae sem et lorem dapibus feugiat vitae et lorem. Nunc venenatis purus vel nisi faucibus, a ornare magna placerat. Suspendisse quis elit vel dui volutpat accumsan. Vivamus ac orci dui. Nulla finibus tincidunt turpis in aliquet. Etiam eu augue quis lectus rutrum ultrices. Suspendisse potenti. Nulla facilisi.Pellentesque egestas ligula vitae dui ullamcorper vulputate. Maecenas tellus justo, tincidunt vel aliquam sit amet, ullamcorper id lacus. Nulla mi risus, varius at aliquam a, elementum at est. Donec mi risus, congue eu sem non, tempus tincidunt urna. Aenean in lectus eu est pretium egestas. Etiam orci sem, elementum rhoncus egestas a, aliquam in elit. Nullam ac lacus at magna sodales feugiat vitae molestie ex. Vivamus maximus id neque venenatis tempus. Curabitur commodo est in ante dignissim, in lacinia est vestibulum. Vestibulum porttitor dui in dui ultricies, id tempor augue imperdiet. In mattis lorem ut libero interdum lacinia. Proin imperdiet non justo id consequat. Praesent placerat lacinia elementum. Curabitur dictum feugiat felis et elementum. Suspendisse ut cursus est. Suspendisse elementum consectetur fermentum. Duis vel maximus purus. In erat massa, viverra ac tincidunt at, euismod at purus. Phasellus eget sapien et massa luctus rutrum. Donec ac est id odio ullamcorper euismod. Sed ut augue iaculis, commodo dui non, semper metus. Suspendisse luctus nec mauris eget dignissim. In hac habitasse platea dictumst. Ut tempus diam a fermentum finibus. Cras auctor ante purus, ac accumsan tellus molestie in. Sed nec dolor lorem. Duis eros odio, molestie a metus nec, ornare ultrices nisi. Proin dui risus, tincidunt sit amet nulla sed, pretium eleifend lectus. Nulla facilisi. Integer sed molestie orci. Praesent quis porta odio.'

const turnToArray = newStoryTwo.split(' ');


let anotherCount = turnToArray.length;
console.log(anotherCount);

// ---------------------------------------------------------
// Bonus 1
// ---------------------------------------------------------

const newStory = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a faucibus mauris, varius mattis purus. Praesent at nulla porttitor, rhoncus libero ac, ornare dolor. Integer suscipit vitae est non pharetra. Aenean consequat est lobortis felis congue, in mollis sem iaculis. In dapibus ultrices quam, nec fermentum nunc pulvinar nec. Morbi vitae sem et lorem dapibus feugiat vitae et lorem. Nunc venenatis purus vel nisi faucibus, a ornare magna placerat. Suspendisse quis elit vel dui volutpat accumsan. Vivamus ac orci dui. Nulla finibus tincidunt turpis in aliquet. Etiam eu augue quis lectus rutrum ultrices. Suspendisse potenti. Nulla facilisi.Pellentesque egestas ligula vitae dui ullamcorper vulputate. Maecenas tellus justo, tincidunt vel aliquam sit amet, ullamcorper id lacus. Nulla mi risus, varius at aliquam a, elementum at est. Donec mi risus, congue eu sem non, tempus tincidunt urna. Aenean in lectus eu est pretium egestas. Etiam orci sem, elementum rhoncus egestas a, aliquam in elit. Nullam ac lacus at magna sodales feugiat vitae molestie ex. Vivamus maximus id neque venenatis tempus. Curabitur commodo est in ante dignissim, in lacinia est vestibulum. Vestibulum porttitor dui in dui ultricies, id tempor augue imperdiet. In mattis lorem ut libero interdum lacinia. Proin imperdiet non justo id consequat. Praesent placerat lacinia elementum. Curabitur dictum feugiat felis et elementum. Suspendisse ut cursus est. Suspendisse elementum consectetur fermentum. Duis vel maximus purus. In erat massa, viverra ac tincidunt at, euismod at purus. Phasellus eget sapien et massa luctus rutrum. Donec ac est id odio ullamcorper euismod. Sed ut augue iaculis, commodo dui non, semper metus. Suspendisse luctus nec mauris eget dignissim. In hac habitasse platea dictumst. Ut tempus diam a fermentum finibus. Cras auctor ante purus, ac accumsan tellus molestie in. Sed nec dolor lorem. Duis eros odio, molestie a metus nec, ornare ultrices nisi. Proin dui risus, tincidunt sit amet nulla sed, pretium eleifend lectus. Nulla facilisi. Integer sed molestie orci. Praesent quis porta odio.'

let result = 0;
let wordCount = '';
for (let i = 0; i < newStory.length; i++) {
  let char1 = newStory[i];
  let char2 = newStory[i + 1];
  // console.log(i)

  if (char1 === 'e' && char2 === 't') {
    result = result + 1


  }

}
wordCount = result;
console.log(wordCount);
