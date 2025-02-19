// Iteration 1: Names and Input
const hacker1 = "Peter";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Sarah";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let upperCasedName = hacker1.toUpperCase();

let  driverNameWithSpace = ''; 

for (let i = 0; i < upperCasedName.length; i++) {
    driverNameWithSpace += upperCasedName[i] + ' ' ;
}

console.log(driverNameWithSpace.trim());

/*3.2*/

let reverseName1 =''; 
let reverseName2 ='';

for (let i = hacker1.length -1; i >= 0; i--) {
    reverseName1 += hacker1[i];
}
for (let j = hacker2.length -1; j >= 0; j--) {
    reverseName2 += hacker2[j];
}

console.log(reverseName1);
console.log(reverseName2);

/*3.3*/

if ( hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
}

/*Bonus*/ 

let longText = "Lorem ipsum et dolor sit amet, et! consectetur adipiscing elit. Nam sit amet est eu est vulputate faucibus eget nec lacus. Vivamus iaculis mi vel massa tristique et finibus. Aliquam non accumsan ante. Aenean mattis vitae augue vel et convallis. Praesent elit elit, dignissim non tempor quis, dapibus at ante. Mauris quis gravida quam. Ut id nisi eget lectus faucibus scelerisque vitae at arcu. Nullam dignissim augue turpis, maximus lacinia nunc congue nec. Nulla maximus turpis magna, malesuada malesuada neque facilisis at. Vestibulum eros est, sollicitudin et auctor id, mattis nec ex. Duis efficitur odio a risus auctor, id suscipit metus rutrum. Vestibulum euismod consequat faucibus. Nam in lacinia mauris. Cras finibus malesuada eros sed dignissim. Donec non arcu egestas, posuere nulla eget, dictum erat. Nunc posuere eget mi eu sagittis. Sed in consectetur augue. Vestibulum molestie convallis diam a maximus. Fusce ligula tellus, commodo sed elit in, scelerisque tempus nibh. Cras euismod nisl congue condimentum pharetra. Morbi nec lectus molestie, pellentesque ipsum in, vestibulum diam. Etiam iaculis sapien non ultrices sollicitudin. Vivamus id rhoncus leo. Integer vel tincidunt turpis. Curabitur rutrum nibh purus. Aliquam malesuada enim metus, quis scelerisque mauris faucibus et.Integer nec diam tellus. Cras quis feugiat odio, in gravida felis. Maecenas ex justo, imperdiet vel libero vitae, malesuada ultrices est. Fusce eu lacus consectetur, imperdiet diam sed, luctus elit. Vivamus euismod augue nulla, eu ullamcorper ligula pretium eget. Suspendisse vestibulum, urna nec congue euismod, mauris dui pulvinar libero, vel cursus quam mauris ac sem. Etiam massa sem, fringilla blandit metus eleifend, tempus porttitor velit."

let count = 0;
for (let i = 0; i < longText.length; i++) {
    if(longText[i] ===" ") {
        count++;
    }
}

let wordCount = count +1;
console.log(wordCount);

/*Bonus*/

let etCount = 0;
let symbol = ["!", ".", ",","?",";",":", "*"]

for (let i = 0; i < longText.length; i++) {
 if (longText[i -1] === " " && longText[i] === "e" && longText[i +1] === "t" && longText[i +2] === " ") {
    etCount++ 
} else if (longText[i -1] === " " && longText[i] === "e" && longText[i +1] === "t" && symbol.includes(longText[i +2])) {
    etCount++
}
}
console.log(etCount);