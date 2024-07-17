// Iteration 1: Names and Input
const hacker1 = "Nicolas";
console.log("The driver's name is", hacker1);

const hacker2 = "Anzoategui";
console.log("The navigator's name is", hacker2);


// Iteration 2: Conditionals
const charDriver = hacker1.length;
const charNav = hacker2.length;

if(charDriver > charNav){
    console.log(`The driver has the longest name, it has ${charDriver} characters.`);
}
else if(charDriver < charNav){
    console.log(`It seems that the navigator has the longest name, it has ${charNav} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${charDriver} characters!`)
}


// Iteration 3: Loops
let driverCapName = "";

for (let i=0; i<=hacker1.length -1; i++) {
    const capLetters = hacker1[i].toUpperCase();
    driverCapName += capLetters + " ";
}

console.log(driverCapName);


/*********************************************************/
let navReverseName = "";

for (let i=hacker2.length -1; i>=0; i--) {
    const navChar = hacker2[i];
    navReverseName += navChar;
}

console.log(navReverseName);


/*********************************************************/
const order = hacker1.localeCompare(hacker2);

if(order < 0) {
    console.log("The driver's name goes first.");
}
else if (order > 0) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}


// Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, magna sed dictum laoreet, quam nibh tristique justo, at luctus velit ipsum at nibh. Aliquam faucibus orci id cursus varius. In nulla magna, mollis et urna sit amet, vehicula porttitor leo. Donec sapien magna, porta nec semper ultrices, efficitur vel nisi. Nulla porttitor, augue ut placerat sagittis, nisi metus euismod sapien, non aliquam nisi orci sit amet sem. Proin ullamcorper porttitor nulla, et ultrices eros fermentum a. Vestibulum scelerisque metus quis elit pharetra sagittis. Ut et luctus sem. Duis ornare maximus orci ornare semper. Nullam ut massa vitae lectus blandit viverra in sit amet orci. Aenean id mi nec orci sodales ultrices non a felis. Duis commodo euismod dignissim.

Donec porttitor consectetur maximus. Vivamus hendrerit elit vitae mauris accumsan, vitae molestie arcu volutpat. Vestibulum vitae turpis lorem. Nullam accumsan euismod luctus. Cras ac sem augue. Fusce tincidunt, erat non hendrerit scelerisque, est dolor pretium tortor, et rutrum mauris leo id metus. Curabitur faucibus, leo eget hendrerit elementum, ligula diam ultrices ex, vestibulum blandit dolor nibh sodales dolor. Fusce ultricies tellus eu libero accumsan consectetur. Maecenas iaculis feugiat elit, vitae ullamcorper sem commodo quis. Fusce erat dui, egestas in feugiat a, porta at massa. Aliquam lacinia ut diam in malesuada. In ut suscipit turpis. Maecenas et elit a dolor pharetra egestas. Praesent in commodo metus. Mauris quis massa feugiat, vulputate odio at, dapibus mauris. Etiam eu placerat leo.

Aenean ornare sapien non sapien feugiat, ut ullamcorper libero tincidunt. Donec pellentesque luctus ultrices. In fringilla erat eu vehicula sollicitudin. Fusce maximus tincidunt felis, et posuere eros varius id. Vestibulum id tortor laoreet, maximus diam sollicitudin, scelerisque eros. Vivamus id fringilla sem, vitae consectetur augue. Morbi volutpat elementum orci, sit amet viverra sapien facilisis sed. Donec tempor magna nec mi tristique vulputate. Cras faucibus ac felis et tincidunt. Praesent facilisis sem a velit lobortis, eget volutpat neque gravida. Integer sed consequat elit. Pellentesque nibh nisi, venenatis id nisi vel, auctor sodales metus. Sed in ligula nisl. Praesent aliquam ex nisl, in ullamcorper ipsum porttitor ac. Fusce placerat pulvinar nulla ut vulputate.`;

function wordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(wordCount(longText));


let subStr = "et";

function subCount(str) {
    return str.split(subStr).length -1;  
}

console.log(subCount(longText));
