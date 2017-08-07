// Names and Input
var hacker1 = 'Ryan';
console.log(hacker1);
var hacker2 = window.prompt('What is your name?');
console.log(hacker2);


//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(hacker1 + ' has the longest name, it has ' + hacker1.length +' characters');

} else if (hacker1.length < hacker2.length) {
  console.log(hacker2 + ' has the longest name, it has ' + hacker2.length +' characters');
} else {
  console.log('Wow, you both have equally long names, ' + hacker2.length +' characters!');
}

// Loops


var hacker2 = 'Ernesto';

function hackerUno(name) {
  return name.toUpperCase().split(' ').join(' ');
}

function hackerDos(name) {
  return name.split('').reverse().join('');
}

if (hacker1 > hacker2) {
  console.log(hacker2 + ' goes first');

} else if (hacker1 < hacker2) {
  console.log(hacker1 + ' goes first');
}

// Palindrome

var string = "A man, a plan, a canal, Panama!";

var palin = (string.split(' ').join('').toLowerCase().match(/[\w]/g).join(''));

if (palin === palin.split('').reverse().join('')) {
  console.log('We have a Palindrome!');

} else {
  console.log('This is not a Palindrome');
}
// Lorem ipsum generator

var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nisl condimentum metus iaculis, quis luctus ante aliquet. Pellentesque vitae ultrices lectus. Ut in egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate nibh vel mi consectetur convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec porttitor purus. Donec sagittis pellentesque euismod. Mauris pellentesque magna non finibus pulvinar. In bibendum id ligula at sodales. Fusce at fringilla arcu, ac tincidunt est. Donec massa urna, maximus sed justo sodales, luctus aliquet ante. Nulla dictum tristique pharetra. Nunc tincidunt risus nulla, a vehicula orci venenatis quis. Aenean lacinia maximus odio nec hendrerit. Aenean posuere nunc eget sapien rutrum, in bibendum urna blandit. Ut scelerisque enim nibh, eget aliquet metus hendrerit vel. Aenean eget felis aliquam, scelerisque velit non, dignissim sem. Praesent sit amet ligula tortor. Duis eu leo nec massa viverra lacinia nec quis neque. In id rutrum justo. Donec finibus porttitor ornare. Mauris ut metus sollicitudin, bibendum ante sed, vulputate sapien. Maecenas nec risus non quam varius elementum. Sed tristique tortor id congue cursus. Phasellus cursus sed risus at pulvinar. Pellentesque ligula diam, maximus eu lacinia eu, lacinia et ipsum. Vivamus imperdiet mattis venenatis. Aliquam erat volutpat. Vestibulum dignissim ex et justo vulputate, non condimentum sem pretium. Curabitur nisl diam, suscipit quis elementum at, pulvinar eget urna. In blandit felis quis orci consectetur convallis. Mauris malesuada tortor odio, in efficitur neque dictum eu. Curabitur vulputate, lacus convallis feugiat pharetra, est felis eleifend justo, sed finibus libero massa malesuada tortor. Fusce sollicitudin fringilla dolor eu molestie. Nunc venenatis purus eget massa interdum ullamcorper. Fusce dictum, nisl sit amet lacinia rutrum, nulla odio pharetra erat, vestibulum volutpat orci mauris eu nibh. Nam nec sapien semper, lobortis mi eu, interdum libero. Donec ac nisl ac lectus molestie condimentum vitae ut nulla. Nulla facilisi.';

var count = ipsum.split(' ').length;
var array = ipsum.split(' ');
var x = 0;
for (i=0; i<count; i++) {
  if (array[i] === 'et') {
    x++;
  }
}

console.log(x);
