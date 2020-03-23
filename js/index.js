// Iteration 1: Names and Input
let hacker1 = 'Jony'; //driver
let hacker2 = 'Paula';
console.log(`The navigator's name is ${hacker2}`);
console.log(`The driver's name is ${hacker1}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
// Iteration 3: Loops
let drivesName = ' ';
for (let i = 0; i < hacker1.length; i++) {
  drivesName += hacker1[i].toUpperCase() + ' ';
}
console.log(drivesName);

let reverseName = ' ';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] > hacker2[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (hacker1[i] < hacker2[i]) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  } else {
    console.log(`What?! You both have the same name?`);
    break;
  }
}

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus libero et lorem semper, sed lacinia diam blandit. Vivamus in eros orci. Morbi pellentesque eros nisl, vitae tincidunt urna pretium sed. Fusce a elit cursus purus rhoncus ultricies. Phasellus sit amet lectus maximus, placerat sapien fermentum, ullamcorper dolor. Curabitur sit amet varius eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Sed accumsan, diam eget blandit sollicitudin, leo velit auctor lorem, in condimentum nulla neque nec quam. Praesent pharetra enim arcu, sit amet accumsan odio placerat nec. Pellentesque dapibus, erat facilisis aliquam mollis, eros nulla rhoncus odio, eget accumsan sem libero non ipsum. Phasellus a porttitor sem. Sed consectetur et augue non tempus. Sed vulputate vehicula ligula, quis auctor nibh consectetur sed. Curabitur et elit eu ipsum sagittis varius. Etiam rhoncus ut justo at scelerisque.
Mauris mattis ac mauris eu efficitur. Morbi quis dictum felis, a convallis mauris. Phasellus tincidunt eros quis tristique vulputate. Suspendisse eros nisi, accumsan ac consequat efficitur, pretium nec dolor. Maecenas sollicitudin iaculis ex a viverra. Curabitur placerat sagittis urna, a porttitor elit posuere sit amet. Aenean sit amet tellus imperdiet magna venenatis iaculis non nec tellus. Maecenas libero nulla, pulvinar eget ipsum non, egestas facilisis dolor. Vestibulum dictum convallis orci a aliquet. Donec vitae venenatis quam, vel aliquet turpis. Nam interdum eros odio. Nam sit amet leo lacinia, sodales urna nec, ultricies leo. In nec ante nunc. Donec placerat sapien at enim suscipit, eget blandit tortor porta.`;

console.log(lorem.split('\n').length - 1 + lorem.split(' ').length);

let countEt = lorem.split(' ');
let count2 = 0;

for (let i = 0; i < countEt.length; i++) {
  if (countEt[i].includes('et') && countEt[i].length === 2) {
    count2++;
  }
}
console.log(count2);
