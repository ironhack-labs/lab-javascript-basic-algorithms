// Names and Input
var driver = 'Mariana';
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
var spacedDriver = '';
for (var i = 0; i < driver.length; i++) {
    spacedDriver += `${driver[i]} `;
}
console.log(spacedDriver.toUpperCase());

//Name reverse
var reverseNavigator = '';
for (var i = navigator.length - 1; i >= 0; i--) {
    reverseNavigator += navigator[i];
}
console.log(reverseNavigator);
console.log(" ");

//Lexicographic order


//Bonus
//Palindrome
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
console.log(" ");
//Ex. 10
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
console.log(" ");
console.log(`Latin word 'et' appears ${count2}.`);