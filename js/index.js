// Iteration 1: Names and Input
const hacker1 = 'Taylor';
const hacker2 = 'Asif';

console.log(`The driver's name is ${hacker1}!`);
console.log(`The navigator's name is ${hacker2}!`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!!!`)
}

// Iteration 3: Loops

//first task

let driver = hacker1.split('').join(' ')
console.log(driver.toUpperCase());



//second task
let hacker2Navigator = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Navigator += hacker2[i];  
}
console.log(hacker2Navigator);

//third task

if (hacker1.localeCompare(hacker2) === -1 ) {
    console.log(`The drivers's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else 
    console.log(`What?! You both have the same name`);

 //bonus 1

 const lorum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ultrices erat. Duis pretium porta lorem eu tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel diam pellentesque nisi vehicula condimentum. Mauris eu semper metus. Nam vel leo venenatis, sagittis urna a, luctus mi. Curabitur suscipit ut enim vitae efficitur. Cras volutpat tellus enim, eu laoreet nibh convallis ut. Suspendisse eget mal Sed augue arcu, laoreet id venenatis aliquam, varius ut enim. Donec augue leo, ultrices id justo at, pretium tempus leo. Praesent tristique ligula nec enim accumsan, nec malesuada eros consectetur. Ut ullamcorper purus at tellus lacinia, at rhoncus sem feugiat. Nam volutpat nulla ut ullamcorper interdum. Curabitur at mi lectus. Maecenas lacus quam, faucibus tempus eleifend in, tristique eget erat. Mauris feugiat urna in enim tempus iaculis. Ut laoreet vitae risus non rhon Nam viverra, libero et blandit iaculis, neque nisi eleifend odio, vel rutrum enim nunc et lorem. Phasellus euismod nisi quis velit pulvinar, nec rhoncus nisl commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam iaculis dui mi, ac lobortis magna semper non. Aliquam erat volutpat. Sed rutrum felis dignissim malesuada ultrices. Maecenas elementum enim id urna convallis gravida. Nunc non diam maximus ipsum egestas finibus non vitae elit. Morbi eu egestas lorem, et feugiat sapien. Fusce ac arcu eleifend, pretium libero id, placerat nulla. Pellentesque ultrices ut sem nec luctus.";

// count number of words
//console.log(lorum.split('').length - 1);

console.log(wordNum);

// count number of times et is present

console.log(lorum.split('it').length - 1);

// bonus 2






/* .localCompare
Copy Code
var text = "JavaScript";
text = text.split("").join(" ");
*/

