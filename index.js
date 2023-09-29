// Iteration 1: Names and Input
const hacker1 = "Vladimir";

console.log (`The driver's name is ${hacker1}`);

const hacker2 = "Zvonimir";

console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }
// Iteration 3: Loops
let newName = '';

for (let i = 0; i < hacker1.length; i++) {
  const charUpperCase = hacker1[i].toUpperCase()

  newName += charUpperCase;
  
 if (i !== hacker1.length - 1) {
    newName += " ";
  }
 
}

console.log (newName); 

let reversedName = '';

for (let j = hacker2.length -1; j >= 0; j-- ) { 
  reversedName += hacker2[j]; 
} 

console.log (reversedName); 

if (hacker1.localeCompare(hacker2) === 1) {
    console.log ("The driver's name goes first.")
  } else if (hacker1.localeCompare(hacker2) === -1) {
    console.log ("Yo, the navigator goes first, definitely.")
  } else {
    console.log ("What?! You both have the same name?")
  } 

  //Bonus 1

  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a elit et nisi lobortis facilisis ut lobortis lectus. Maecenas sollicitudin nulla quis gravida tristique. Fusce sit amet eros semper magna vehicula lobortis. Fusce sagittis sagittis semper. Integer sit amet erat odio. Donec egestas dui ipsum, quis euismod orci interdum eu. Sed rhoncus lacus euismod felis ultricies, ultricies venenatis ex varius. Nulla quis dolor ultricies, tempus arcu a, condimentum ex. Quisque in fringilla augue. Fusce sollicitudin eleifend tellus sed condimentum. Praesent eget vehicula enim, quis finibus nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Nam id interdum neque. Phasellus id risus tempus, ultrices sem porta, gravida nibh. Suspendisse cursus arcu vulputate dolor elementum pellentesque. Praesent eu nisl posuere, semper nulla at, elementum libero. Donec aliquet venenatis risus, sit amet dictum libero ultricies sed. Morbi vitae purus velit. Vivamus venenatis scelerisque dignissim. Ut imperdiet est et condimentum dignissim. Ut ut ex interdum, porttitor augue vitae, fermentum sem. Praesent ex mi, condimentum sit amet orci sed, mollis ultrices tortor. Sed varius metus a luctus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vel lacus mauris.

Cras dictum quis mi eget imperdiet. Vivamus a consectetur enim. Curabitur hendrerit placerat volutpat. Vivamus iaculis hendrerit augue, scelerisque commodo mauris cursus a. Duis orci libero, pretium quis arcu et, sollicitudin finibus purus. Curabitur ac congue nunc. Mauris et volutpat nunc. Integer ut massa tristique, vulputate dui in, faucibus est. Nunc porttitor lorem iaculis urna porttitor eleifend. Quisque sed sapien vehicula, porta nisl eget, condimentum erat. Nam nec sapien luctus, vulputate nunc ac, lacinia libero. Integer finibus lectus sed lorem sollicitudin facilisis. Phasellus aliquam dolor non felis vestibulum, non feugiat orci scelerisque. Donec viverra tortor eget diam aliquam, pretium rhoncus enim iaculis. Phasellus dapibus mattis augue, eget viverra libero egestas vitae. In risus ante, posuere eget molestie at, vestibulum a diam.` 

let count = 0; 

for (let l = 0; longText.length > l; l++) {
  if (longText[l] === ' ') {
    count++
  }
}
console.log (count); 

for (let k = 0; longText.length > k; k++) {
    const twoLetters = longText[k] + longText[k + 1];
    if (twoLetters === "et") {
      etCount++;
    }
  } 
  
  console.log(etCount); 

  //Bonus 2


