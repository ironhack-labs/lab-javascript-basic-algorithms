// Iteration 1: Names and Input
let hacker1 = 'Raul';
console.log(`The driver's name is ${hacker1}`)
let hacker2 ='Yasmin';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals 
if(hacker1.length > hacker2.length){
   console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);
}
else if(hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
const str = hacker1.toUpperCase();
let newStr = "";
for (let i = 0; i < hacker1.length; i++) {
  newStr += str[i] + " ";
}
console.log(newStr);
//3.2
let newArray = "";
for (let i = hacker2.length - 1; i >= 0 ; i--){
    newArray += hacker2[i] ; 
}
console.log(newArray);
//3.3
if (hacker1 > hacker2) {
    console.log("The driver's name goes first."); 
} else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}

//Bonus 1: 

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ultrices orci. Vestibulum rutrum metus non egestas faucibus. Fusce ornare elit id fermentum dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tincidunt in lectus nec dapibus. Proin in mauris ut urna pellentesque viverra nec vel justo. In mollis nisi eu fermentum iaculis.

Cras sed mauris lobortis metus vulputate feugiat aliquet et ligula. Ut dapibus est id tortor commodo, auctor fermentum sem gravida. Integer efficitur sapien a turpis dignissim, sit amet vehicula enim facilisis. Praesent nisl odio, maximus ut libero tincidunt, molestie gravida erat. Duis dignissim ante sed leo cursus blandit. Curabitur congue mattis dolor in volutpat. Maecenas suscipit vulputate urna, vel tristique nunc viverra mollis. Integer venenatis lectus lectus, nec eleifend odio facilisis at. Suspendisse commodo vel est a porta. Aliquam erat volutpat.

Praesent a rhoncus enim, gravida tincidunt urna. Mauris nec elementum est. Cras in risus ac dui rutrum hendrerit vitae et nibh. Quisque rhoncus tincidunt mi nec tempor. Pellentesque ullamcorper ex magna, in mattis diam bibendum eget. Nunc nec est venenatis, varius tellus rutrum, luctus tellus. Sed at fringilla diam. Donec ornare suscipit augue vel maximus. Suspendisse a tortor tempor, semper metus ut, maximus diam. Donec pellentesque congue nisi, a blandit urna fringilla sed. Maecenas ut sem porta, aliquet elit accumsan, ultricies mauris. In laoreet magna diam, quis faucibus ante dictum ut. Proin ac pretium elit. Suspendisse rutrum, tortor id cursus semper, velit dui cursus magna, sed rhoncus velit felis pretium massa. Mauris pretium et libero et elementum.`

let numOfWords = longText.split(" ");

console.log(numOfWords.length);

let etCount = 0;

  for (i = 0; i < longText.length; i++) {
    if ((longText[i] === "e") && (longText[i + 1] === "t") && (longText[i - 1] === " ") && longText[i + 2] === " ") {
        etCount++;
    }
  }
  console.log(etCount);