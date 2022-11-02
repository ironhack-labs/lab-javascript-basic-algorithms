// Iteration 1: Names and Input


let hacker1 = "Carla"
console.log(`The drive's name is ${hacker1}`);

let hacker2 = "Marco"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.lenght > hacker2.lenght){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1 < hacker2.lenght){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


//### Iteration 3: Loops
//3.1

let printSeparatedName = "";

for (let i = 0; i < hacker1.length; i++) {
    printSeparatedName += `${hacker1[i].toUpperCase()} `
}
console.log(printSeparatedName);

// optional 
  console.log(hacker1.toUpperCase().split('').join(' '))
  

//  3.2 Print all the characters of the navigator's name, in reverse order. 
 
let nameReverse = "";

for (let i = hacker1.length - 1; i >= 0; i--){
  nameReverse += hacker1[i]
}
console.log(nameReverse)
  
//3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
/*    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`
*/

if (hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name goes first.`)
}
else if (hacker1.localeCompare(hacker2) === 1){
  console.log(`Yo, the navigator goes first definitely.`)
}
else{
  console.log(`What?! You both have the same name?`)
}



/*#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
*/


let lorenIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget finibus nunc. Nam sapien mauris, gravida vitae enim quis, aliquam maximus arcu. Etiam venenatis risus in aliquet laoreet. Nunc pulvinar, lacus id commodo ultricies, neque odio tincidunt ligula, a venenatis turpis dolor a metus. Maecenas tempus augue eget molestie maximus. Aenean ut semper quam, volutpat sagittis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque laoreet volutpat nunc at commodo. Morbi faucibus, turpis a pharetra fermentum, metus velit semper magna, vitae pellentesque ligula elit vitae nibh. Nunc pharetra ullamcorper justo, quis semper nisl vestibulum rhoncus. Donec placerat ante justo, eget lobortis nisi interdum nec. Nullam interdum ex non sagittis aliquam. Proin pulvinar et dolor non pharetra. 
Morbi facilisis pellentesque imperdiet. Praesent congue vitae nibh pulvinar dignissim. Sed vitae sapien egestas, efficitur dolor in, auctor lorem. Praesent facilisis consequat purus ut tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in arcu porta, ultricies ante id, dictum libero. In porttitor ornare orci, eget rutrum ipsum feugiat id. Etiam imperdiet ultrices risus, sed porttitor sem congue ac. Pellentesque vel tincidunt nisl. Pellentesque tempus libero tristique tortor tristique, in consectetur ipsum ornare. Sed eu eros eget sapien commodo aliquet. Suspendisse potenti. Nunc nec augue turpis.
Donec diam ex, luctus sed fermentum id, tempus sed arcu. Duis vehicula turpis ante, quis ultricies quam tempus nec. Morbi ut orci mi. Integer non risus nec tellus condimentum fermentum. Vivamus lorem sapien, consequat et molestie vel, tempus ut augue. Curabitur leo augue, venenatis quis placerat vel, lacinia eget lectus. Etiam non accumsan nisl. Phasellus cursus cursus malesuada. Vestibulum rutrum scelerisque vehicula. Curabitur varius ultrices nunc, et porta felis rutrum sit amet.";
//spacing line will give an issue?

let wordArray = lorenIpsum.split(" ");
console.log(wordArray.length);

var count = (lorenIpsum.match(/et/g) || []).lenght;
console.log(count);

