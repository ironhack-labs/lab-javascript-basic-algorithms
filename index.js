// Iteration 1: Names and Input
const hacker1 = "Eleni";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Marta";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }

    else{
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

    }

// Iteration 3: Loops
let hacker1Modified = "";

for(let i = 0; i < hacker1.length; i++ ){
    hacker1Modified += hacker1[i].toUpperCase();
    if(i=== (hacker1.length-1)){
        continue
    }
    hacker1Modified += " ";
}

console.log(hacker1Modified);

let hacker2Modified = "";

for(let i = (hacker2.length-1); i >= 0; i-- ){
    hacker2Modified += hacker2[i];
}

console.log(hacker2Modified);

if (hacker1 === hacker2){
     console.log("What?! You both have the same name?");
} else {
    if(hacker1.localeCompare(hacker2) < 0){
        console.log("The driver's name goes first.");
    }else{
        console.log("Yo, the navigator goes first, definitely.");
    }
}

// Bonus 1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper ac lorem sit amet viverra. Donec ac risus ac augue consequat tristique a vel dui. Maecenas ornare, purus in malesuada viverra, elit lacus euismod lectus, nec feugiat arcu tellus ut arcu. Maecenas vel eros ipsum. Donec at magna odio. Ut vestibulum massa non nulla tempor porttitor et ut arcu. Donec vel sapien quis nisi venenatis hendrerit ut at nibh. Quisque interdum pellentesque felis, venenatis tempor magna porta sed. Ut vitae dictum dolor. Praesent mi tellus, bibendum eget sodales eu, rutrum sit amet turpis. Maecenas aliquam porttitor est. Nullam bibendum tortor quis justo dignissim vehicula. Maecenas ullamcorper vehicula orci ornare gravida. Duis sit amet tellus a magna feugiat feugiat non vel urna. Ut auctor leo nulla, et tincidunt enim blandit sit amet. Curabitur dignissim faucibus pharetra. Curabitur ut orci ac ante dignissim lobortis. Proin non libero diam. Sed turpis purus, ultricies ac pellentesque quis, ullamcorper quis nibh. Etiam fermentum nunc quis sem blandit, sit amet venenatis lectus tempus. Donec fermentum vehicula enim eu vulputate. Proin aliquet leo ac erat interdum lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc a justo in sapien varius interdum. Vestibulum quis nisi libero. Etiam rutrum tempus ultricies. Quisque elit tellus, imperdiet sit amet bibendum vitae, rutrum quis orci. Vestibulum malesuada, sapien in tincidunt mattis, lectus mi tristique quam, ac placerat velit mi blandit urna. Sed eget aliquet dolor, ut ultricies velit. Maecenas vel nibh orci. Suspendisse potenti. Sed eget tempor ipsum, eget pretium tellus. Nulla sed lacinia elit.";

let wordCount = 0;
let actualChar = "";
let nextChar = "";

for (let i = 0; i < longText.length; i++) {
  actualChar = longText[i];
  nextChar = longText[i + 1];

  if (
    nextChar === " " ||
    nextChar === "." ||
    nextChar === "," ||
    nextChar === "!" ||
    nextChar === "?"
  ) {
    switch (actualChar) {
      case " ":
      case ".":
      case ",":
      case "!":
      case "?":
        continue;

      default:
        wordCount++;
    }
  }
}

console.log(wordCount);


// Bonus 2

/*"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

let phraseToCheck = "Amor, Roma";
let phraseToCheckClean = "";
let phraseToCheckReverseClean = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    switch (phraseToCheck[i]){
      case " ":
      case ".":
      case ",":
      case "!":
      case "?":
      case "'":
      case '"':
        continue;
    default:
      phraseToCheckClean += phraseToCheck[i];
    }
}

for (let i = (phraseToCheckClean.length-1); i >=0 ; i--) {
      phraseToCheckReverseClean += phraseToCheckClean[i];
}

if (phraseToCheckClean.toLowerCase() === phraseToCheckReverseClean.toLowerCase()){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}