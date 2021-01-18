// Iteration 1: Names and Input

let hacker1 = 'Thiago Herculano';

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Dominic Herculano';

console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;


if(hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters.`);
} else if(hacker2Length > hacker1Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2Length} characters!`)
}


// Iteration 3: Loops
let hacker1Cap = '';

for(let i = 0; i < hacker1Length; i +=1) {
  hacker1Cap += `${hacker1[i].toUpperCase()} `;
  
}
console.log(hacker1Cap.trim());

// Bonus time
// Level 1:

const textLoren = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque odio vel elit mattis fermentum. Ut ultricies, nisl sed malesuada consectetur, libero risus lobortis erat, pellentesque luctus odio lorem id odio. Praesent sit amet eleifend leo. Proin nec commodo tellus, at fringilla odio. In aliquam lacus tellus, ac egestas arcu sollicitudin non. Nulla velit arcu, blandit nec tempus quis, viverra at ipsum. Vivamus laoreet lacinia mi vitae mollis. Pellentesque eros est, aliquam non vehicula id, feugiat rutrum nibh. Phasellus vel eros in sapien convallis iaculis et ac dui. Nunc tristique ante et mi eleifend accumsan. Aliquam ornare tortor sit amet risus rhoncus varius feugiat non purus. Maecenas tristique lorem ex. In ac elit nunc. Aenean consectetur, mauris in maximus scelerisque, sapien velit rhoncus nisl, nec rutrum sapien risus eu nulla.

Morbi nunc lorem, fermentum eget purus vitae, tincidunt consequat felis. Nam nisi justo, fermentum vitae dapibus sit amet, dictum quis lacus. Integer pulvinar volutpat ex, sit amet fermentum nisl pretium vitae. Pellentesque ut sem quis nisi finibus rhoncus vitae quis diam. Sed scelerisque id diam eget tempor. Maecenas semper enim at quam laoreet, rutrum tempor tellus semper. Maecenas porta lacus diam, a eleifend tortor bibendum ac.

Nam luctus lectus sit amet magna aliquet congue. Etiam at iaculis felis, a egestas ligula. Quisque accumsan ultrices consectetur. Ut interdum ante libero, quis fermentum orci ullamcorper ut. Aliquam vel ornare orci. Donec porta faucibus ornare. Aliquam mauris lectus, varius eu aliquet in, mattis ut risus. Nulla ultricies odio nec purus rhoncus vehicula. Pellentesque eu nunc lectus.`;

let resultado = textLoren.split(' ');


console.log(resultado.length);