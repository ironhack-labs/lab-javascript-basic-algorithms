console.log("I'm ready!");

//Iteration 1

let hacker1 = "Alfredo";
console.log("The driver's name is " + hacker1);

let hacker2 = "Sebastian"
console.log("The navigator's name is " + hacker2);

//Iteration 2

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

//Iteration 3
//3.1

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
    if (i < hacker1.length - 1) {
        console.log(' ');
    }
}

//3.2

for (let j = hacker2.length - 1; j >= 0; j--) {
    console.log(hacker2[j]);
}

//3.3

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log('The driver\'s name goes first.');
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both have the same name?');
}

//Bonus 1

let loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit enim, tristique eget suscipit eu, tempus ut lectus. Morbi et ex ex. Donec aliquam feugiat augue, sit amet imperdiet nulla euismod ut. Morbi in odio at felis vestibulum vulputate blandit nec massa. Mauris ut eros sollicitudin, dapibus dolor non, rhoncus ante. Nulla facilisi. Suspendisse ac massa lacus. Integer mollis ex eget mi mollis lobortis.
Integer facilisis lorem nec tellus aliquet iaculis. In fermentum arcu ut ornare semper. Sed varius, enim quis pellentesque rutrum, ligula nisl sollicitudin mauris, vel mattis felis arcu condimentum ligula. Etiam at lacinia odio. Vestibulum quis laoreet ipsum. Etiam quis lorem vehicula, efficitur magna quis, mattis nunc. In hac habitasse platea dictumst.
Curabitur sollicitudin dolor quis laoreet sollicitudin. Donec mollis nisl eget pellentesque semper. In hac habitasse platea dictumst. Nullam fermentum convallis euismod. Etiam ultrices purus ut diam varius molestie. Vivamus interdum et nulla id auctor. Vestibulum gravida lectus sit amet gravida posuere. Proin dapibus magna accumsan fermentum volutpat. Praesent eu ex tortor.
`;

let spaceCount = 0;
for (let k = 0; k < loremIpsumText.length; k++) {
    if (loremIpsumText[k] === " ") {
        spaceCount++;
    }
}
let wordCount = spaceCount + 1;
console.log(wordCount);

//Bonus 2







