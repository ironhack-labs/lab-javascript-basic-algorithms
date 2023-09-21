// Iteration 1: Names and Input

let hacker1 = "cecile";
console.log(hacker1);

let hacker2 = "anastasia";
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${cecile} characters`);
} else if (hacker2.length > hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${anastasia} characters`
  );
} else hacker1.length === hacker2.length;
{
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops

let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i] + " ";
}

console.log(newHacker1.toUpperCase());

let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i] + "";
}

console.log(newHacker2);

if ("newHacker2" > "newHacker1") {
  console.log(`The driver's name goes first`);
} else if ("newHacker2" < "newHacker1") {
  console.log(`Yo, the navigator goes first, definitely`);
} else "newHacker1" === "newHacker2";
{
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula est sit amet orci pretium hendrerit. Nullam pulvinar lectus ut elit consequat, eget varius felis sagittis. In interdum eros nec orci tristique, vitae lacinia dui volutpat. Ut ultrices interdum diam, eget bibendum neque pulvinar eget. Aliquam erat volutpat. Aenean faucibus, libero in laoreet blandit, magna tellus gravida tortor, vel eleifend sem est sit amet mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut tortor neque, sagittis ut neque et, rutrum auctor nibh. Sed hendrerit ante consequat lectus cursus, vitae auctor felis vehicula. Suspendisse potenti. Suspendisse vel erat congue, dapibus libero sit amet, vehicula ipsum. Mauris molestie sem a hendrerit mollis. Nunc tempus dignissim sapien, ac finibus libero dignissim eu. Integer volutpat, augue et tincidunt consectetur, elit odio semper mi, aliquet feugiat lectus nunc in sem. Sed pharetra vehicula felis sed vestibulum. Aenean pulvinar justo tincidunt neque tempor, ac tincidunt elit placerat. Cras molestie urna leo, sed vestibulum purus ultricies non. Donec auctor libero ut eleifend volutpat. Sed congue enim leo, et bibendum purus fermentum in. Etiam posuere fringilla ipsum in bibendum. Curabitur blandit, est at tempus placerat, velit nisl posuere felis, sit amet auctor diam neque sed urna. Suspendisse quis sollicitudin ex. Donec dictum, urna vitae rhoncus dapibus, magna purus consectetur metus, a pretium dui mi eget neque. Fusce dui neque, ultrices id nibh id, fringilla scelerisque sapien. Aliquam eget ornare metus, non imperdiet quam. Quisque bibendum massa in sapien vestibulum aliquam. Phasellus tincidunt efficitur tellus, ornare fringilla est ornare finibus. Maecenas semper facilisis mauris. Cras ut metus a dolor faucibus egestas. Cras tristique fringilla maximus. Aenean rutrum blandit lorem dignissim ornare. Phasellus at tellus turpis. Quisque aliquam lacus sed velit iaculis vehicula. Nam diam nisl, pulvinar quis risus quis, venenatis porttitor augue. Nulla pellentesque luctus dapibus. Duis nisi nisl, convallis nec tortor at, feugiat suscipit diam. Etiam nisi massa, sodales vitae commodo id, ullamcorper et nunc. Etiam et tellus fringilla, ullamcorper mi vitae, pellentesque velit. Nulla eget scelerisque nibh, sed placerat libero. Aliquam sit amet facilisis nisi. Vivamus pretium efficitur viverra.";
console.log(longText);

function WordCount(longText) {
  return longText.split("").length;
}
console.log(WordCount("longText"));
