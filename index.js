// Iteration 1: Name"s and Input
const hacker1 = "John";
const hacker2 = "Ruben";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

const lengthHack1 = hacker1.length;
const lengthHack2 = hacker2.length;

if (lengthHack1 > lengthHack2) {
    console.log(`The driver has the longest name, it has ${lengthHack1} characters.`)
} else if (lengthHack2 > lengthHack1) {
    console.log(`It seems that the navigator has the longest name, it has ${lengthHack2} characters.`)
} else if (lengthHack1 === lengthHack2) {
    console.log(`Wow, you both have equally long names, ${lengthHack1} characters!`)
}

// The driver has the longest name, it has XX characters.or
//     - It seems that the navigator has the longest name, it has XX characters.or
//         - Wow, you both have equally long names, XX characters!.
// Iteration 3: Loops

const hacker1Capital = hacker1.toUpperCase()
let hacker1Separate = ""
let hacker2Reverse = ""
for (let i = 0; i < hacker1.length; i++) {

    hacker1Separate += hacker1Capital[i]
    if (i < hacker1.length - 1) {
        hacker1Separate += " ";
    }

}
console.log(`"${hacker1Separate}"`)


for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i]
}

console.log(`"${hacker2Reverse}"`)


if (hacker1[0] === hacker2[0]) {
    console.log(`What?! You both have the same name?`)
} else if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`)
}

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu mauris velit. Aenean luctus, eros sit amet elementum varius, nibh tortor hendrerit mi, sit amet posuere erat enim eu ex. Sed molestie pretium massa nec pulvinar. Phasellus et commodo nunc. Mauris eleifend tincidunt augue a auctor. Ut lacinia nibh sed lobortis congue. Nulla sed est quam. Phasellus malesuada accumsan nulla vulputate mattis. Donec a fringilla mi.Etiam varius mauris ut purus aliquet, nec eleifend tellus feugiat. Mauris mauris augue, suscipit eu luctus eget, feugiat sed nisl. Donec gravida massa a tellus congue, ut mollis nisl iaculis. Quisque iaculis, dui eget convallis tincidunt, neque purus convallis justo, aliquam lobortis enim magna ac ex. Pellentesque posuere dui nec tempor vulputate. Vivamus lobortis efficitur enim, a dictum tortor tincidunt et. Nullam a lorem et mauris volutpat sollicitudin vitae fringilla dui. Fusce ornare lectus a augue mollis pharetra. Duis non risus scelerisque, finibus tellus vehicula, tempus magna. Nullam sollicitudin sapien nec justo commodo, ultricies facilisis lorem hendrerit. Proin auctor nunc varius, imperdiet ante quis, commodo leo. Aliquam sit amet libero eu risus finibus egestas. Fusce ut finibus tellus, in feugiat ex. Donec mauris tortor, rutrum et imperdiet feugiat, dapibus vulputate ex. Duis justo elit, porttitor sed fringilla ac, interdum eu arcu. Aenean vel dapibus risus. Nulla malesuada eget nisl vitae aliquet. Sed consectetur porttitor blandit. Ut a dignissim nisi, in faucibus velit. Nunc eget odio elementum, tempus dui hendrerit, consequat leo. Nam molestie lacinia nulla, ac eleifend lorem lacinia ut. Pellentesque hendrerit ligula at nisi facilisis, et pellentesque felis vulputate. Etiam ultricies mauris libero, non vehicula massa iaculis vitae. Donec ipsum nibh, imperdiet id velit eu, semper sollicitudin sapien. Aliquam et magna orci. Nullam a tellus tempor, suscipit ante a, ultrices nibh. In erat leo, laoreet sit amet fermentum et, lobortis vitae turpis. Ut non maximus arcu, a elementum nibh. Fusce mauris ex, maximus in rhoncus eu, scelerisque at ipsum. Nullam lobortis eget nisi sed iaculis. Donec tristique bibendum tempus. "
let count = 0
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        count++
    }
}
console.log(count)