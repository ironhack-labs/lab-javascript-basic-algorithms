// Iteration 1: Names and Input
let hacker1 = 'Kelly';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Jucimeire";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let result = '';
for (let i=0; i < hacker1.length; i += 1){
    result += hacker1[i].toUpperCase() + ' ';
}
console.log(result);

let result2 = "";
for (let i = hacker2.length - 1; i >= 0; i -= 1){
    result2 += hacker2[i];
}
console.log(result2);

if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1){
    console.log("Yo, the navigator goes first definetely.");
}else{
    console.log("What?!! You both have the same name?");
}

//Bonus 1
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in leo vel urna finibus euismod. Maecenas vitae ligula vitae sem lacinia egestas. Sed fringilla ex quis urna condimentum, ac dapibus diam commodo. Maecenas sit amet erat porta, maximus dui et, dignissim elit. Fusce commodo, velit dapibus congue elementum, magna metus commodo ex, nec aliquet felis ipsum maximus diam. Curabitur eget convallis ipsum. In volutpat lacinia felis ut pulvinar. Integer sodales justo sit amet magna vehicula, luctus blandit mauris semper. Morbi at erat mollis, dignissim ligula nec, vestibulum sem. Ut euismod vel velit bibendum hendrerit. In vitae dui a tortor interdum efficitur et in sem. Nunc sed elementum tortor.

Praesent a lacus condimentum, scelerisque nibh vulputate, ultricies diam. Aliquam viverra odio id lectus posuere, vel fringilla augue tempus. Donec eleifend risus id tempor maximus. Fusce dolor elit, pharetra in pellentesque id, tempus faucibus lorem. Phasellus at tortor sit amet nibh vestibulum rutrum. In at justo ut sapien tincidunt volutpat rutrum et lectus. Ut eget augue sapien. Integer congue massa id tincidunt dictum. Aenean euismod, lacus nec dapibus tincidunt, nulla ipsum tristique purus, in tristique dolor metus non odio.

Fusce elementum viverra feugiat. Fusce aliquam ipsum at facilisis rutrum. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vitae quam nibh. Phasellus risus nibh, porta sed finibus ac, congue et est. Phasellus venenatis imperdiet nisl, eu bibendum est. Aliquam laoreet diam mauris, sit amet scelerisque tellus blandit malesuada. Proin tristique erat a massa eleifend, at pellentesque ipsum blandit. Donec posuere vestibulum nisi sed dignissim. Cras felis ipsum, ultricies ac diam et, consectetur sollicitudin nisi. Quisque diam sapien, tristique ac quam in, varius interdum dui. Integer felis nibh, consectetur ac aliquam eget, maximus eu mi. Phasellus a nulla ac nunc sollicitudin lacinia. Morbi suscipit consequat leo, aliquam porta lorem malesuada sed.`;

let words = paragraphs.split(" ");
console.log(words.length);

