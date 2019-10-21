let hacker1 = 'Michelle';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Ignacio';
console.log(`The navigator's name is ${hacker2}.`);
if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
}
let driver = [];
let navigator = [];
for (let i = 0; i < hacker1.length; i++) {
    driver.push(hacker1.charAt(i));
}
console.log(driver.join(' '));
for (let i = hacker2.length; i >= 0; i--) {
    navigator.push(hacker2.charAt(i));
}
console.log(navigator.join(''));
if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log('The driver\'s name goes first.');
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both got the same name?');
}
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in lorem odio. Donec nec augue sit amet felis venenatis egestas. Sed rhoncus in leo at cursus. Maecenas blandit pulvinar laoreet. Ut eget consectetur risus, volutpat pulvinar dui. Nunc tempor interdum faucibus. Morbi tincidunt euismod tellus, a facilisis felis interdum ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse id erat tempus, accumsan velit id, facilisis tortor. In eros magna, feugiat ut massa eu, ullamcorper placerat ex. Phasellus laoreet odio non auctor consectetur. 
Donec aliquet, arcu vitae bibendum elementum, velit dolor vestibulum nunc, vel tempor nunc purus faucibus justo. Praesent sed porta enim, et posuere mauris. Sed non facilisis orci. Donec pretium nunc id leo feugiat, id tincidunt massa posuere. Proin ac aliquet nunc. Cras id elit sagittis, congue mauris quis, pellentesque nisi. Aliquam quis pulvinar ligula, ut tincidunt lorem. Vivamus venenatis, justo a tincidunt vehicula, purus purus accumsan metus, et consectetur quam neque ut nibh. Nulla feugiat accumsan interdum. Praesent mollis imperdiet rutrum. Maecenas luctus consequat tortor quis pulvinar. Maecenas nisl mi, ultrices at quam quis, pretium tempus sem. Maecenas lobortis interdum dui, in convallis nisl commodo ut. 
Donec scelerisque convallis rhoncus. Curabitur odio tortor, tempor quis ipsum at, dictum fringilla massa. Etiam aliquet lorem sit amet venenatis semper. Suspendisse ac laoreet risus. Praesent maximus vel ligula vel interdum. Mauris congue feugiat velit, eu interdum velit porta feugiat. Sed vel est lacus. Nunc ullamcorper dolor id libero pharetra, vel mollis lacus dapibus. Vivamus rhoncus, risus ac pharetra fringilla, magna justo ornare ipsum, sed tincidunt risus sapien non lectus. Vivamus sit amet tempor mi. Nulla facilisi. In hac habitasse platea dictumst. Integer dignissim massa eget mattis auctor. Aliquam elementum purus in dolor placerat viverra. Ut porta molestie erat ac viverra. In viverra nisi odio.`;
let wordArray = loremIpsum.split(" ");
console.log(wordArray.length);
let etCount = 0;
for (let i = 0; i < wordArray.length; i++) {
  if (wordArray[i] === 'et' || wordArray[i] === 'Et') {
    etCount++;
  }
}
console.log(etCount);