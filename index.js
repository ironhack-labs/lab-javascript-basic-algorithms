let hacker1 = "Pedro";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Sandrine";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length>hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, it has ${hacker2.length} characters.`);
}
// Iteration 3: Loops
let drivercapitalized= "";
for(let i=0; i<=hacker1.length-1; i++)
  {
    drivercapitalized+= hacker1[i]+' '
  };
console.log(drivercapitalized.toUpperCase());
let navigatorreversed = "";
for (let i=hacker2.length-1; i>=0;i--)
  {
    navigatorreversed+=hacker2[i]
  }
console.log(navigatorreversed)
if(hacker1.localeCompare(hacker2)>0)
  {
    console.log("Yo, the navigator goes first, definitely.")
  }
else if(hacker1.localeCompare(hacker2)<0)
  {
    console.log("The driver's name goes first.")
  }
else { console.log("What?! You both have the same name?")}


// bonus 1 

let count = 0;
const someText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus, lectus id eleifend bibendum, magna tortor suscipit erat, sed congue risus diam pharetra ex. In venenatis arcu sed ligula cursus, sit amet fermentum lorem iaculis. Ut ac nibh vitae nibh mollis dapibus quis egestas purus. Vestibulum interdum magna mi, sed viverra est auctor ullamcorper. Maecenas efficitur enim ac libero tempor, ac pharetra nulla vestibulum. Pellentesque pretium turpis ut lorem bibendum egestas. Pellentesque et aliquet ipsum, eu volutpat nisi. Phasellus ullamcorper malesuada mi non congue. Maecenas tristique vitae quam vitae consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam consectetur eros ut nunc ullamcorper sodales. Aliquam pellentesque nisl egestas eros tincidunt, a hendrerit sem pellentesque. Sed id est finibus, vehicula tellus ac, posuere augue.
Phasellus faucibus convallis mi, id faucibus eros ullamcorper elementum. Cras vitae ante dui. Sed cursus tristique egestas. Vestibulum sollicitudin lectus eget commodo scelerisque. Duis non bibendum ligula, sed molestie felis. In et dignissim ante, id scelerisque massa. Proin dictum quis nisl in ultrices.
Vivamus aliquam tortor eu mauris vestibulum cursus. Nullam posuere vehicula enim, maximus cursus libero tristique ut. Proin non sagittis libero. Aenean id arcu molestie, consectetur lorem in, pellentesque metus. Integer condimentum orci quis elit varius porta. Quisque a libero egestas, maximus turpis ac, sollicitudin elit. Donec in congue magna. Etiam luctus, tortor a dictum venenatis, ex diam facilisis neque, et porta ante turpis sed eros. Integer vitae turpis velit. Nulla volutpat laoreet est, vel condimentum nunc elementum eget. In arcu elit, tempor eu elementum bibendum, aliquam sed neque. Cras lacinia leo felis, et posuere arcu porttitor a. Vivamus vulputate tellus ex, nec varius est molestie vitae. Nunc at aliquam nulla.`;

for (let i = 0; i < someText.length - 1; i++) {
  let specialWord = someText[i] + someText[i + 1];
  if (specialWord === "et") {
    count++;
  }
}

console.log(`The word "et" appears ${count} times.`);