// Iteration 1: Names and Input

const hacker1 = "Charles";
console.log ("The driver's name is " + hacker1);

const hacker2 = "Guilherme";
console.log("The driver's name is " + hacker2);


// Iteration 2: Conditionals

const driver = hacker1.length;
const navigator = hacker2.length;


if (driver > navigator) {
    console.log(`The driver has the longest name, it has ${driver} characters`);
} 

else if (driver < navigator){
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters`);
}

else {
    console.log (`Wow, you both have equally long names, ${driver} characters`);
}


// Iteration 3: Loops

const hacker1UpperCase = hacker1.toUpperCase(); 
console.log (hacker1UpperCase);


let spaceName = " " ;

for (let i = 0; i < hacker1.length; i++) {

    spaceName += hacker1UpperCase[i] + " ";
}
    console.log(spaceName);


let reversSpaceName = " " ;    
for (let i = hacker1.length -1; i >= 0; i--) {

    reversSpaceName += hacker1[i];
}
    console.log(reversSpaceName);
 



    
if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}




// Iteration 4: bonus time!!!


const longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam magna. Nam id nunc vel libero fringilla euismod. Cras in justo et odio rutrum eleifend. Nullam et quam vitae nulla posuere luctus. Integer et finibus eros, nec ultrices leo. Mauris sit amet quam id est aliquet congue. Suspendisse eget dui nec turpis malesuada ullamcorper at vitae libero. Vestibulum ac ante at mi ultrices suscipit non non magna. Sed sollicitudin nunc vitae nisl ultricies, ut mattis turpis consectetur. Nulla a tortor id ante tincidunt ultrices. Ut hendrerit neque nec eros aliquam mattis. Morbi lacinia efficitur magna, ac lacinia odio mattis vel. Integer accumsan eget odio vitae lacinia. Praesent commodo leo in orci malesuada consequat. Fusce eget lacus nec eros consequat sodales. Vivamus vitae tincidunt est. Phasellus sed risus sit amet lorem feugiat tincidunt. Sed dapibus convallis ligula, vel tincidunt ipsum pellentesque vel. Proin viverra, justo nec rhoncus feugiat, enim nisl mattis est, vitae feugiat mauris nulla eget sem.";


const countWords = longtext.split('');

const wordsCount = countWords.length;

console.log (wordsCount);

