// Names and Input
let hacker = 'Giuli';
console.log(`Driver name is ${hacker}`);
let hacker2 = window.prompt("What's your name?");
console.log(`The navigator's name is ${hacker2}`);


//Conditionals
if (hacker.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker.length + ' characters');
}
else if (hacker.length < hacker2.length) {
    console.log(`The Navigator has the longest name, it has ${hacker2.length} characters`);

}
else  {
    console.log(`wow, you both got equally long names, ${hacker.length} characters!!`);
};

//Loops

for ( let name =0; name < hacker.length; name ++){
    let printName = hacker.toUpperCase();
    console.log(printName);
};

for (let i = hacker.length-1; i>= 0; i--){
    let reverseName = hacker[i];
    console.log(reverseName);
}
//debugger
//Lexigraphic order

if (hacker > hacker2) {
    console.log('The driver\'s name goes first');
} else if (hacker < hacker2) {
    console.log('Yo, the navigator goes first definitely');

} else {
console.log('What?! You both got the same name?')
}

// bonus time
let newWord = window.prompt("Add a word");
function palindrome (newWord){
    return true;
}
palindrome ('ciao');



let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in egestas lectus. Nunc sed convallis orci. Aenean ligula sapien, posuere sit amet varius ut, auctor volutpat mi. Vestibulum iaculis sem ac ipsum ultricies tempus. Nulla non nulla velit. Sed at ultrices nisl. Suspendisse congue tincidunt ipsum ut semper. Pellentesque commodo ullamcorper tellus id faucibus. Aenean tincidunt nec orci eget consequat. Sed sed quam vitae nisl vehicula laoreet eget ac lacus. Vestibulum sed ligula magna. Maecenas et pharetra metus. Aliquam et fringilla ante."

console.log(paragraph.split(" ").length);
console.log(paragraph.replace(/[^et]/g, "").length);


//Conditionals


// Lorem ipsum generator
