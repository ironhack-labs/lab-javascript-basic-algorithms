// Iteration 1: Names and Input
let hacker1 = 'Fernando';

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Francisco';

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let driverName = '';

for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i] + ' ';
}

console.log(driverName.toUpperCase());

let navigatorName = '';

for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorName += hacker2[j];
}

console.log(navigatorName);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id turpis non lorem feugiat posuere non ut ligula. In eu aliquam risus. Sed varius neque nisl, at iaculis turpis sagittis sit amet. Sed bibendum lorem erat. Curabitur vitae laoreet magna. Aliquam malesuada, augue eget pellentesque feugiat, lorem nibh faucibus lacus, id mattis nibh quam vitae tortor. Praesent gravida scelerisque viverra. In tristique sapien velit, non tincidunt lacus interdum at. Duis vulputate, sem sed venenatis rutrum, lacus felis faucibus diam, sed vestibulum tortor dolor et eros.

In id mauris malesuada, varius massa ut, luctus risus. Aenean in fringilla velit, ac posuere dolor. Etiam molestie dignissim quam, nec fringilla mi. Ut in mauris quis elit elementum rhoncus id et orci. Donec gravida, ante quis imperdiet vulputate, augue leo mattis ex, at tempus elit dui ac magna. In dapibus convallis scelerisque. Nam augue purus, gravida non malesuada at, sodales varius magna. Vestibulum iaculis lectus eros, a dapibus orci semper vel. Sed faucibus, mauris non iaculis convallis, dolor nibh varius nisi, gravida efficitur ipsum neque non est. Nullam arcu magna, cursus fermentum felis sed, dictum pellentesque quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc aliquam, mauris eget laoreet viverra, libero sapien tempor arcu, vitae varius orci sapien ut mauris. Nunc sed lacus a elit lobortis eleifend at sed magna. Pellentesque ac rhoncus erat. Nam nec vulputate mauris. Aenean vel turpis sit amet nibh mattis ultricies vel quis urna.

Nulla laoreet vel augue nec convallis. Fusce aliquam, metus id mollis lacinia, orci justo feugiat orci, at placerat felis massa non elit. Fusce ornare est diam. Sed leo velit, laoreet ut nulla id, blandit porttitor nulla. Duis tincidunt magna lacus, sit amet mattis massa finibus a. Nulla eu tristique purus. Mauris elementum ante sit amet venenatis maximus. Proin egestas lectus in porttitor mattis. Nulla facilisi. Sed gravida justo sed nunc maximus scelerisque. Curabitur sem erat, pretium id dolor eu, facilisis placerat nibh. Nulla sagittis augue nulla, vel molestie ex euismod a. Nullam sed nisl a augue faucibus convallis. Praesent elementum ac quam sed tincidunt. Duis ornare magna sed lorem bibendum dapibus. Sed tellus tellus, feugiat in ornare nec, vestibulum quis urna.`;

function WordCount(str) {
  return str.split(' ').length;
}

console.log(WordCount(loremIpsum));

function countInstances(str, word) {
  return str.split(word).length;
}

console.log(countInstances(loremIpsum, 'et'));
