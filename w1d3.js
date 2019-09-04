let hacker1 = "marcos";
let hacker2 = "gabriel";

console.log(`the drive´s name is ${hacker1}`);
console.log(`the navigator´s name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);

} else if (hacker2.length > hacker1.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both got equally long names, XX characters!`);
}

let newName = '';

for (let i = 0; i < hacker1.length; i += 1) {
  newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName);

let newName2 = '';

for (let i = hacker2.length - 1; i >= 0; i -= 1) {
  newName2 += hacker2[i];
}

console.log(newName2);

if (hacker1.localeCompare(hacker2) == 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker2.localeCompare(hacker1 == 1)) {
  console.log(`The driver's name goes first.`);
} else {
  console.log("What?! You both got the same name?");
}
let bonus = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum metus dui, ut scelerisque felis lacinia ultrices. Pellentesque vel tincidunt nunc, ac imperdiet enim. Quisque rutrum, nibh laoreet dapibus pellentesque, sapien lectus auctor orci, eget sodales ipsum eros nec felis. Ut gravida, est ut tempus tempus, ante lacus semper erat, vitae ullamcorper dui libero at sem. Aliquam congue, erat eget tincidunt fermentum, tortor dolor consectetur sapien, quis pharetra felis lacus ut est. Donec nec urna at mauris vestibulum pulvinar. Morbi nibh diam, tincidunt eget enim et, gravida scelerisque tellus. Quisque nec tincidunt metus. Cras metus tellus, pulvinar at justo ac, lobortis sodales justo. Ut blandit quis magna non pretium. Curabitur a venenatis arcu. Fusce elementum nec sem id euismod.Nunc diam eros, porta nec ante quis, laoreet faucibus quam. Sed sit amet sem a nibh luctus fringilla. Curabitur aliquet in est sed rhoncus. Donec sed lorem ac nulla posuere placerat ut nec enim. Etiam tempus ante est, vel vehicula neque dictum nec. Integer non vestibulum erat. Proin non ipsum urna. Proin ultricies arcu dolor, in efficitur tellus faucibus et. Donec aliquam pulvinar sollicitudin. Proin cursus, libero a feugiat tincidunt, justo dolor ullamcorper eros, quis interdum nisl ipsum non tortor. Quisque aliquam nunc vitae diam tincidunt rhoncus. Cras cursus lorem quis malesuada maximus.Sed auctor purus at libero mollis, quis molestie ligula mattis. Duis efficitur elit vitae purus tristique finibus. Nulla imperdiet dictum imperdiet. Integer fermentum augue vitae erat vehicula feugiat. Nunc auctor facilisis tristique. Nullam feugiat lorem erat, et vehicula leo commodo ac. Aliquam in lectus quis purus egestas iaculis nec eget odio. Suspendisse in nisi fermentum, cursus mauris dapibus, finibus lacus."


let counter = 0;
for (i = 0; i < bonus.length; i += 1) {
  if (bonus[i] == " ") {
    counter += 1;
  }
}
console.log(counter);

let counterEt = 0;
for (i = 0; i < bonus.length; i += 1) {
  if (bonus[i] + bonus[i + 1] == "et" && bonus[i - 1] == " ") {
    counterEt += 1;
 }

}
console.log(counterEt);
