// Iteration 1: Names and Input

let hacker1 = "Cristina";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Angela";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
};


// Iteration 3: Loops

//3.1

let driverUpperCase = hacker1.toUpperCase();

let separated = "";

for (let i = 0; i < driverUpperCase.length; i++) {
    separated += driverUpperCase[i] + " ";
};

console.log(separated);


//3.2

let reversed = "";

console.log(navigator.length)
for (let j = navigator.length-1; j >= 0; j--) {
    
    reversed += navigator[j] + "";
};
console.log(reversed);


//3.3

if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}else if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
} else {
    console.log("Yo, the navigator goes first definitely");
};

//Bonus 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis sollicitudin libero quis aliquet. Pellentesque convallis volutpat nisi, a convallis arcu ultrices quis. Vestibulum efficitur odio nisl. Proin in consequat est. Curabitur in dui ac velit facilisis pretium. Pellentesque sit amet tellus bibendum neque porta consectetur. Nullam eu commodo ante. Sed id erat posuere, pellentesque eros nec, volutpat lectus. Cras gravida neque mi. Quisque luctus molestie mi, at sodales felis eleifend eget. Donec elementum interdum velit nec tempor. Duis euismod nibh non nibh dignissim faucibus. Morbi et feugiat metus, nec dapibus nulla. Nullam lacinia finibus egestas. Vestibulum iaculis nulla in purus fringilla pharetra. Quisque pretium sagittis dolor eget porta. Curabitur sit amet arcu quis dolor gravida malesuada vitae pellentesque risus. Nullam lectus eros, ultricies ut tempor vitae, pharetra non tortor. Cras diam diam, blandit sed ex eu, posuere lacinia magna. Fusce pulvinar leo eget enim rhoncus sodales. Nulla facilisi. Suspendisse pharetra ligula in enim convallis, nec rhoncus nunc tempor. Praesent porta varius elementum. Integer ultricies tellus elit, ac molestie augue porta vitae. Phasellus convallis finibus nisi, id ultricies ligula. Duis maximus pharetra consectetur. Duis ac viverra mauris, vel consequat leo. Pellentesque vel ex aliquet, maximus nulla non, auctor odio. Mauris malesuada viverra orci, porta ultrices quam pharetra vel. Donec varius finibus lacus, in ullamcorper risus consectetur nec."

let loremIpsumDividido = loremIpsum.split(" ");

let numPalabras = loremIpsumDividido.length;

console.log(numPalabras);

let loremIpsumEt = loremIpsum.split("et").length;

console.log(loremIpsumEt);

//Bonus 2 

let isPalindrome = "Step on no pets";
let isPalindromeReversed = "";


for (let j = isPalindrome.length-1; j >= 0; j--) {
    
    isPalindromeReversed += isPalindrome[j] + "";
};
//console.log(isPalindromeReversed);

if (isPalindrome.toLowerCase() == isPalindromeReversed.toLowerCase()){
  console.log(`${isPalindrome} it's a palindrome!`);
} else {
  console.log(`${isPalindrome} isn't a palindrome!`);
}

