// Iteration 1: Names and Input

const hacker1 = "Rafael";
const hacker2 = "Helena";

console.log("The driver's name is", hacker1);
console.log("The navigator's name is", hacker2);


// Iteration 2: Conditionals

const nameHacker1 = hacker1.length
const nameHacker2 = hacker2.length

console.log(nameHacker1);
console.log(nameHacker2);

if (nameHacker1 > nameHacker2){
    console.log(`The driver has the longest name, it has ${nameHacker1}`);
}
else if (nameHacker2 > nameHacker1) {
    console.log(`It seems that the navigator has the longest name, it has ${nameHacker2} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${nameHacker1 || nameHacker2} characters!`);
}


// Iteration 3: Loops

// 3.1

const splitNameHacker1 = hacker1.split('');
const withSpaceNameHacker1 = splitNameHacker1.join(' ');
const finalNameHacker1 = withSpaceNameHacker1.toLocaleUpperCase();
console.log(finalNameHacker1);

// 3.2

for (let i = hacker2.length - 1; i >= 0; i --) {
    console.log(hacker2[i]);
}

// 3.3 

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// BONUS
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper aliquet lectus, consectetur aliquam odio tristique et. 
Donec efficitur volutpat metus non placerat. Etiam blandit odio risus, volutpat semper quam varius fermentum. 
Nunc mi metus, vulputate quis sagittis vitae, tincidunt at nisi. In tellus purus, interdum sit amet ultrices id, ultrices sit amet tortor. 
Sed rhoncus lacinia mi, id posuere leo tempus vitae. Donec augue erat, consequat eu scelerisque et, interdum non nulla. 
In a orci quis sem accumsan laoreet at at enim. Cras ornare odio at dolor feugiat, quis elementum nisi auctor. 
Ut auctor tortor nec nisi auctor, quis maximus nisi cursus. Vivamus luctus dignissim fermentum. 
Suspendisse interdum, est a malesuada pulvinar, mauris sapien placerat nulla, eget faucibus risus massa vehicula arcu.

Ut tempus felis in ipsum ornare eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
Phasellus a placerat est. Donec non venenatis eros, non hendrerit orci. Morbi auctor purus eu tincidunt malesuada. 
Pellentesque egestas nisl quis velit tincidunt sagittis. Ut dignissim nunc in hendrerit sagittis. 
Fusce rhoncus neque sed odio ultrices tincidunt. Vestibulum sit amet libero diam. 
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Proin a augue purus. Sed at metus eget sapien lobortis rutrum. Aenean sit amet diam vel nunc vehicula fringilla. 
Mauris vestibulum tincidunt porttitor. Phasellus mi quam, faucibus eget hendrerit a, ullamcorper non ex. 
Donec maximus mauris diam, at cursus quam imperdiet eu. Ut dignissim dictum lacus, non vulputate odio bibendum eu. 
Sed vel auctor lorem. Maecenas id interdum ipsum, cursus vehicula turpis. Donec rutrum molestie orci. 
Pellentesque tempus ultrices ligula quis pellentesque.`;

function numberWords (longText) {
    
}
console.log(longText.split(" ").length);
console.log(longText.match("et"));