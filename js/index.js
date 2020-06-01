// Iteration 1: Names and Input

const hacker1 = "Ivan Mickovski";
console.log(`The driver name is: ${hacker1}`);
const hacker2 = "Eduarda Liu";
console.log(`The navigator name is: ${hacker2}`);





// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`)
};
  




// Iteration 3: Loops

const spacedName = [];
for (let i = 0; i < hacker1.length; i++){
  spacedName.push(hacker1[i].toUpperCase())
};
console.log(spacedName.join(" "));
 
const nameBackwards = [];
for (let i = hacker2.length - 1; i >= 0; i--){
  nameBackwards.push(hacker2[i])
};
console.log(nameBackwards.join(""));

const firstLetter = 0;
if (hacker1[firstLetter] < hacker2[firstLetter]){
      console.log(`The driver's name goes first. ${hacker1}.`)
    } else if (hacker1[firstLetter] > hacker2[firstLetter]){
      console.log(`Yo, the navigator goes first definitely. ${hacker2}.`)
    } else {
      console.log(`What?! You both have the same name?`)
};





// Bonus 01

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed maximus purus. Nulla facilisi. Donec nec odio et est sagittis tincidunt. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque nibh mauris, tempus eu mollis vitae, rhoncus nec ex. Fusce non varius velit. Quisque enim tortor, accumsan pharetra eleifend quis, iaculis nec ligula. Nunc mollis sapien nec lacus facilisis consequat. Nunc nec arcu et lectus eleifend aliquet. Nam quis commodo erat. Aliquam ultricies tincidunt eros, et accumsan purus venenatis at. Quisque quis ultrices ipsum, nec vehicula ante. Suspendisse sit amet mauris iaculis, malesuada risus vitae, malesuada libero. Nunc et tellus sed lacus porta ullamcorper.

In volutpat tortor id sapien dignissim, ac lacinia urna ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam pellentesque enim in felis auctor, sit amet dictum sapien efficitur. Nunc orci tellus, maximus vitae tristique ut, tincidunt eu eros. Cras in lorem ultricies velit pulvinar accumsan. Fusce semper metus massa, consectetur sollicitudin est eleifend in. Cras porttitor, massa in placerat consectetur, neque ipsum malesuada metus, vitae ornare sem purus quis libero. Donec placerat tristique facilisis. Integer sed nisi ac eros consequat luctus sit amet non elit. Integer a cursus lectus. Praesent id mauris est.

Cras tristique ex id tempor maximus. Curabitur nunc libero, sagittis sed nunc vitae, mollis ullamcorper nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sapien odio, volutpat id nibh sit amet, rutrum rhoncus justo. Proin sagittis, magna tempor tincidunt congue, nisl nunc egestas lorem, eget interdum neque nisl scelerisque metus. Cras eros sapien, tincidunt et auctor eu, molestie nec ante. Vivamus mattis placerat orci. Duis maximus finibus augue sed ullamcorper. Mauris vitae ipsum a magna ornare ullamcorper ut id libero. Fusce consequat bibendum velit, at imperdiet elit feugiat a. Praesent accumsan luctus erat, quis auctor augue semper porttitor.`

let numOfWords = 0;
let numOfParagraphs = 3;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
  numOfWords += 1; 
  }
}
console.log(numOfWords + numOfParagraphs); // it's missing 3 cause of the three paragraphs that don't have a " " after the final words...

let numOfEts = 0;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] == " ") {
    if (loremIpsum[i+1] == "e") {
      if (loremIpsum[i+2] == "t") {
        if (loremIpsum[i+3] == " ") {
         numOfEts += 1; 
        }
      }
    }   
  }
}
console.log(numOfEts); // idk how to check if this is right + i'm sure this is a very stupid way to solve this but...





// Bonus 02

let phraseToCheck = 'arara';
let phraseToCheckBackwardsWIP = [];
    
for (let i = phraseToCheck.length; i >= 0; i--) {
  phraseToCheckBackwardsWIP.push(phraseToCheck[i]);
};

let phraseToCheckBackwards = phraseToCheckBackwardsWIP.join("");

if (phraseToCheck == phraseToCheckBackwards) {
  console.log('This variable is a Palindrome');
} else {
  console.log('Nah');
};



