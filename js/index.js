// Iteration 1: Names and Input

const hacker1="Robert";
console.log("The driver's name is " + hacker1);

let hacker2="Daryl";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
console.log("The driver has the longest name,it has " + hacker1.length + " characters");
 } 
else if(hacker1.length===hacker2.length){
console.log("Wow, you both have equally long names, " + hacker1.lenght + " characters!");
}
else{
console.log("It seems that the navigator has the longest name, it has " + hacker2.lenght + " characters");
}

// Iteration 3: Loops

//3.1

let name = "";
for(let i=0; i < hacker1.length; i++){
    name = name + " " + hacker1[i].toUpperCase();
  }

console.log(name);
  
//3.2

let name2 = "";
for(let i=hacker2.length - 1; i >= 0; i--){
    name2 = name2 + " " + hacker2[i];
  }
console.log(name2);

//3.3

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];


if(alphabet.indexOf(hacker1[0].toLowerCase()) > alphabet.indexOf(hacker2[0].toLowerCase())){
  console.log("Yo, the navigator goes first definitely");
}
else if (alphabet.indexOf(hacker1[0].toLowerCase()) < alphabet.indexOf(hacker2[0].toLowerCase())){
  console.log("The driver's name goes first");
}
else{
  console.log("What?! You both have the same name?");
}

//BONUS 1:
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper est. Pellentesque lacus lorem, ullamcorper et molestie sed, varius at nisi. Quisque mollis ultricies maximus. Sed maximus eu velit at pellentesque. Duis eros libero, ornare vitae lobortis at, faucibus sit amet massa. Vestibulum nec felis sit amet lacus gravida sodales at vitae elit. Nunc ut finibus nisl, ac malesuada tortor. Suspendisse finibus semper ante, nec pellentesque eros aliquet ut. Phasellus et finibus dui. Vivamus consequat mi eu ultricies viverra. Mauris lectus sem, facilisis ut tortor et, lacinia varius nisl. Mauris elementum dignissim dolor. Quisque sed lorem sed sem dictum venenatis in et justo. Suspendisse dignissim mauris eros, vitae rhoncus tortor hendrerit eu. Nullam iaculis imperdiet leo, id lacinia leo tempus nec.Suspendisse ac ante luctus mauris elementum condimentum ut vitae arcu. Aliquam pellentesque dolor turpis, ut efficitur nisl consectetur sit amet. Phasellus nec molestie nunc. Nunc interdum sapien venenatis lacus efficitur cursus. Cras et tellus orci. Nunc arcu leo, imperdiet sed felis ut, aliquam ullamcorper arcu. Curabitur rutrum interdum mauris a congue. Donec luctus dictum iaculis. Proin vel congue urna, nec aliquam tellus. Sed ultrices posuere sapien in convallis. Vivamus sed nulla libero. Sed felis diam, iaculis a eros et, consectetur venenatis urna. Sed blandit facilisis mauris, quis ornare justo rhoncus et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ut pellentesque velit, quis volutpat elit. Quisque lobortis ullamcorper quam, at congue purus feugiat at."

console.log(loremIpsum.split(" "));
let loremIpsum2 = loremIpsum.split(" ");
let words = loremIpsum2.length;

let count = 0;
for(let i= 0; i < loremIpsum2.length; i++){
  if(loremIpsum2[i] == "et"){
    count = count + 1
  }
}
console.log(count);

//BONUS 2:
