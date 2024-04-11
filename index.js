// Iteration 1: Names and Input
let hacker1 = "3group";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "3group_nav";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length)
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let newname = " ";

for (let i = 0; i <= hacker1.length - 1; i++) {
  newname = newname + hacker1[i].toUpperCase();
  newname = newname + " ";
}

console.log(newname);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

if (hacker1.length < hacker2.length) {
  console.log(`The driver's ${hacker1} goes first.`);
} else if (hacker1.length === hacker2.length)
  console.log("What?! You both have the same name?");
else {
  console.log("Yo, the navigator goes first, definitely.");
}

let longtext =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium tincidunt nisl quis scelerisque. Aliquam tincidunt erat in quam interdum, vitae sodales risus sodales. Vivamus consectetur, ante sed varius eleifend, nunc orci bibendum mi, eu interdum nunc purus non neque. Phasellus efficitur placerat imperdiet. Donec eu ipsum sed massa viverra interdum. Suspendisse ac molestie erat. In dapibus libero eget ultricies venenatis. Mauris non tincidunt ante. Mauris id imperdiet ipsum, eu tincidunt odio. Maecenas turpis tortor, sodales at nibh id, pulvinar ultricies turpis. Morbi at vestibulum diam. Vivamus non interdum erat. Nulla facilisis urna nec ex tempor, vitae congue lectus tempus. Nullam feugiat pulvinar leo, sit amet laoreet odio. In hac habitasse platea dictumst. Proin quis neque ut est aliquet luctus. Suspendisse risus felis, interdum id euismod facilisis, aliquam vitae augue. Praesent at lorem ut sapien sodales consequat. Morbi tristique, leo et sollicitudin pretium, justo tortor pellentesque augue, eu luctus enim odio vitae eros. Mauris sapien nisl, vehicula non nunc eget, porta maximus est. Sed vitae ornare mauris, et ultricies elit. Vivamus posuere tellus ac cursus fermentum. Pellentesque aliquet in odio maximus rhoncus. Donec accumsan dignissim ipsum. Aliquam blandit nisl in mattis sodales. Suspendisse non sem velit. Ut vehicula diam ligula, faucibus posuere nisi lobortis id. Vestibulum tincidunt elementum augue et porttitor. Duis aliquet non orci ac finibus. Morbi arcu diam, rutrum sit amet commodo sed, mattis in nisi. Nulla fringilla urna quis turpis condimentum, at tempus felis rhoncus. Vivamus nec egestas felis. Ut rhoncus vulputate elit non gravida. Nullam eleifend, tellus sagittis pharetra rutrum, magna ante gravida mauris, ac scelerisque turpis nisl non ligula. Sed quis ipsum diam. Nam aliquet sem porttitor hendrerit feugiat. Integer fermentum, magna in varius mollis, nisl nibh sodales nisl, vel scelerisque libero purus ac orci. In hac habitasse platea dictumst. Nunc nec pulvinar ligula, sit amet maximus nulla. Duis sit amet malesuada magna. Sed pharetra volutpat lacus nec mollis. Nullam ut velit felis. Etiam vitae turpis lacus. Etiam ante tortor, semper non ex in, pellentesque consectetur leo. Curabitur interdum viverra interdum. Phasellus auctor leo at felis dignissim, consectetur eleifend felis eleifend. Nunc at risus non nisi ultrices vehicula. Nunc convallis consectetur mauris, maximus tempor urna semper in. Sed sapien eros, laoreet sit amet sollicitudin non, commodo nec quam. Cras molestie nisl eros, ut dictum elit vehicula ac. Nulla facilisi. Pellentesque magna tortor, tincidunt a vestibulum vitae, facilisis nec velit. Suspendisse sit amet blandit purus, eget ultricies ligula. Nunc tincidunt ligula nec blandit ornare. Nulla facilisi. Maecenas placerat accumsan magna, et rutrum nisl sodales in.";

console.log(longtext.length);
let longtextSplit =
  longtext.split("et").length + longtext.split("Et").length - 1;
console.log(longtextSplit);

let phraseToCheck = "Was it a car or a cat I saw?";


let cleanedPhrase = phraseToCheck.toLowerCase().replace(' ','');


let reversedPhrase = cleanedPhrase.split('').reverse().join('');


if (cleanedPhrase === reversedPhrase) {
    console.log("Its that name we give when i can read the same backwards");
} else {
    console.log("I dont know... I really dont know what im writing.");
}



