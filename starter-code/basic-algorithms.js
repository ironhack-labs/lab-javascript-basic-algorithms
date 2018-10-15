// Names and Input
let hacker1 = 'Daniel';
console.log('The driver\'s name is ' + hacker1);

//let hacker2 = process.argv[2];
let hacker2 = prompt('What is the name of the navigator?');
console.log('The navigator\'s name is ' + hacker2);
//Conditionals
if(hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if(hacker2.length > hacker1.length) {
  console.log('o, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

let nome = "";

for(let hackloop = 0; hackloop < hacker2.length; hackloop++) {
    nome += hacker2[hackloop].toUpperCase() + ' ';
}

console.log(nome);
// Lorem ipsum generator

//let palindrome = process.argv[3]
let palindrome = prompt('What is the sentence?');
if(palindrome === palindrome.split('').reverse().join('')) {
  console.log('Its a palindrome');
} else {
  console.log('Its not a palindrome');
}

let text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio enim, finibus vel neque quis, eleifend mattis diam. Pellentesque luctus nisi tortor, a eleifend sapien aliquam id. Suspendisse auctor dolor ac rhoncus tincidunt. Duis eu elit nisi. Donec non sodales felis. Suspendisse condimentum vehicula nisi nec auctor. Maecenas et interdum mi, pretium iaculis erat. Aenean nunc tellus, placerat a pharetra at, auctor et ex. Phasellus eu orci ligula. Curabitur nec congue velit, ut maximus nisi. Morbi eu consectetur tellus, a feugiat augue. Vivamus in pretium est, non mattis ipsum. Aliquam eget arcu accumsan, malesuada tellus vitae, finibus est. Aliquam quis massa vel nulla commodo euismod.';
let text2 = 'Sed sagittis mauris quis nisl auctor euismod. Vestibulum blandit imperdiet lacus, nec ultricies tellus aliquam ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eleifend quis justo ut condimentum. Cras nec sollicitudin mauris. Vivamus sed quam in mauris dictum venenatis ac vel enim. Quisque a condimentum metus, a tincidunt magna. Aliquam nunc neque, bibendum sit amet diam vel, porttitor tristique tortor. Cras sed sagittis urna, vitae pulvinar massa.';
let text3 = 'Duis in purus sit amet neque convallis lacinia. Nam pellentesque neque ut dictum facilisis. Fusce pulvinar tincidunt libero et efficitur. Fusce a dignissim elit. Integer euismod eu leo eu luctus. Sed ac mollis est. Aliquam justo leo, suscipit vel quam a, malesuada tempus tortor. Suspendisse non maximus nulla, eget lobortis eros. Aenean a orci volutpat quam maximus rutrum vitae nec arcu. Mauris quis ipsum scelerisque, pulvinar arcu et, vulputate metus. Vivamus tristique venenatis velit vel dictum. In vel lectus quis ligula mattis pharetra. Cras vitae nulla non libero varius imperdiet sit amet et ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean imperdiet sed neque nec egestas. Proin dictum nibh enim, ac blandit neque hendrerit at.';

console.log(text1.split(' ').length + ' palavras');
console.log(text2.split(' ').length  + ' palavras');
console.log(text3.split(' ').length  + ' palavras');

if(text1.length === text1.split('et').length) {
  console.log('0 ets');
} else {
  console.log((text1.split('et').length - 1) + ' ets');
}

if(text2.length === text2.split('et').length) {
  console.log('0 ets');
} else {
  console.log((text2.split('et').length - 1) + ' ets');
}

if(text3.length === text3.split('et').length) {
  console.log('0 ets');
} else {
  console.log((text3.split('et').length - 1) + ' ets');
}