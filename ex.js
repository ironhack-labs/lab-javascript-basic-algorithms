// EXERCÍCIO 1
console.log(`\nEXERCÍCIO 1:\n`);

let hacker1 = `Marco Modena`;
let hacker2 = `Vinicius Adamy`;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// EXRCÍCIO 2
console.log(`\nEXERCÍCIO 2:\n`);

if(hacker1.length==hacker2.length){
    console.log(`Wow, you both got equally long names, ${hacker1.split(" ").join("").length} characters!`);
} else if (hacker1.length<hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.split(" ").join("").length} characters`);
} else {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
}

// EXERCÍCIO 3
console.log(`\nEXERCÍCIO 3:\n`);

console.log(hacker1.toUpperCase().split(" ").join("").split("").join(" "));
console.log(hacker2.split("").reverse().join(""));

if(hacker1.localeCompare(hacker2)==-1){
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2)==1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both got the same name?`);
}

// EXERCÍCIO BONUS
console.log(`\nEXERCÍCIO BONUS:\n`);

let originalText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, justo nec ornare lobortis, metus est congue ipsum, id pellentesque nisi massa eget dui. Donec a dolor augue. Curabitur malesuada non enim vel sodales. Curabitur rhoncus id sapien vel rhoncus. Curabitur congue leo nec mi iaculis, a auctor magna porta. Donec id ante tortor. Phasellus congue eros et odio feugiat sodales. Praesent tempus non libero et fringilla. Nunc iaculis risus ac libero posuere efficitur. Sed lobortis mattis arcu molestie aliquam. Pellentesque ac ullamcorper ante. Integer ut mauris sit amet arcu sagittis dignissim.
Morbi tristique nibh vel orci vestibulum lacinia. Vestibulum ultrices massa non molestie commodo. Integer condimentum mi eget vulputate tincidunt. Maecenas vel nulla rhoncus, viverra leo vel, placerat mauris. Sed faucibus tortor quis arcu luctus bibendum. Integer molestie posuere justo, non vulputate felis sodales ut. Nullam eros nunc, consequat ac scelerisque et, viverra id est.
Nulla ac libero eget magna suscipit aliquet vel a felis. Proin vel rutrum massa, ultrices feugiat magna. Etiam mollis iaculis turpis. Curabitur consequat vitae ante quis porta. Cras ut pharetra libero. Cras maximus vel mi ornare tempor. Fusce in lacinia massa. Aenean libero tortor, dignissim et enim vel, vulputate commodo eros.`;
let compareText = `et`;
console.log(`Total number of words in the string: ${originalText.split(" ").length}`);
console.log(`Total number of matches to "${compareText}": ${originalText.match(/\bet\b/gmi).length}`);