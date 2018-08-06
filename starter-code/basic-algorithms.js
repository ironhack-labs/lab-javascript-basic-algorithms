// Names and Input
var hacker1 = "Name";
console.log("the driver name is " + hacker1);


var hacker2= prompt("what is your user name ?");
console.log("the navigator's name is " + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has " + hacker1.length +" characters");
  }
  else if (hacker2.length > hacker1.length){
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  }
  else{
    console.log("wow, you both got equally long names, "+ hacker1.length + " characters!!");
  }

var hacker1Upp = hacker1.toUpperCase();
console.log(hacker1Upp);
console.log(hacker1Upp.split('').join(' '));

console.log(hacker1.split("").reverse().join(""));

var lexicoSort = [hacker1, hacker2];
lexicoSort.sort();
console.log(lexicoSort);
if (lexicoSort[0] = hacker1 ){
  console.log("The driver's name goes first");
} else if (lexicoSort[0] = hacker2){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

var palin = prompt("Say something");
var reversePalin = palin.split("").reverse().join("");
if (reversePalin === palin){
  console.log("it is a palin");
}
else if (reversePalin !== palin){
  console.log("it is not a palin");
}


// Lorem ipsum generator
var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis aliquam sapien a posuere. Vestibulum vel ligula condimentum, ultrices mauris et, dignissim risus. Suspendisse potenti. Quisque ultricies ligula non sem tristique porta. Duis tempor, nulla ut mattis scelerisque, libero nisi malesuada nisi, vitae tristique justo odio vitae enim. Quisque lobortis venenatis dui, quis bibendum turpis auctor ut. Morbi neque sem, aliquam vulputate eros sed, ullamcorper ullamcorper nulla. Vestibulum eget libero id neque ultrices vulputate. Nunc tincidunt metus quis tellus placerat, quis laoreet sem rhoncus. Donec tristique augue non eleifend ultricies. Suspendisse id lectus at diam commodo aliquet id non orci. Etiam urna urna, facilisis sit amet lobortis vitae, tincidunt nec lorem.Pellentesque id dapibus mi, eu eleifend nisi. Vivamus vel tellus efficitur, rhoncus ante in, tincidunt tortor. Maecenas semper at ante a congue. Maecenas nec arcu erat. In semper mauris vitae ipsum condimentum pharetra. Pellentesque id velit vitae diam varius efficitur nec vel enim. Nam a iaculis augue. Integer molestie massa eget elit semper, eu egestas arcu placerat. Nullam quis ultricies purus. Suspendisse nec mollis nisi. Maecenas ut risus placerat, tincidunt nisi et, tempor quam. Aliquam non vestibulum felis. Vestibulum sit amet facilisis ligula, ut lacinia dolor. Donec porta, neque ut condimentum venenatis, lectus augue interdum sem, non tristique purus velit ut libero. Donec sagittis, nunc sed mattis bibendum, felis leo accumsan diam, nec ultrices enim sem non felis. Curabitur vestibulum semper justo, efficitur tincidunt neque luctus eget. Sed mollis mauris nec eros pellentesque aliquet. In a orci semper, elementum dui in, congue nisi. Pellentesque maximus pulvinar nulla, quis tempus nisi vestibulum et. Ut sit amet ornare orci. Integer odio leo, ullamcorper nec efficitur quis, varius ac augue. Praesent et imperdiet nunc. Etiam justo urna, laoreet non lectus quis, iaculis pulvinar purus."
console.log(paragraphs.split(" ").length);
console.log(paragraphs.split(" et").length);
