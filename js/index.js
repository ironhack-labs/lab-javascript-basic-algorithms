// Iteration 1: Names and Input
let hacker1 = 'Marcelo Milhomem';

console.log(`The diver's name is ${hacker1}`);

let hacker2 = 'Dino Marchiori';

console.log(`The navigator name is ${hacker2}`);


//
// Iteration 2: Conditionals 

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
} else {
    console.log("Ops, we have some unexpected result.");
}

// Iteration 3: Loops

let nameUpperCaseWithSpace = "";

for (const value of hacker1) {
    nameUpperCaseWithSpace += value.toUpperCase() + " ";
}

console.log(nameUpperCaseWithSpace);

let inverseName = "";

for (let i = hacker2.length -1; i >= 0; i--) {
    inverseName += hacker2[i];
}

console.log(inverseName);

const lexicalOrder = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase());

if(lexicalOrder == 1) {
    console.log(`The ${hacker2} goes first`);
} else if (lexicalOrder == -1) {
    console.log(`The ${hacker1} goes first`);
} else if (lexicalOrder == 0) {
    console.log("What?! You both have the same name?")
} else {
    console.log("Ops, error!");
}

//Bonus

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend lobortis turpis. Phasellus pulvinar iaculis purus, id efficitur velit tincidunt et. Nam dapibus mauris nulla, vitae luctus sem tristique non. Fusce mollis magna in ligula suscipit, sit amet efficitur ante ultricies. Quisque venenatis maximus dolor. Etiam a tellus quis dui viverra mollis. Sed ac hendrerit neque, tincidunt sagittis lorem. Integer diam nunc, auctor ac nunc ut, ultrices luctus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at est at velit semper viverra placerat quis orci. Cras nibh elit, convallis sed sodales vel, eleifend non nibh. Fusce nec purus nec turpis suscipit tincidunt vel ac neque. Proin iaculis, sem a ultrices placerat, diam urna tempus purus, ut luctus massa lectus vitae libero. Donec nisi massa, convallis ac nibh at, ornare pharetra dui. Quisque pulvinar consectetur turpis quis tincidunt. Vivamus consectetur malesuada risus.

Vivamus vitae sem a arcu aliquam commodo. Vivamus sit amet varius elit. Curabitur faucibus metus quis leo hendrerit semper. Fusce ac ante enim. Curabitur mauris quam, congue ac tellus porttitor, posuere maximus dolor. Quisque mollis volutpat aliquam. Mauris eu feugiat est. Maecenas et condimentum purus, eget blandit sapien. Pellentesque nec molestie libero, eget vehicula nulla.

Aliquam erat volutpat. Phasellus condimentum pulvinar et velit. Sed et sollicitudin imperdiet erat. Suspendisse neque nisi, vulputate id sem nec, dapibus malesuada lacus. Nulla tempor est sed mauris scelerisque porttitor. Donec sed turpis dignissim urna egestas pharetra. Sed ex leo, molestie sed nisi in, ultricies volutpat mauris. Pellentesque in tortor ipsum.`

let numberOfWords = 0;
let countEt = 0;

for (let i = 0; i < text.length; i++) {
    numberOfWords++;

    let latinWord = `${text[i - 3]}${text[i - 2]}${text[i - 1]}${text[i]}`.toLowerCase();
    if (latinWord == " et ") {
        countEt++;
    }   
}

console.log(countEt);
console.log(numberOfWords);

//Bonus 2 
