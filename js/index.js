// Iteration 1: Names and Input
const hacker1 = 'Juliana';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Monishka';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.lengh}  characters.`);
  } 
  else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } 
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

let result = '';
for (let i = 0; i < hacker1.length; i++)  {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

let res = '';
for (let i = hacker2.length - 1; i >= 0; i--)  {
  res += hacker2[i];
}
console.log(res);

if (checkOrder === -1) {
    console.log('The driver\'s name goes first.');
  } else if (checkOrder === 1) {
    console.log('Yo, the navigator goes first definitely.');
  } else {
    console.log('What?! You both have the same name?');
  }

// Bonus 1
let text = "Fusce ex tortor, commodo gravida varius non, vestibulum at leo. Fusce vel ligula sem. Cras ornare sem mauris, ac venenatis nunc et commodo ut. Curabitur pellentesque justo vitae neque egestas sagittis. Sed id porttitor leo, sit amet consectetur ipsum. Phasellus accumsan est massa, non interdum sapien tempor ut. In eros et ante, cursus dignissim ultricies vitae, iaculis eget sem. Vestibulum rhoncus rutrum porta. Curabitur imperdiet suscipit massa, eget egestas mi tempus vel. Nulla vel efficitur felis. Sed ullamcorper accumsan ligula, vitae et semper erat dignissim sit amet. Sed at dui at massa blandit commodo hendrerit a tellus. Vivamus mi erat, dignissim ut dictum eget, fringilla a sapien. Duis massa elit, sagittis vitae consectetur a, tincidunt at neque. Sed ut tincidunt arcu.";

let count = 0;

   let words = text.split(" "); 
    for (i = 0 ; i < words.length ; i++){
       if (words[i] != '') {
          count += 1;
       }
    }
console.log(`There are ${count} words in the text.`);

let countEt = 0;

   let wordsEt = text.split(" "); 
    for (j = 0 ; j < wordsEt.length ; j++){
       if (words[j] === 'et') {
          countEt ++;
       }
    }
console.log(`The word "Et" appears ${countEt} times.`);