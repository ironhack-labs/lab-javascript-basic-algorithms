// Names and Input
console.log(`--------------------------------------------------------------------`);
console.log("Names and Input");

var driver = 'Zabal';
var navigator = 'João';
console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);
//Conditionals
if (driver.length > navigator.length) {
    console.log(`The Driver has the longest name, it has ${driver.length} characters`);
} else if (driver.length == navigator.length) {
    console.log(`Wow, you both got equally long names, ${driver.length}`);
} else {
    console.log(`Yo, navigator got the longest name, it has ${navigator.length}`);
}
// Loops
//Space and capitals letter
console.log(`--------------------------------------------------------------------`);
console.log(`Spaced and capital letter name:`);

var spacedDriver = '';
for (var i = 0; i < driver.length; i++) {
    spacedDriver += `${driver[i]} `;
}
console.log(spacedDriver.toUpperCase());

//Name reverse
console.log(`--------------------------------------------------------------------`);
console.log(`Name reverse:`);

var reverseNavigator = '';
for (var i = navigator.length - 1; i >= 0; i--) {
    reverseNavigator += navigator[i];
}
console.log(reverseNavigator);
console.log(`--------------------------------------------------------------------`);

//Lexicographic order
console.log("Lexicographic order:");
if(navigator.localeCompare(driver) == 1){
    
    console.log(`The driver's name goes first`);

}else if(driver.localeCompare(navigator) == 1){

    console.log(`Yo, the navigator goes first definitely`);

}else{

    console.log(`What?! You both got the same name?`);
}
console.log(`--------------------------------------------------------------------`);

//Bonus
//Palindrome
console.log("Palindrome");
var str = `No 'x' in Nixon`;
var wrapStr = '';
for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/gi)) {
        wrapStr += str[i].toLowerCase();
    }
}
var reverseStr = '';
for (var i = wrapStr.length - 1; i >= 0; i--) {
    reverseStr += wrapStr[i].toLowerCase();
}

if (wrapStr === reverseStr) {
    console.log(`The string '${str}' is a Palindrome`);
} else {
    console.log(`The string '${str}' isn't a Palindrome`);
}
console.log(`--------------------------------------------------------------------`);


//Ex. 10
console.log("Ex.10 - Lorem Ipsum:");
var lorem = `Suspendisse at ipsum tempor, laoreet nisi nec, sodales turpis. 
Phasellus tempus vestibulum sollicitudin. Nulla facilisi. 
Donec pulvinar et orci at elementum. Nulla aliquet, felis fringilla eleifend tempor, 
purus libero ultrices odio, eu laoreet leo quam id neque. Donec convallis luctus purus, 
eu tincidunt nulla lobortis eu. Praesent fringilla sed turpis vitae molestie. Etiam iaculis 
nunc quis nibh fermentum hendrerit vitae id felis. Morbi efficitur, nibh vel vulputate rutrum, 
turpis ex accumsan turpis, sit amet finibus mi eros et est. Donec ipsum arcu, fermentum eget massa
 sit amet, efficitur blandit quam. Fusce at sollicitudin nibh, in vehicula enim.`;

var noSpace = lorem.toLowerCase().split(" ");
var count = 0;
var count2 = 0;
for (var i = 0; i < noSpace.length; i++) {
    count += 1;
    if (noSpace[i].includes('et')) {
        count2 += 1;
    }
}
console.log(`The string: 
"${lorem}" 
has ${count} words.`);
console.log(`-------------------------------`);
console.log(" ");
console.log(`Latin word 'et' appears ${count2}.`);