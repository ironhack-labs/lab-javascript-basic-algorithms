
//1.
let hacker1 = 'Marianna';

//2.
console.log('The driver\'s name is: ' + hacker1);

//3.
let hacker2 = prompt("What\'s the navigator\'s name?");

//4.
console.log('The navigator\'s name is: ' + hacker2);

//5.
if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
}
else if (hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}
else {
    console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

//6.
console.log(hacker1.split('').join(' ').toUpperCase());

//7.
let str = hacker1;
str2 = str.split('').reverse().join('');

console.log(str2.slice(0, str2.length - 1) + str2[str2.length - 1].toUpperCase());

//8.
let names = [hacker1, hacker2];
let orderNames = names.sort();
console.log(orderNames);

if (hacker1 === hacker2) {
    console.log('What?! You both got the same name?');
} else if (orderNames[0] === hacker1) {
    console.log('The driver\'s name goes first');
} else if (orderNames[0] === hacker2) {
    console.log('Yo, the navigator goes first definitely');
}

//9.
let str = prompt('Digite a palavra');

if (str.toLowerCase() === str.split('').reverse().join('').toLowerCase()) {
    console.log('É um palíndromo');
} else {
    console.log('Não é um palíndromo');
}

//10. 
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis. Eu volutpat odio facilisis mauris sit amet massa vitae. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Integer malesuada nunc vel risus commodo viverra. Amet justo donec enim diam vulputate ut pharetra. Id venenatis a condimentum vitae. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Porta non pulvinar neque laoreet. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Morbi tempus iaculis urna id volutpat lacus laoreet non. Elementum nisi quis eleifend quam adipiscing vitae proin. Eget dolor morbi non arcu risus quis varius quam. \nCursus in hac habitasse platea dictumst. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Proin nibh nisl condimentum id venenatis a condimentum vitae. Morbi tempus iaculis urna id volutpat lacus. Justo laoreet sit amet cursus sit amet dictum sit. Non diam phasellus vestibulum lorem sed risus ultricies. Volutpat lacus laoreet non curabitur. Risus nec feugiat in fermentum posuere. Nunc lobortis mattis aliquam faucibus purus. Eu non diam phasellus vestibulum lorem. \nUltrices dui sapien eget mi proin sed libero enim. Ornare arcu dui vivamus arcu felis. Faucibus interdum posuere lorem ipsum dolor sit amet. Auctor elit sed vulputate mi sit amet mauris commodo quis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Vulputate eu scelerisque felis imperdiet proin fermentum. Euismod quis viverra nibh cras pulvinar mattis nunc. In tellus integer feugiat scelerisque varius morbi enim. In pellentesque massa placerat duis ultricies lacus sed. Tortor dignissim convallis aenean et tortor at risus viverra.'

console.log(loremIpsum.split(' ').length);

let count = 0;
for(let i = 0; i < loremIpsum.split(' ').length; i += 1){
    if(loremIpsum.split(' ')[i] === 'et')
        count += 1;
}

console.log(count);