// Iteration 1: Names and Input
const hacker1 = "Paul"
console.log("The navigator's name is " + hacker1);

const hacker2 = "Keoxx"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops
let newDriver = "";


for (let i = 0; i < hacker1.length; i++) {
    if (i < hacker1.length - 1) {
        newDriver += hacker1[i].toUpperCase() + " ";
    } else {
        newDriver += hacker1[i].toUpperCase();
    }
}
console.log(newDriver);


var newNavigatorName = "";

for (var i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);


let textLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu metus at lectus dignissim gravida ut sed lectus. Vivamus vehicula tempus arcu, sit amet placerat orci. Maecenas in dui eros. Vestibulum nec erat ac magna dictum molestie. Aenean quis aliquet ligula, id mollis quam. Phasellus dapibus pretium odio, id auctor sapien elementum vel. Suspendisse tellus est, posuere quis tortor non, tempus interdum nulla. Nunc ornare ligula et nisi tempor pellentesque. Vivamus at elit nisi. Duis ultricies ac nisl vitae eleifend. Phasellus mollis, magna vel consectetur tincidunt, lacus nisl hendrerit purus, vel ultricies elit ante vel elit.
Nam ultrices turpis et velit rhoncus, vel malesuada urna dignissim.Phasellus imperdiet odio nisi, a iaculis felis tincidunt aliquam.Praesent lectus sapien, cursus nec lacinia laoreet, consequat et ligula.Vivamus tristique est id elementum varius.Ut posuere, odio nec egestas luctus, dolor arcu dictum lorem, id ornare purus tellus nec leo.Maecenas vitae augue eget enim efficitur cursus.Pellentesque gravida sem eu nulla finibus interdum.Sed rhoncus eros arcu, id elementum erat dapibus in.Fusce tellus ex, ullamcorper consectetur purus et, faucibus ultricies nisl.Nulla egestas libero nec ligula suscipit, eget pulvinar justo ultrices.Donec quis magna volutpat, mollis tellus nec, dapibus dolor.Nullam eros lorem, semper eget massa eget, elementum interdum nulla.Suspendisse potenti.Fusce feugiat lorem nunc, et pulvinar leo consequat non.
Quisque imperdiet leo eget arcu tempus, eu sagittis neque eleifend.Integer tincidunt dolor neque, et pretium enim facilisis quis.Proin sed molestie ligula.Morbi suscipit vehicula rhoncus.Vivamus sit amet accumsan sem, in auctor sem.Morbi quis varius velit.Morbi vel felis at ex tempor euismod.Nullam sollicitudin sodales aliquet.Donec vel pellentesque orci, tempor sagittis sapien.Phasellus tristique dapibus ante, nec ultricies enim sagittis nec.`
let words= "";
let etWords= "";
for (let i = 0; i < textLorem.length; i++) {
    if (textLorem[i] === ' ' || textLorem[i] === '\n') {
        words++;
}else if(
    (textLorem[i-1] === ' ' && textLorem[i] === 'e')
    && textLorem[i+1] === 't' 
    && (textLorem[i+2] === ' ' || textLorem[i+2] === ',')){
        etWords++;
    }
}
console.log(words);
console.log(etWords);
