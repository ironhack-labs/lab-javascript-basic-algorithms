//Iteration 1:

let hacker1 = 'Julián';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Lluís';
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2:
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

//Iteration 3:
let result = '';
for(let i = 0; i < hacker1.length; i++){
 result += (hacker1[i].toUpperCase() + ' ')
}

console.log(result)


let result1 = '';
for(let i = hacker2.length - 1; i>= 0; i--){
 result1 += hacker2[i];
}

console.log(result1);




if(hacker1.localeCompare(hacker2) == -1){
  console.log(`The driver name goes first.`)
} else if (hacker1.localeCompare(hacker2) == 1){
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log('What?! You both have the same name?');
}

//Bonus

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius vitae risus vel consequat. Sed at mauris ac mi accumsan suscipit. Aliquam pharetra, mi at molestie aliquam, augue justo gravida nisi, vel rutrum dui ipsum ut enim. Cras ac molestie velit, vel efficitur odio. Ut ultricies tempor odio, sed scelerisque mauris ullamcorper ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vel ante sit amet odio vehicula consequat. Ut rhoncus imperdiet quam nec blandit. Duis varius convallis nibh sed cursu. Etiam laoreet odio non urna tristique, ac interdum urna vulputate. Proin cursus, diam et feugiat luctus, magna eros interdum ante, et semper leo turpis ac lacus. Fusce consectetur finibus est et lobortis. Nam felis ante, maximus eget augue quis, suscipit interdum felis. Etiam nec rhoncus mauris. Nunc elementum vestibulum neque, vel venenatis dui. Vivamus lorem est, sollicitudin fermentum feugiat vitae, faucibus ultricies augue. Ut tempus lectus at tortor tristique molestie. Aenean non elit a dui rhoncus ultricies. Nullam tempus sagittis risus, ut pellentesque mi luctus eu. Donec a magna a mi volutpat ultricies. Morbi feugiat mauris in ultrices scelerisque. Integer aliquet leo vel magna imperdiet, ac bibendum libero cursus. Maecenas pretium efficitur varius. Duis porta a felis in fringilla. Etiam sollicitudin urna sapien, et malesuada nibh finibus vestibulum. Integer sodales, quam ut rutrum aliquam, odio metus accumsan ante, sed semper orci magna ut nulla. Mauris blandit in sem ac efficitur. Donec quis euismod libero. Ut vehicula nisi nec velit vehicula venenatis. Curabitur sit amet dui eros. Sed sapien elit, rutrum at condimentum imperdiet, sodales ut diam. In magna augue, finibus non neque eu, bibendum laoreet nulla. Suspendisse potenti. Maecenas bibendum mollis feugiat. Etiam at vestibulum justo. Cras lacinia nisi id eros tincidunt, quis molestie turpis auctor. Maecenas luctus elementum enim ut pellentesque. Curabitur id pellentesque nisl. Ut maximus interdum lectus, vel scelerisque mauris lacinia non.';

//Bonus 1
console.log(lorem.split(' ').length)

console.log(lorem.split('et').length)
