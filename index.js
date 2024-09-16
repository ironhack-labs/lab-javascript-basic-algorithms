// Iteration 1: Names and Input
const hacker1 = "Lea";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Emilie";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`)

// Iteration 3: Loops
// 3.1 
const hacker1Spaced = hacker1.split('');
const hacker1Join = hacker1Spaced.join(' ');
console.log(`${hacker1Join.toUpperCase()}`);

// 3.2
let reverseHacker1 = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    const looper = hacker1[i];
    reverseHacker1 += looper;
}
console.log(reverseHacker1);

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
}
else console.log("What?! You both have the same name?");


// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae laoreet erat. Mauris tristique mi metus, quis tincidunt neque tristique in. Maecenas dictum massa et neque varius, in scelerisque ligula consequat. Phasellus mattis sodales imperdiet. Duis dapibus accumsan porttitor. Nulla blandit lacus metus, at pulvinar orci porttitor sit amet. Sed id enim mattis eros blandit lobortis. Curabitur aliquam interdum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Fusce eget aliquet est. Quisque ullamcorper vitae velit ut facilisis. Donec eget blandit turpis. Vestibulum cursus est augue. Mauris nec nibh quis ligula consequat maximus. Donec vulputate lorem non metus consequat imperdiet. Suspendisse rutrum massa quis iaculis dictum. Sed maximus, diam at ultrices consectetur, ex orci ornare mauris, vel facilisis magna ipsum in nulla. Aliquam enim nulla, aliquet sit amet sollicitudin ut, hendrerit vitae enim. Aenean blandit sed risus mollis placerat. Cras sit amet dignissim nunc. Nullam eleifend ipsum velit, eget placerat magna vehicula ac. Ut sed augue malesuada, placerat purus non, finibus nibh.

In et felis ac mauris scelerisque interdum sit amet nec lectus. Nam venenatis fermentum nisl, euismod maximus quam facilisis at. Pellentesque sed justo sed ex ultricies finibus a nec orci. Proin tincidunt magna eu blandit lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut at magna blandit, consectetur mauris eu, luctus erat. Nunc ac lectus nec tortor tincidunt condimentum. Morbi risus tellus, dapibus quis risus eget, cursus hendrerit purus. In aliquam aliquam ipsum sed porta. Nam varius enim id dui fringilla, non efficitur nisl aliquet. Morbi consequat velit et nibh vehicula, id condimentum felis pulvinar. Nulla at placerat metus. Quisque fringilla consequat elementum. Proin ut ornare lorem. Phasellus et egestas felis. In sit amet fringilla ipsum, quis aliquam turpis.`

function counter(str) {
    return str.trim().split(/\s+/).length;
}
console.log(`Total word count: ${counter(longText)}`);
